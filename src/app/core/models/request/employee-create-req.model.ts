import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class EmployeeCreateReqModel {
  firstName!:       string;
  lastName!:        string;
  dateOfBirthNgb!:  NgbDateStruct;
  dateOfBirth!:     Date;
  phoneNo!:         string;
  gender!:          string;
  skillName!:       string;
  experienceInYear!:string;
  skillLevel!:      string;
}
