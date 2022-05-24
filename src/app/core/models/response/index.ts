import { EmployeeResModel } from "./employee-res.model";
import { GeneralResModel } from "./general-res.model";
import { LoginResModel } from "./login-res.model";

export const responseModel: any[] = [
  LoginResModel,
  GeneralResModel,
  EmployeeResModel
];

export * from "./login-res.model";
export * from "./general-res.model";
export * from "./employee-res.model";
