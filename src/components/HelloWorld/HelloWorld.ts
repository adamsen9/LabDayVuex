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
export default class HelloWorld extends Vue {
  hiddenTwo = false;

  get message() {
    return this.$store.getters['istForm/getFormValue']('text-input5');
  }

  get count() {
    return this.$store.getters['GetCount'];
  }

  incrementCount() {
    this.$store.dispatch('incrementCount');
  }
}
