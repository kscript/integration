import { App } from 'vue';
import Viewer from './viewer.vue';

export const install = function (app: App, opts = {}) {
  app.component(Viewer.name, Viewer);
}
export default {
  install
}