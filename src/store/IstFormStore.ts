import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { IGrundState } from './store';
import {
  IFormElement,
  IIstFormState,
  ICreateFormElement,
  IUpdateFormValue,
} from './types';

export const getInitialState = (): IIstFormState => {
  return {
    formElements: [],
  };
};

const namespaced: boolean = true;

export const getters: GetterTree<IIstFormState, IGrundState> = {
  getFormValue: (state: IIstFormState) => (formElementName: string): any => {
    const formElement = state.formElements.find(
      (element) => element.elementName === formElementName
    );
    return formElement?.elementValue;
  },
  getValidationState: (state: IIstFormState) => (
    formElementName: string
  ): any => {
    const formElement = state.formElements.find(
      (element) => element.elementName === formElementName
    );
    return formElement?.valid;
  },
  getErrorText: (state: IIstFormState) => (formElementName: string): any => {
    const formElement = state.formElements.find(
      (element) => element.elementName === formElementName
    );
    return formElement?.errorText;
  },
  getFromListOfNames: (state: IIstFormState) => (formNames: string[]): any => {
    const formElements = state.formElements.filter((element) =>
      formNames.includes(element.elementName)
    );
    return formElements.map((ele) => {
      return {
        formName: ele.elementName,
        value: ele.elementValue,
      };
    });
  },
};

export const actions: ActionTree<IIstFormState, IGrundState> = {
  createFormElement({ commit }, data: ICreateFormElement) {
    commit('createNewFormElement', data);
  },
  setFormValue({ commit }, data: IUpdateFormValue) {
    commit('setFormElementValue', data);
    // console.log('setting form value:', data.formName, data.value);
  },
};

export const mutations: MutationTree<IIstFormState> = {
  createNewFormElement(state: IIstFormState, data: ICreateFormElement) {
    // check for duplicate
    const existing = state.formElements.some(
      (ele) => ele.elementName === data.elementName
    );

    if (!existing) {
      const newElement: IFormElement = {
        elementName: data.elementName,
        elementValue: data.initialValue,
        errorText: '',
        validations: data.validations,
        valid: true,
      };

      state.formElements = [...state.formElements, newElement];
    }
  },

  setFormElementValue(state: IIstFormState, data: IUpdateFormValue) {
    state.formElements = state.formElements.map((ele) => {
      if (ele.elementName === data.elementName) {
        ele.elementValue = data.newValue;
      }

      // run validation
      ele.errorText = validateElement(ele);
      ele.valid = !ele.errorText;
      return ele;
    });
  },
  clearElements(state: IIstFormState, data: string[]) {
    state.formElements = state.formElements.map((ele) => {
      if (data.includes(ele.elementName)) {
        ele.elementValue = '';
        ele.errorText = '';
        ele.valid = true;
      }
      return ele;
    });
  },
};

export const istFormStore: Module<IIstFormState, IGrundState> = {
  namespaced,
  state: getInitialState(),
  getters,
  actions,
  mutations,
};

const validateElement = (ele: IFormElement) => {
  let errorText = '';
  for (const validation of ele.validations) {
    errorText += validation(ele.elementValue);
  }
  return errorText;
};
