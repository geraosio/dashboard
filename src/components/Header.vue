<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/team">Team</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
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
