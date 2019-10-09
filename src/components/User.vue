<template>
    <div class="card user-item">
        <div class="card-body">
            <h5 class="card-title">{{user.name}}</h5>
            <ul class="contact-info">
                <li><span>Email: <a :href="`mailto:${user.email}`">{{user.email}}</a></span></li>
                <li><address><p>{{userAddress}}</p></address></li>
                <li><span>Phone: {{user.phone}}</span></li>
                <li><span>Website: <a :href="`http://${user.website}`" target="_blank" class="link">{{user.website}}</a></span></li>
            </ul>
        </div>
    </div>
</template>

<script>
  import { UserModel } from '../models/User';

  export default {
    name: 'User',
    props: {
      user: UserModel,
    },
    computed: {
      userAddress() {
        /** @member {{city: string, street: string, zipcode: string, suite: string}} address */
        const { address } = this.user;
        return `${address.city}, ${address.street}, ${address.suite} ${address.zipcode}`
      }
    }
  };
</script>

<style scoped>
    .user-item {
        width: 18em;
    }
    .contact-info {
        text-align: left;
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
