<template>
    <!--    <div class="card user-item">-->
    <!--        <div class="card-body">-->
    <!--            <h5 class="card-title"></h5>-->
    <!--        </div>-->
    <!--    </div>-->
    <v-card outlined>
        <v-card-title>{{user.name}}</v-card-title>
        <ul class="contact-info">
            <li><v-card-text><span>Email: <a :href="emailLink">{{user.email}}</a></span></v-card-text></li>
            <li><v-card-text><address><p>{{user.getFullAddress()}}</p></address></v-card-text></li>
            <li><v-card-text><span>Phone: {{user.phone}}</span></v-card-text></li>
            <li><v-card-text><span>Website: <a :href="webSiteLink" target="_blank" class="link">{{user.website}}</a></span></v-card-text></li>
        </ul>
    </v-card>
</template>

<script>
  import { UserModel } from '@/models/User';

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
      },
    },
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
