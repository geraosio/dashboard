<template>
  <div class="container" :class="{ container__dark: isDarkMode }">
    <div class="request">
      <div class="request--wrapper">
        <img
          src="@/assets/logos/DCHQ.svg"
          alt="Design+Code Logo"
          class="request--logo"
          v-if="isDarkMode"
        />
        <img
          src="@/assets/logos/DCHQ-dark.svg"
          alt="Design+Code Logo"
          class="request--logo"
          v-if="!isDarkMode"
        />
        <h4
          class="request--title"
          :class="{ 'request--title__dark': isDarkMode }"
        >
          Request Account
        </h4>
        <form @submit.prevent="requestHandler">
          <input
            type="email"
            placeholder="design.code@designcode.com"
            class="request--input"
            :class="{ 'request--input__dark': isDarkMode }"
            v-model="email"
            required
          />
          <button class="request--button">Request Account</button>
        </form>
        <router-link
          to="/signin"
          class="request--link"
          :class="{ 'request--link__dark': isDarkMode }"
        >
          Already have an account? Sign in here!
        </router-link>
        <ThemeSwitch />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { auth } from '@/main'

import ThemeSwitch from '@/components/ThemeSwitch.vue'

export default {
  name: 'Request',
  components: {
    ThemeSwitch
  },
  data() {
    return {
      email: null
    }
  },
  computed: {
    ...mapGetters(['isDarkMode'])
  },
  methods: {
    requestHandler() {
      let slackURL = new URL('https://slack.com/api/chat.postMessage')

      const data = {
        token: ['xoxb-910533269376-912421563543-hZvlwZzRScXhmclJZMfJ3Vmk'],
        channel: 'dashboard',
        text: `${this.email} has requested admin access to HQ. Please go to Netlify to invite them.`
      }

      slackURL.search = new URLSearchParams(data)

      fetch(slackURL)
        .then(() => {
          this.$router.push({
            name: 'signin',
            params: {
              userRequestedAccount: true,
              email: this.email
            }
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: $light-gray;

  &__dark {
    background-color: $dark-blue;
  }

  .request {
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
      color: $black;
      padding-left: 20px;
      margin-top: 20px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }

      &__dark {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: $white;

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
