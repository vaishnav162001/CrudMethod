package com.employeeCrud.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String empName;

    private String empField;

    private int mobileNum;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getEmpField() {
        return empField;
    }

    public void setEmpField(String empField) {
        this.empField = empField;
    }

    public int getMobileNum() {
        return mobileNum;
    }

    public void setMobileNum(int mobileNum) {
        this.mobileNum = mobileNum;
    }

    public Employee(long id, String empName, String empField, int mobileNum) {
        this.id = id;
        this.empName = empName;
        this.empField = empField;
        this.mobileNum = mobileNum;
    }

    public Employee() {
    }
}
