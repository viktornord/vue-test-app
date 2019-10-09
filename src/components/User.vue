<template>
    <div class="card user-item">
        <div class="card-body">
            <h5 class="card-title">{{user.name}}</h5>
            <ul class="contact-info">
                <li><span>Email: <a :href="emailLink">{{user.email}}</a></span></li>
                <li><address><p>{{user.getFullAddress()}}</p></address></li>
                <li><span>Phone: {{user.phone}}</span></li>
                <li><span>Website: <a :href="webSiteLink" target="_blank" class="link">{{user.website}}</a></span></li>
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
      webSiteLink() {
        return `http://${this.user.website}`;
      },
      emailLink() {
        return `mailto:${this.user.email}`;
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
