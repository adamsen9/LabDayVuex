export interface IFormElement {
  elementName: string;
  elementValue: any;
  errorText: string;
  valid: boolean;
  validations: ValidationRule[];
}

//
export interface IIstFormState {
  formElements: IFormElement[];
}

export interface ICreateFormElement {
  elementName: string;
  initialValue: any;
  validations: ValidationRule[];
}

export interface IUpdateFormValue {
  elementName: string;
  newValue: any;
}

export type ValidationRule = (str: string) => string;
