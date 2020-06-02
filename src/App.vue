<template>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld/HelloWorld';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>
