<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ email }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      email: "This text should be an email address"
    };
  },
  created() {
    const authToken = this.$route.query.authToken;
    if (authToken !== undefined) {
      const cloudAccount = this.hcConnect.getAccountFromAuthToken(authToken);
      cloudAccount.profile.getCurrentProfile().then(currentProfile => {
        this.email = currentProfile.privateProfile.email;
      });
    }
  }
};
</script>
