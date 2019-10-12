<template>
    <div id="app">
        <template v-if="authorizedUser">
            <v-btn depressed small @click="signOut">Sign Out</v-btn>
            <Users></Users>
        </template>
        <template v-else>
            Sign in to see user list
            <SignIn class="m-auto" @onSignIn="onSignIn"></SignIn>
        </template>
    </div>
</template>

<script>
  import { googleAPI } from '@/services/gapi';
  import SignIn from '@/components/SignIn';
  import Users from '@/components/Users/Users';

  export default {
    name: 'app',
    methods: {
      onSignIn({ authorizedUser }) {
        this.authorizedUser = authorizedUser;
      },
      async signOut() {
        await googleAPI.authInstance.signOut();
        this.authorizedUser = null;
      }
    },
    data() {
      return {
        authorizedUser: null
      }
    },
    components: {
      SignIn,
      Users,
    },
  };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
