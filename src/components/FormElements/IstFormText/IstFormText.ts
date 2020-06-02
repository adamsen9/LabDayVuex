import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './ist-form-text.html';
import { IUpdateFormValue } from '@/store/types';

@WithRender
@Component
export default class IstFormText extends Vue {
  @Prop()
  formName!: string;

  @Prop({ default: '' })
  initialValue!: string;

  @Prop()
  maxLength!: number;

  @Prop({default: ''})
  biggerThan!: string;

  @Prop({ default: false })
  required!: boolean;

  mounted() {
    // add itself to the store
  }

  set value(newValue: string) {
    const data: IUpdateFormValue = {
      elementName: this.formName,
      newValue,
    };
    this.$store.dispatch('istForm/setFormValue', data);
  }

  get value() {
    return this.$store.getters['istForm/getFormValue'](this.formName);
  }

  get valid() {
    return this.$store.getters['istForm/getValidationState'](this.formName);
  }
  get errorText() {
    return this.$store.getters['istForm/getErrorText'](this.formName);
  }
}
