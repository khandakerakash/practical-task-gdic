import { createAction, props } from "@ngrx/store";
import { EmployeeFormState } from "../models/employee-form-state";

export const formValueChange = createAction(
  '[Form] Value Change',
  props<EmployeeFormState>()
);
