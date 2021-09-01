<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

@Component({
  name: 'RCode',
})
export default class Index extends Vue {
  @Prop({ default: '', type: String })
  code!: string;

  get renderedCode(): string {
    this.$nextTick();
    return Prism.highlight(this.code, Prism.languages.tsx, 'tsx');
  }

  render(): Vue.VNode {
    return (
      <pre class="r-code">
        <code domPropsInnerHTML={this.renderedCode}></code>
      </pre>
    );
  }
}
</script>

<style scoped>
.r-code {
  @apply m-2 border-pink-100 border-2 rounded-lg;
  font-size: 0.8rem;
}
</style>
