<template>
  <transition appear appear-active-class="animated flipInX">
    <a class="card" :class="{ card__dark: isDarkMode }">
      <img
        :src="image.path"
        :alt="image.altText"
        class="card--header"
        :class="{ 'card--header__dark': isDarkMode }"
      />
      <h3 class="card--title" :class="{ 'card--title__dark': isDarkMode }">
        {{ title }}
      </h3>
      <p
        class="card--description"
        :class="{ 'card--description__dark': isDarkMode }"
      >
        {{ description }}
      </p>
    </a>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Card',
  props: {
    image: {
      type: Object,
      required: true,
      validator: image => {
        return (
          image.path &&
          typeof image.path === 'string' &&
          image.altText &&
          typeof image.altText === 'string'
        )
      }
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    animationDelay: Number
  },
  computed: {
    ...mapGetters(['isDarkMode'])
  },
  mounted() {
    this.$el.style.animationDelay = `${this.animationDelay}s`
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }

  &__dark {
    background: $super-dark-blue;
    box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

    &:hover {
      box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
    }
  }

  &--header {
    width: 100%;
    border-radius: 10px 10px 0 0;
    background: $light-gray;

    &__dark {
      background: #283049;
    }
  }

  &--title {
    @include heading-3;
    margin-bottom: 16px;
    color: $black;

    &__dark {
      color: $white;
    }
  }

  &--description {
    font-size: 15px;
    line-height: 24px;
    text-align: left;
    margin-left: 16px;
    margin-top: 0;
    color: $black;

    &__dark {
      color: $white;
    }
  }
}
</style>
