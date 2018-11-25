<template>
  <main>
    <h2>Welcome to Netlify!</h2><br>
    <p>Please login onto https://new-introductions.netlify.com/admin to create your own introduction.</p>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page', 'userInfo'])
}
</script>

<style lang="scss" scoped>
main {
  padding-top: 20px;
  border-top: 1px solid #ddd;
  margin-top: 120px;
}

hr {
  border-top: 1px solid #ddd;
  border-bottom: none;
  margin-top: 15px;
}
</style>
