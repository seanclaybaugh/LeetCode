# Write your MySQL query statement below
Select E1.name as Employee from Employee as E1, Employee as E2 where E1.ManagerId = E2.id and E1.salary > E2.salary;