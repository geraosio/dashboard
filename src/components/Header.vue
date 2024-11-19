<template>
  <div class="nav" :class="{ 'nav--dark': isDarkMode }">
    <div class="nav__links">
      <img
        src="@/assets/logos/DCHQ-small.svg"
        alt="Design Code"
        class="nav__logo"
      />
      <router-link
        to="/"
        class="nav__link"
        :class="{ 'nav__link--dark': isDarkMode }"
      >
        Home
      </router-link>
      <router-link
        to="/manage"
        class="nav__link"
        :class="{ 'nav__link--dark': isDarkMode }"
      >
        Manage
      </router-link>
      <router-link
        to="/team"
        class="nav__link"
        :class="{ 'nav__link--dark': isDarkMode }"
      >
        Team
      </router-link>
    </div>
    <a
      @click="logOutHandler"
      class="nav__logout-wrapper nav__link"
      :class="{ 'nav__link--dark': isDarkMode }"
    >
      Log Out
      <img
        src="@/assets/icons/logout.svg"
        alt="Logout icon"
        class="nav__icon"
      />
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { auth } from '@/main'

export default {
  name: 'Header',
  computed: {
    ...mapGetters(['isDarkMode'])
  },
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
.nav {
  padding: 16px 15%;
  background-color: $white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

  &--dark {
    background-color: $super-dark-blue;
  }

  &__links {
    display: flex;
    align-items: center;

    a {
      margin-left: 16px;
    }
  }

  &__link {
    line-height: 25px;
    font-size: 16px;
    text-align: center;
    color: $dark-gray;
    text-decoration: none;
    font-weight: bold;

    &.router-link-exact-active {
      color: $middle-blue;
    }
    &--dark.router-link-exact-active {
      color: $white;
    }
  }

  &__logout-wrapper {
    display: flex;
    align-items: center;

    img {
      margin-left: 8px;
    }
  }
}
</style>
