<template>
  <transition-group tag="div">
    <div
      key="illos"
      :class="{ 
    'intro' : (page === 'intros-slug'), 
    'group' : (page === 'group'), 
    'index' : (page === 'index') 
  }"
    >
      <v-container>
        <v-layout>
          <v-flex xs3>
            <img src="../static/images/logo.svg" alt key="logo" class="logo">
          </v-flex>
          <v-flex>
            <img src="../static/images/bird-small.png" alt key="bird" class="bird">
          </v-flex>
        </v-layout>
        <v-layout
          row
          justify-center
          align-center
          :class="{ 
    'intro' : (page === 'intros-slug'), 
    'group' : (page === 'group')
  }"
        >
          <v-flex xs3 sm2>
            <v-avatar size="120" class="profile-photo">
              <v-img :src="selectedUser.thumnail" alt>
                <div class="fill-height bottom-gradient"></div>
              </v-img>
            </v-avatar>
          </v-flex>
        </v-layout>
        <v-layout justify-center class="profile-name">
          <v-flex xs3 sm2>
            <h1>{{ selectedUser.title }}</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </transition-group>
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
  @include group(160px, 130px);
  backface-visibility: hidden;
  transition: 0.4s all ease-out;
}

.profile-name {
  @include group(290px, 140px);
}

.bird {
  width: 10%;
  margin-left: 4px;
}

//animations
.intro {
  .logo {
    @include group(40px, 20px);
    transform: scale(0.8);
  }
  .profile-photo {
    transform: translate3d(0, -20px, 0);
  }
  .profile-name {
    transform: translate3d(0, -10px, 0);
  }
}

.group {
  .logo {
    @include group(200px, 100px);
  }
  .profile-photo,
  .profile-name {
    opacity: 0;
  }
}

@media screen and (max-width: 00px) {
  ul,
  aside {
    display: none;
  }
}
</style>
