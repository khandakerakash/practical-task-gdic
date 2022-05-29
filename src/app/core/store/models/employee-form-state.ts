export interface EmployeeFormState {
  firstName:       string;
  lastName:        string;
  dateOfBirth:     string;
  phoneNo:         string;
  gender:          string;
  skillName:       string;
  experienceInYear:string;
  skillLevel:      string;
}

export const initialState: EmployeeFormState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  phoneNo: '',
  gender: '',
  skillName: '',
  experienceInYear: '',
  skillLevel: '',

};
