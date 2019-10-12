<template src="./Users.html"></template>
<style scoped src="./Users.css"></style>

<script>
  import User from './User/User';
  import { UserModel } from '../../models/User';

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
      const rawUsers = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
      this.users = rawUsers.map(user => new UserModel(user));
    },
  };
</script>
