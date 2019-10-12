<template>
    <div>
        <h1>Users</h1>
        <ul class="users-list">
            <li v-for="user in users" :key="user.id">
                <User :user="user"></User>
            </li>
        </ul>
    </div>
</template>

<script>
  import User from './User';
  import { UserModel } from '../models/User';

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

<style scoped>
    .users-list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }
    .users-list li {
        margin: 0 0 2em 2em;
    }
    .users-list li:first-line {
        margin-left: 0;
    }
</style>
