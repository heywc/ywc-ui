import YuiButton from "./YuiButton/btn.vue";
import YuiInput from "./YuiInput/inp.vue";

const components = [YuiButton, YuiInput];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  YuiButton,
  YuiInput,
};
