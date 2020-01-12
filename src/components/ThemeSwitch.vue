<template>
  <button class="theme-switch" @click="toggleDarkMode">Toggle</button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ThemeSwitch',
  computed: {
    ...mapGetters(['isDarkMode'])
  },
  methods: {
    ...mapMutations(['toggleDarkMode'])
  }
}
</script>

<style lang="scss" scoped>
.theme-switch {
  background: $teal;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: $white;
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
