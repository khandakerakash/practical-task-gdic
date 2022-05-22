import { AuthService } from "./auth-service/auth.service";
import { EmployeeService } from "./employee-service/employee.service";

export const services: any[] = [
  AuthService,
  EmployeeService
];

export * from "./auth-service/auth.service";
export * from "./employee-service/employee.service";
