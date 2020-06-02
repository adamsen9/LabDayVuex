<template>
  <HelloWorld />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld/HelloWorld";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
.IstForm {
  border: 1px solid #ccc !important;
  border-radius: 16px;
  padding: 0.01em 16px;
  box-sizing: inherit;
}
// * {
//   color: blue;
// }
</style>