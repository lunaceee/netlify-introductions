<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 v-for="(user, i) in userInfo" :key="user.title" class="profile-photo">
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-avatar>
                <nuxt-link :to="userInfo[i]._path">
                  <img :src="user.thumnail">
                </nuxt-link>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="user.title"></v-list-tile-title>
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
  data() {
    return {
      activeUser: "profile-photo",
      secondaryUser: "profile-photo-secondary"
    };
  },
  computed: {
    ...mapState(["page", "indexedUser", "userInfo"]),
    ...mapGetters(["selectedUser"])
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

.profile-photo {
  z-index: 1;
  width: 200px;
}

.profile-photo-secondary {
  @include group(400px, 400px);
  width: 200px;
  transition: none;
  img {
    border-radius: 50% 50%;
  }
}

.profile-photo,
.profile-photo-secondary {
  img {
    transition: 0.4s all ease;
    width: 100%;
    cursor: pointer;
  }
}

.profile-name {
  z-index: 1;
  font-size: 35px;
  @include group(600px, 400px);
}

//animations
.intro {
  .profile-photo {
    transform: translate3d(-20px, -100px, 0) scale(0.75);
  }
  .profile-name {
    transform: translate3d(-8px, -125px, 0) scale(0.75);
    color: black;
  }
}

.group {
  .profile-name {
    margin-top: 20px;
  }
  .profile-photo {
    img {
      border-radius: 50% 50%;
    }
  }
  .profile-photo,
  .profile-photo-secondary {
    display: inline-block;
    position: relative;
    opacity: 1;
    width: 50px;
    margin: 0 4px;
    img:hover {
      transition: 0.2s all ease;
      border: 4px solid white;
    }
  }

  .profile-name {
    transform: translate3d(0px, -125px, 0);
    color: white;
  }
}
</style>