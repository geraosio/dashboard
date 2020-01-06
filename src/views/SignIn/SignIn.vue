<template>
  <div class="container">
    <div class="signin">
      <div class="signin--new">
        Don't have an account yet?
        <router-link to="/request" class="signin--link signin--link__new">
          Request an account here!
        </router-link>
      </div>
      <div class="signin--wrapper">
        <img
          src="@/assets/DCHQ.svg"
          alt="DesignCode Logo"
          class="signin--logo"
        />
        <h4 class="signin--title">Sign into Design+Code</h4>
        <input
          type="email"
          placeholder="design.code@designcode.com"
          class="signin--input"
        />
        <input type="password" placeholder="********" class="signin--input" />
        <button class="signin--button">Sign In</button>
        <router-link to="/recover" class="signin--link">
          If you are not sure what to put in the asterisks, don't worry click
          here!
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .signin {
    &--new {
      position: absolute;
      right: 16px;
      top: 16px;
      color: rgba(255, 255, 255, 0.3);

      a {
        color: white;
      }
    }

    &--wrapper {
      width: 400px;
    }

    &--title {
      margin: 0;
      line-height: 34px;
      font-size: 24px;
      text-align: center;
      color: $white;
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
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-sizing: border-box;
      border-radius: 4px;
      height: 60px;
      width: 100%;
      font-size: 20px;
      color: $white;
      padding-left: 20px;
      margin-top: 20px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }
    }

    &--link {
      line-height: 25px;
      font-size: 16px;
      text-align: center;
      color: rgba(255, 255, 255, 0.3);
      text-decoration: none;
    }
  }
}
</style>
