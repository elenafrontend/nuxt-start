<template>
  <h1>{{ `User ${user.name}` }}</h1>
</template>

<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },

  data () {
    return {
      user: {}
    }
  },

  async created () {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
    this.user = await responce.json()
  }
};
</script>
