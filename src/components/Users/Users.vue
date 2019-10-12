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
        filter: {
          gender: null
        },
        users: [],
      };
    },
    watch: {
      filter: {
        deep: true,
        handler({ gender: filterGender }) {
          this.users = this.allUsers.filter(({ gender }) => !filterGender || gender === filterGender);
        }
      }
    },
    async mounted() {
      this.allUsers = await userService.getUsers();
      this.users = [...this.allUsers];
    },
  };
</script>
