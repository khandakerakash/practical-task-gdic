import { Action, createReducer, on } from "@ngrx/store";
import { formValueChange } from "../actions/employee-form.action";
import { EmployeeFormState, initialState } from "../models/employee-form-state";

const formReducer = createReducer(
  initialState,
  on(formValueChange, (state, { type, ...update }) => ({ ...state, ...update }))
);

export function reducer(state: EmployeeFormState | undefined, action: Action) {
  return formReducer(state, action);
}
