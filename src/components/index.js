import Vue from 'vue';
import Button from '@/components/Button/Button.vue';
import Code from '@/components/Code/Code.vue';
import Input from '@/components/Input/Input.vue';

const Components = {
  Button,
  Code,
  Input,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
