<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'RButton',
})
export default class RButton extends Vue {
  @Prop({ default: '', type: String })
  btnStyle!: string;

  render(): Vue.VNode {
    return (
      <button
        class={`r-button ${this.btnStyle}`.trim()}
        {...{ on: this.$listeners }}
        {...{ attrs: this.$attrs }}
        >{this.$slots.default || 'Button'}</button>
    );
  }
}
</script>

<style scoped>
.r-button {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>
