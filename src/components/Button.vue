<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'tr-Button',
})
export default class Index extends Vue {
  @Prop({ default: '', type: String })
  btnStyle!: string;

  render(): Vue.VNode {
    return (
      <button
        class={`${this.btnStyle} button`}
        {...{ on: this.$listeners }}
        {...{ attrs: this.$attrs }}
        >{this.$slots.default}</button>
    );
  }
}
</script>

<style scoped>
.button {
  font: inherit;
  background-color: black;
  color: white;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;
}

.button:hover,
.button:active {
  background-color: rgb(51, 51, 51);
  border: 1px solid black;
}

.inverted {
  background-color: white;
  color: black;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  color: #ccc;
  background-color: white;
  border: 1px solid transparent;
}

.cancel {
  background-color: red;
  color: white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: salmon;
  border: 1px solid transparent;
  color: white;
}
</style>
