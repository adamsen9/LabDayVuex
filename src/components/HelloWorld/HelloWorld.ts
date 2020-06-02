import { Component, Vue } from 'vue-property-decorator';
import WithRender from './hello-world.html';
import FormTwo from '@/components/FormTwo/FormTwo';
import FormOne from '@/components/FormOne/FormOne';

@WithRender
@Component({
  components: {
    FormOne,
    FormTwo,
  },
})
export default class HelloWorld extends Vue {}
