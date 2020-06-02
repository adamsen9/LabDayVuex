import { Component, Vue } from 'vue-property-decorator';
import WithRender from './form-two.html';

@WithRender
@Component
export default class FormTwo extends Vue {}
