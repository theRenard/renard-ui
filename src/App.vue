<template>
  <div id="app">
    <RButton @click="test" />
    <RCode :code="code" />
    <RInput v-model="inputValue" />
    <div>{{ inputValue }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from './components/Button/Button.vue';
import Code from './components/Code/Code.vue';
import Input from './components/Input/Input.vue';

@Component({
  components: {
    RButton: Button,
    RCode: Code,
    RInput: Input,
  },
})
export default class App extends Vue {
  code = `
    import { Component, Vue } from 'vue-property-decorator';
    import Button from './components/Button/Button.vue';
    import Code from './components/Code/Code.vue';

    @Component({
      components: {
        RButton: Button,
        RCode: Code,
      },
    })
    export default class App extends Vue {
      test(): void {
        console.log(this, 'test');
      }
    }
  `

  inputValue = '';

  test(): void {
    console.log(this, 'test');
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
