import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './ist-form.html';
import { ICreateFormElement } from '@/store/types';
import { required } from '@/store/BuiltInValidations';

@WithRender
@Component
export default class IstForm extends Vue {
  @Prop()
  name!: string;

  allNames: string[] = []; // temporary hack because form elements are not nested inside forms

  mounted() {
    // add children to store
    for (const child of this.$children as any) {
      const newForm: ICreateFormElement = {
        elementName: child.formName,
        initialValue: child.initialValue,
        validations: [],
      };

      this.allNames.push(newForm.elementName);

      // setting up validation
      if (child.required) {
        newForm.validations.push(required);
      }

      if (child.maxLength) {
        const maxLength = (str: string) => {
          if (str.length > +child.maxLength) {
            return 'Teksten er alt for lang!';
          } else {
            return '';
          }
        };
        newForm.validations.push(maxLength);
      }

      if (child.biggerThan) {
        const biggerThan = (str: string) => {
          const otherString = this.$store.getters['istForm/getFormValue'](
            child.biggerThan
          );

          // console.log('me ' + child.formName, str.length);
          // console.log('other ' + child.biggerThan, otherString.length);

          if (otherString.length > str.length) {
            return 'Den anden streng er længere!';
          } else {
            return '';
          }
        };

        newForm.validations.push(biggerThan);
      }

      this.$store.dispatch('istForm/createFormElement', newForm);
    }
  }

  submit() {
    const formValues = this.$store.getters['istForm/getFromListOfNames'](this.allNames);
    console.log(formValues);
    this.$emit('submit');
  }

  clear() {
    this.$store.commit('istForm/clearElements', this.allNames);
  }
}
