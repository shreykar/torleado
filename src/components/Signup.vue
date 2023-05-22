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
          <input v-model="email" type="email" class="form-control form-control-input-text" id="user-email"
            placeholder="shreykar@torelado.com">
        </div>
        <div class="form-control-container mt-5">
          <span class="form-control-label">
            {{ strings.password }}
          </span>
          <input v-model="password" type="password" class="form-control form-control-input-text" id="user-password"
            placeholder="Enter a strong password">
        </div>
        <div class="form-control-container mt-5">
          <span class="form-control-label">
            {{ strings.confirm_password }}
          </span>
          <input v-model="confirm" type="password" class="form-control form-control-input-text" id="user--confirm-password"
            placeholder="Confirm your password">
        </div>
        <div class="form-submit-btn mt-5">
          <button  @click.prevent="submitted"  type="button" class="btn btn-outline-primary">{{ strings.signup }}</button>
          <router-link to="/login" class="d-block mt-3">{{ strings.login }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signup } from "../services/auth";
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { mapActions } from 'vuex'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      confirm: "",
      strings: {
        "email": "Email",
        "password": "Password",
        "confirm_password": "Confirm Password",
        "login": "Login",
        "signup": "Signup"
      }
    }
  },
  validations() {
    return {
      email: { required, email },
      password: {
        required,
        maxLength: maxLength(50),
      }
    }
  },
  methods: {
    ...mapActions('user',[
      'login'
    ]),
    submitted() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      signup({ email: this.email, password: this.password }).then((result) => {
        if(result.data.user && result.data.user.id){
          this.login(result.data.user)
          this.$router.push({ path: '/edit-profile' })
        }
      }).catch((err) => {
        console.log(err)
      });
    }
  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
