<template>
  <div>
    <p>helllllllo</p>
      <ul>
        <li>{{ name }}</li>
        <li>{{ pronouns }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    pronouns: {
      type: String
    }
  }
}
</script>

<style scoped>
div {
  color: red;
}
</style>