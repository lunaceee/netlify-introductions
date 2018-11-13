<template>
<main>
<div>
      <div>
        <h3>Name: </h3><h4>{{ post.title }}</h4>
        <li>Pronouns: {{ post.pronouns }}</li>
        <li>Browser: {{ post.browser }}</li>
        <li>Location: {{ post.location }}</li>
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
      </div>
  </div>
</main>
  
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

<style lang="scss" scoped>
main {
  padding-top: 20px;
  border-top: 1px solid #ddd;
  margin-top: 120px;
}
</style>