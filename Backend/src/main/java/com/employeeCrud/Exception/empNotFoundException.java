package com.employeeCrud.Exception;

public class empNotFoundException extends RuntimeException{
    public empNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
}
