<template>
  <div class="container">
    <b-form @submit.prevent="register">
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

      <b-form-group id="name" label="Your Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="name"
          type="text"
          required
          placeholder="Enter name"
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

      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
    <router-link to="/login">
      Already have an account? Login.
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store
        .dispatch('register', {
          name: this.name,
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
