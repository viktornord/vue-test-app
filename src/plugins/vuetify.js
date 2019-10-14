import Vue from 'vue';
import Vuetify, {
  VCard, VCardTitle, VCardText,
  VBtn,
} from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  components: {
    VCard, VCardTitle, VCardText,
    VBtn,
  }
});

const opts = {};

export default new Vuetify(opts);
