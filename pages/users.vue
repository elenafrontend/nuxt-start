<template>
  <div class="users__wrapper">
    Обертка для блока users
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  middleware: ['checkAuth'],
  created () {
    this.$log()
  }
}
</script>
