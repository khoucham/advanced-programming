
#  Car Repair Management System

## 📌 Project Overview
This project is a Car Repair Management System designed to support the daily operations of a vehicle service garage. \It is inspired by the company **Atlas Autoservice** in Dublin, Ireland.

The system is designed to support the daily operations of a car service garage by managing customers, vehicles, and repair issues in a structured way. The main users of the system include service advisors (managing customers), mechanics, and garage managers, each interacting with the system based on their role. Overall, the system aims to improve efficiency, organization, and tracking of vehicle repairs.

The system supports service advisors in registering customers and vehicles, logging technical issues, and assigning them to appropriate mechanics, while mechanics update job progress and completion status. It also helps managers monitor workshop activity, costs efficiently and register customers if needed. Overall, the system is tailored to improve workflow efficiency and data accuracy within a high-standard dealership environment.

---The unique feature of my system is that it tracks repair history and identifies recurring fault patterns across different car models, helping mechanics diagnose problems faster based on previous cases. For example VW Passat → frequent gearbox issue, Toyota Corolla → brake pad wear issue

## Features
- Manage customers and their vehicles
- Create and track repair issues
- Assign mechanics to repair jobs
- Update repair status (Pending → In Progress → Fixed)
- Maintain service history for each vehicle
- Identify common faults across car models

---

## 👥 Actors
- **Service Advisor**: Registers customers, cars, and creates repair issues  
- **Mechanic**: Views assigned issues and updates repair status  
- **Admin/Manager**: Monitors operations and views reports, register customer  

---

## 🔄 Main Use Case: Diagnose and Repair Car Issue

### Description
This use case describes the process of registering a car repair issue, assigning it to a mechanic, and updating its status until the repair is completed.

### Steps
1. The service advisor registers a customer and their car 
2. The service advisor creates an issue 
3. The system sets status
4. The service advisor assigns issue
5. The mechanic views issue  
6. The mechanic updates the status 
 

