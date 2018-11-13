<template>
  <main>
    This is the main page.
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

.mapcontain {
  width: 35%;
  float: right;
  height: 400px;
  p {
    margin: 10px 0;
  }
}

@media screen and (max-width: 600px) {
  .mapcontain {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
