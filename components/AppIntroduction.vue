<template>
  <v-container
    :class="{ 
    'intro' : (page === 'intros-slug'), 
    'group' : (page === 'group'), 
    'index' : (page === 'index') 
  }"
  >
    <v-layout row justify-center class="content">
      <v-flex xs12>
        <v-card>
          <v-list v-for="(item, index) in keys" :key="index">
            <v-list-tile :key="index">
              <v-list-tile-content>
                <v-list-tile-title v-html="item[1]"></v-list-tile-title>
                <v-list-tile-sub-title v-html="post[item[0]]"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["userInfo"]),
    ...mapGetters(["selectedUser"])
  },
  props: {
    post: {
      type: Object
    }
  },
  data() {
    return {
      keys: [
        ["pronouns", "Pronouns"],
        ["browser", "Browser"],
        ["location", "Location"],
        ["twitter", "Twitter"],
        ["facebook", "Facebook"],
        ["linkedin", "LinkedIn"],
        ["team", "Team"],
        ["place", "Place"],
        ["book", "Book"],
        ["meal", "Meal"],
        ["petpeeves", "Petpeeves"],
        ["feedback", "Feedback"],
        ["others", "Others"]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin group($top, $left) {
  position: absolute;
  top: $top;
  left: $left;
  display: block;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: 0.4s all ease-out;
}
.content {
  margin-top: 24px;
}

@media screen and (max-width: 800px) {
  .content {
    margin-top: 40px;
  }
}

@media screen and (min-width: 1200px) {
  .content {
    margin-top: 120px;
  }
}
</style>
