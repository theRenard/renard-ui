<script lang="tsx">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'RInput',
})
export default class RInput extends Vue {
  @Prop({ default: 'input', type: String })
  controlType!: 'input' | 'textarea';

  @Prop({ default: '', type: String })
  value!: string;

  render(): Vue.VNode {
    return (
     <div class="input-control">
        <label>{this.$slots.default}</label>
        {(this.controlType === 'input')
          && <input {...{ attrs: this.$attrs }} value={this.value} onInput={($event: any) => this.$emit('input', $event.target.value)} />}
        {(this.controlType === 'textarea')
          && <textarea rows={10} value={this.value} onInput={($event: any) => this.$emit('input', $event.target.value)} defaultValue={''} />}
      </div>
    );
  }
}
</script>

<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>
