<template>
  <main>
    <ul>
      <li>Name: {{ post.title }}</li>
      <li>Pronouns: {{ post.pronouns }}</li>
      <li>Browser: {{ post.browser }}</li>
      <li>Location: {{ post.location }}</li>
      <li>Twitter: {{ post.twitter }}</li>
      <li>Facebook: {{ post.facebook }}</li>
      <li>LinkedIn: {{ post.linkedin }}</li>
      <li>Team: {{ post.team }}</li>
      <li>Place: {{ post.place }}</li>
      <li>Book: {{ post.book }}</li>
      <li>Meal: {{ post.meal }}</li>
      <li>Petpeeves: {{ post.petpeeves }}</li>
      <li>Feedback: {{ post.feedback }}</li>
      <li>Others: {{ post.others }}</li>
    </ul>
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
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1030px) {
  main {
    padding: 0 20px;
  }
}

@media screen and (max-width: 600px) {
  main {
    flex-direction: column;
  }
  .places {
    width: 100%;
  }
  aside.sidebar {
    width: 100%;
    margin: 10px 0;
  }
}

h1 {
  font-size: 45px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

p {
  margin: 10px 0;
}

.top {
  margin: 30px 0 0;
}
</style>