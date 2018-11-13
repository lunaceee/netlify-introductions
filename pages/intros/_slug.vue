<template>
    <div>
      <AppIntroduction v-bind="postdaddy" />
    </div>
</template>

<script>
import AppIntroduction from "~/components/AppIntroduction.vue";
export default {
  components: {
    AppIntroduction
  },
  async asyncData({ params }) {
    let post = await import("~/content/intros/" + params.slug + ".json");
    return { postdaddy: { post: post } };
  },
  data() {
    return {};
  }
};
</script>
