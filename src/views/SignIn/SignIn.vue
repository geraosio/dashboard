<template>
  <div class="container" :class="{ container__dark: isDarkMode }">
    <div class="signin">
      <RequestAccount />
      <div class="signin--wrapper">
        <img
          src="@/assets/DCHQ.svg"
          alt="Design+Code Logo"
          class="signin--logo"
          v-if="isDarkMode"
        />
        <img
          src="@/assets/DCHQ-dark.svg"
          alt="Design+Code Logo"
          class="signin--logo"
          v-if="!isDarkMode"
        />
        <h4
          class="signin--title"
          :class="{ 'signin--title__dark': isDarkMode }"
        >
          Sign into Design+Code
        </h4>
        <form @submit.prevent="signInHandler">
          <input
            type="email"
            placeholder="design.code@designcode.com"
            class="signin--input"
            :class="{ 'signin--input__dark': isDarkMode }"
            v-model="email"
          />
          <input
            type="password"
            placeholder="********"
            class="signin--input"
            :class="{ 'signin--input__dark': isDarkMode }"
            v-model="password"
          />
          <button class="signin--button">Sign In</button>
        </form>
        <router-link
          to="/recover"
          class="signin--link"
          :class="{ 'signin--link__dark': isDarkMode }"
        >
          If you are not sure what to put in the asterisks, don't worry click
          here!
        </router-link>
        <ThemeSwitch />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { auth } from '@/main'

import RequestAccount from '@/components/RequestAccount.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

export default {
  name: 'SignIn',
  components: {
    RequestAccount,
    ThemeSwitch
  },
  data() {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapGetters(['isDarkMode'])
  },
  methods: {
    signInHandler() {
      auth
        .login(this.email, this.password, true)
        .then(() => {
          this.$router.replace('/')
        })
        .catch(error => {
          alert(`Error: ${error}`)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $light-gray;

  &__dark {
    background-color: $dark-blue;
  }

  .signin {
    &--wrapper {
      width: 400px;
    }

    &--title {
      margin: 0;
      line-height: 34px;
      font-size: 24px;
      text-align: center;
      color: $black;

      &__dark {
        color: $white;
      }
    }

    &--button {
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

    &--input {
      background: rgba(198, 208, 235, 0.2);
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      border-radius: 4px;
      height: 60px;
      width: 100%;
      font-size: 20px;
      color: $white;
      padding-left: 20px;
      margin-top: 20px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }

      &__dark {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);

        &::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
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
}
</style>
