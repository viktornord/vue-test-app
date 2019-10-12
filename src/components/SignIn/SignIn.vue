<template src="./signIn.html"></template>
<style scoped src="./signIn.css"></style>

<script>
  export default {
    name: 'SignIn',
    mounted() {
      const { gapi } = window;
      gapi.signin2.render('google-signin-button', {
        onsuccess: function (googleUser) {
          console.log(123);
          console.log(googleUser)
        },
        onError() {
          alert('Something went wrong');
        }
      })
    },
  };
</script>
