<template>
  <div class="container">
    <b-form @submit.prevent="login">
      <b-form-group
        id="email"
        label="Email address:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password" label="Your Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">LogIn</b-button>
    </b-form>
    <router-link to="/sign-up">
      Don't have an account? Register.
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'home' })
        })
    }
  }
}
</script>

<style scoped>
</style>
