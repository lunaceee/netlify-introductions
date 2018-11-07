<template>
  <div>
    <h2>Introductions</h2>
      <ul>
        <li>{{ post.title }}</li>
        <li>{{ post.pronouns }}</li>
        <li>{{ post.browser }}</li>
        <li>{{ post.location }}</li>
        <li>{{ post.twitter }}</li>
        <li>{{ post.facebook }}</li>
        <li>{{ post.linkedin }}</li>
        <li>{{ post.team }}</li>
        <li>{{ post.place }}</li>
        <li>{{ post.book }}</li>
        <li>{{ post.meal }}</li>
        <li>{{ post.petpeeves }}</li>
        <li>{{ post.feedback }}</li>
        <li>{{ post.others }}</li>
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