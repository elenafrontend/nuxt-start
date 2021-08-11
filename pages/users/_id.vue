<template>
  <h1>{{ `User ${user.name}` }}</h1>
</template>

<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },

  async asyncData({params}) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await responce.json()
    return {
      user
    }
  },

  data () {
    return {
      user: {}
    }
  },
};
</script>
