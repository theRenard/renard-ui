import { VueConstructor } from 'vue';
import Button from '@/components/Button/Button.vue';
import Code from '@/components/Code/Code.vue';
import Input from '@/components/Input/Input.vue';

const Components = {
  Button,
  Code,
  Input,
};

export type Components = typeof Components;

const install = (_Vue: VueConstructor): void => {
  Object.keys(Components).forEach((name) => {
    _Vue.component(name, Components[(name as keyof Components)]);
  });
};

export default {
  install,
  ...Components,
};
