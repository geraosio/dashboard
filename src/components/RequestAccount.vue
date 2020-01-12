<template>
  <transition name="slide-in-right" enter-active-class="animated slideInRight">
    <div
      v-if="show"
      class="request-account"
      :class="{ 'request-account__dark': isDarkMode }"
    >
      Don't have an account yet?
      <router-link to="/request" class="request-account--link">
        Request an account here!
      </router-link>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RequestAccount',
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters(['isDarkMode'])
  },
  mounted() {
    this.show = true
  }
}
</script>

<style lang="scss" scoped>
.request-account {
  position: absolute;
  right: 24px;
  top: 16px;
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }

  &__dark {
    color: rgba(255, 255, 255, 0.3);

    a {
      color: white;
    }
  }

  &--link {
    line-height: 25px;
    font-size: 16px;
    text-align: center;
    color: rgba(0, 0, 0, 0.3);
    text-decoration: none;

    &__dark {
      color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
