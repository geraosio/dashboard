<template>
  <transition
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp"
  >
    <div v-show="show" class="notification">
      <div class="notification--text">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    text: String
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
    setTimeout(() => {
      this.show = false
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.notification {
  border-radius: 6px;
  position: absolute;
  top: 10%;
  padding: 5px 10px;
  background-color: $blue;

  &--text {
    @include medium-text;
    color: $white;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
