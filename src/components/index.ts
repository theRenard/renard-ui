import { VueConstructor } from 'vue';
import RButton from '@/components/Button/Button.vue';
import RCode from '@/components/Code/Code.vue';
import RInput from '@/components/Input/Input.vue';

const Components = {
  RButton,
  RCode,
  RInput,
};

type Components = typeof Components;

const install = (_Vue: VueConstructor): void => {
  Object.keys(Components).forEach((name) => {
    _Vue.component(name, Components[(name as keyof Components)]);
  });
};

export {
  install,
  RButton,
  RCode,
  RInput,
};
