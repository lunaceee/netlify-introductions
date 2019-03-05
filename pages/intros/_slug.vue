<template>
  <AppIntroduction v-bind="postdaddy"/>
</template>

<script>
import AppIntroduction from "~/components/AppIntroduction.vue";

export default {
  components: {
    AppIntroduction
  },
  async asyncData({ store, params }) {
    // TODO: don't do this more than once (see AppMenuDrawer.create)
    await store.dispatch("fetchUserInfo");
    const data = store.getters.getUserBySlug(params.slug);
    store.commit("changeUserBySlug", params.slug);
    return { postdaddy: { post: data } };
  }
};
</script>
