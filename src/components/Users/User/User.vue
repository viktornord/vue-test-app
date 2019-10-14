<template src="./User.html"></template>
<style scoped src="./User.css"></style>

<script>
  import { UserModel } from '@/models/User';

  export default {
    name: 'User',
    props: {
      user: UserModel,
    },
    computed: {
      webSiteLink() {
        return `http://${this.user.website}`;
      },
      emailLink() {
        return `mailto:${this.user.email}`;
      },
    },
  };
</script>
