package com.employeeCrud.Controller;

import com.employeeCrud.Entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.employeeCrud.Repo.empRepository;
import java.util.List;
import java.util.Optional;
import  com.employeeCrud.Exception.empNotFoundException;

@RestController
@CrossOrigin("http://localhost:5173/")
public class empController
{
    @Autowired
    private empRepository empRepository;

    //post request

    @PostMapping("/emp")
    public Employee newEmployee(@RequestBody Employee newEmployee){
        return  empRepository.save(newEmployee);
    }

    //find all user

    @GetMapping("/emps")
    List<Employee> getAllEmp(){
       return empRepository.findAll();
    }

    //find particular emp

    @GetMapping("/emp/{id}" )
        Employee getEmployee(@PathVariable long id){
         return  empRepository.findById(id)
                .orElseThrow(()->new empNotFoundException(id));
//        if (emp.isPresent()) {
//            return ResponseEntity.ok(emp.get());
//        } else {
//            return ResponseEntity.notFound().build();
//        }

    }

    //for update detail

    @PutMapping("/emp/{id}")
    Employee upadateEmp(@RequestBody Employee newEmp,@PathVariable Long id){

        return  empRepository.findById(id)
                .map(Employee->{
                    Employee.setEmpName(newEmp.getEmpName());
                    Employee.setEmpField(newEmp.getEmpField());
                    Employee.setMobileNum(newEmp.getMobileNum());
                    return empRepository.save(Employee);
                }).orElseThrow(()->new empNotFoundException(id));


//    public ResponseEntity<Employee> updateEmp(@PathVariable long id,@RequestBody Employee empDetails){

//        Optional<Employee> optionalEmp= empRepository.findById(id);
//
//        if (optionalEmp.isPresent()){
//            Employee existingEmp=optionalEmp.get();
//            existingEmp.setEmpName(empDetails.getEmpName());
//            existingEmp.setEmpField(empDetails.getEmpField());
//            existingEmp.setMobileNum(empDetails.getMobileNum());
//
//            Employee updateEmp=empRepository.save(existingEmp);
//            return ResponseEntity.ok(updateEmp);
//        }
//        else {
//         return  ResponseEntity.notFound().build();
//        }
    }

    @DeleteMapping("/emp/{id}")

    String deleteEmp(@PathVariable Long id){
        if (!empRepository.existsById(id)){
            throw new empNotFoundException(id);
        }
        else {
            empRepository.deleteById(id);
            return "Emp with id "+ id + "has been deleted successfully !";
        }
    }
//    public ResponseEntity<Void> deleteEmp(@PathVariable long id){
//        Optional<Employee> optionalEmployee=empRepository.findById(id);
//
//        if (optionalEmployee.isPresent()){
//            empRepository.deleteById(id);
//            return  ResponseEntity.noContent().build();    //204 No Content
//        }
//        else {
//            return ResponseEntity.notFound().build();     //404 Not Found
//        }
//    }
}
