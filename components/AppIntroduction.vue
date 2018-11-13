<template>
<main>
<div>
      <div>
        <ul>
          <li>Name{{ post.title }}</li>
          <li>Pronouns: {{ post.pronouns }}</li>
          <li>Browser: {{ post.browser }}</li>
          <li>Location: {{ post.location }}</li>
          <li>Twitter: {{ post.twitter }}</li>
          <li>Facebook: {{ post.facebook }}</li>
          <li>LinkedIn: {{ post.linkedin }}</li>
          <li>Team: {{ post.team }}</li>
          <li>Place: {{ post.place }}</li>
          <li>Book: { post.book }}</li>
          <li>Meal: {{ post.meal }}</li>
          <li>Petpeeves: {{ post.petpeeves }}</li>
          <li>Feedback: {{ post.feedback }}</li>
          <li>Others: {{ post.others }}</li>
        </ul>
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