<template>
  <div
    class="theme-switch"
    @click="toggleDarkMode"
    :class="{ 'theme-switch__dark': isDarkMode }"
  >
    <div
      class="theme-switch--switch"
      :class="{
        'theme-switch--switch__left': !isDarkMode,
        'theme-switch--switch__right': isDarkMode
      }"
    >
      <img v-if="isDarkMode" src="@/assets/icons/moon.svg" alt="Moon" />
      <img v-else src="@/assets/icons/sun.svg" alt="Sun" />
    </div>
  </div>
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
  background: linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa 100%);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 175px;
  margin: 50px auto;
  box-sizing: border-box;
  display: flex;

  &__dark {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
  }

  &--switch {
    margin: 2px;
    padding: 15px 35px;
    border-radius: 8px;

    &__left {
      transform: translateX(0);
      background: $white;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    &__right {
      transform: translateX(90%);
      background: $super-dark-blue;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
