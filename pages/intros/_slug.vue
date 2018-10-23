<template>
    <AppIntroduction v-model="obj" />
</template>

<script>
import AppIntroduction from "~/components/AppIntroduction.vue";
export default {
  data() {
    return { obj: {} };
  },
  components: {
    AppIntroduction
  },
  async asyncData({ params }) {
    console.log("fff");
    let post = await import("~/content/intros/" + params.slug + ".json");
    console.log(post);
    console.log("slug", params.slug)

    return { obj: post };
  }
};
</script>
