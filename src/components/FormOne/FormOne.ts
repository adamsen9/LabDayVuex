import { Component, Vue } from 'vue-property-decorator';
import WithRender from './form-one.html';

@WithRender
@Component
export default class FormOne extends Vue {}
