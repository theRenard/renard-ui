<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Prism from 'prismjs';

@Component({
  name: 'RCode',
})
export default class Index extends Vue {
  @Prop({ default: '', type: String })
  code!: string;

  get renderedCode(): string {
    return Prism.highlight(this.code, Prism.languages.tsx, 'tsx');
  }

  render(): Vue.VNode {
    return (
      <pre class="r-code">
        <code domPropsInnerHTML={this.renderedCode}></code>;
      </pre>
    );
  }
}
</script>

<style scoped>
.r-code {
  @apply bg-white text-gray-400 font-mono py-2 px-4 overflow-auto;
}
</style>
