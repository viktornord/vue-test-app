<template src="./Users.html"></template>
<style scoped src="./Users.css"></style>

<script>
  import User from './User/User';
  import { userService } from '@/services/userService';

  export default {
    name: 'Users',
    components: {
      User,
    },
    data() {
      return {
        users: [],
      };
    },
    async mounted() {
      this.users = await userService.getUsers();
    },
  };
</script>
