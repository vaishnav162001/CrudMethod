package com.employeeCrud.Repo;

import com.employeeCrud.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface empRepository extends JpaRepository<Employee,Long> {

}
