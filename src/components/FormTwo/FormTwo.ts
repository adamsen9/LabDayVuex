import { Component, Vue } from 'vue-property-decorator';
import WithRender from './form-two.html';

import IstFormText from '@/components/FormElements/IstFormText/IstFormText';
import IstForm from '@/components/FormElements/IstForm/IstForm';

@WithRender
@Component({
  components: {
    IstForm,
    IstFormText,
  },
})
export default class FormTwo extends Vue {}
