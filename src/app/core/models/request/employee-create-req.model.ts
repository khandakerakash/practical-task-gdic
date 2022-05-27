import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class EmployeeCreateReqModel {
  firstName!:       string;
  lastName!:        number;
  dateOfBirthNgb!:  NgbDateStruct;
  dateOfBirth!:     Date;
  phoneNo!:         number;
  gender!:          string;
  skillName!:       string;
  experienceInYear!:string;
  skillLevel!:      string;
}
