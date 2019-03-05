<template>
  <v-container>
    <v-layout row justify-center class="content">
      <v-flex xs12 sm6 md8>
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
        ["title", "Title"],
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
.content {
  margin-top: 24px;
}
.intro {
  .profile-photo {
    position: absolute;
    backface-visibility: hidden;
    transform: translateZ(2);
    transition: 0.4s all ease-out;
  }
}

.group {
  .profile-photo {
    opacity: 0;
  }
}
</style>
