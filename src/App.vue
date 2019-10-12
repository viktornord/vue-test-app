<template>
    <div id="app">
        <Users v-if="authorizedUser"></Users>
        <p v-else>
            Sign in to see user list
            <SignIn class="m-auto" @onSignIn="onSignIn"></SignIn>
        </p>
    </div>
</template>

<script>
  import SignIn from '@/components/SignIn';
  import Users from '@/components/Users/Users';

  export default {
    name: 'app',
    methods: {
      onSignIn({ authorizedUser }) {
        this.authorizedUser = authorizedUser;
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
