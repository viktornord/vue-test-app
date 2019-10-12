import Vue from 'vue';
import Vuetify, {
  VCard, VCardTitle, VCardText,
} from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  components: {
    VCard, VCardTitle, VCardText,
  }
});

const opts = {};

export default new Vuetify(opts);
