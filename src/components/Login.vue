<template>
  <div class="col-md-7 col-sm-12 align-self-center">
    <div class="logo">
      <img src="..//assets/logo.png" sizes="196x196" />
    </div>
    <div class="row justify-content-center">
      <div class="col-6 align-self-center login-form-container">
        <div class="form-control-container">
          <span class="form-control-label">
            {{ strings.email }}
          </span>
          <input type="email" class="form-control form-control-input-text" id="user-email"
            placeholder="shreykar@torelado.com">
        </div>
        <div class="form-control-container mt-5">
          <span class="form-control-label">
            {{ strings.password }}
          </span>
          <input type="password" class="form-control form-control-input-text" id="user-password"
            placeholder="Enter a strong password">
        </div>
        <div class="form-submit-btn mt-5">
          <button type="button" class="btn btn-outline-primary">{{ strings.login }}</button>
          <router-link to="/signup" class="d-block mt-3">{{ strings.signup }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LogIn",
  data() {
    return {
      strings: {
        "email": "Email",
        "password": "Password",
        "login": "Login",
        "signup": "Signup"
      }
    }
  },
  props: {},
};
</script>
