<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/team">Team</router-link>
    <a @click="logOutHandler">Log Out</a>
  </div>
</template>

<script>
import { auth } from '@/main'

export default {
  name: 'Header',
  methods: {
    logOutHandler() {
      auth
        .currentUser()
        .logout()
        .then(() => {
          this.$router.push({
            name: 'signin',
            params: { userLoggedOut: true }
          })
        })
        .catch(error => {
          alert(`Error: ${error}`)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $white;
    }
  }
}
</style>
