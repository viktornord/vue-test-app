<template><div id="google-signin-button"></div></template>

<script>
  import { googleAPI } from '@/services/gapi'
  export default {
    name: 'SignIn',
    methods: {
      onSignInSuccess(authorizedUser) {
        this.$emit('onSignIn', { authorizedUser });
      }
    },
    mounted() {
      googleAPI.renderSignInButton('google-signin-button')
        .onSuccess(user => this.onSignInSuccess(user))
    },
  };
</script>

<style scoped>
    #google-signin-button {
        display: flex;
        justify-content: center;
        margin: 1em;
    }
</style>
