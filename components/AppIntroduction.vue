<template>
  <div>
    <p>helllllllo</p>
      <ul>
        <li>{{ post.title }} {{ post.pronouns }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style scoped>
div {
  color: red;
}
</style>