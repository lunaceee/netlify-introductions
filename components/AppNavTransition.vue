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
        <v-layout justify-center class="logo">
          <nuxt-link exact to="/group">
            <v-flex xs3>
              <img src="../static/images/logo.svg" alt key="logo">
            </v-flex>
          </nuxt-link>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-single.svg" alt class="bird-single">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-1.svg" alt class="bird-1">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-2.svg" alt class="bird-2">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-3.svg" alt class="bird-3">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-4.svg" alt class="bird-4">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-5.svg" alt class="bird-5">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="../static/images/bird-main.svg" alt class="bird-main">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src alt>
          </v-flex>
        </v-layout>
        <v-layout class="left-branch">
          <v-flex>
            <img src="../static/images/tree-branch-left.svg" width="200">
          </v-flex>
        </v-layout>
        <v-layout class="right-branch">
          <v-flex>
            <img src="../static/images/tree-branch-right.svg" width="200">
          </v-flex>
        </v-layout>
        <v-layout
          row
          text-xs-center
          :class="{ 
    'intro' : (page === 'intros-slug'), 
    'group' : (page === 'group')
  }"
        >
          <v-flex xs12>
            <v-avatar size="120" class="profile-photo">
              <v-img :src="selectedUser.thumnail" alt>
              </v-img>
            </v-avatar>
          </v-flex>
        </v-layout>
        <v-layout text-xs-center class="profile-name">
          <v-flex xs12>
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

.bird-single {
  opacity: 0;
}

.bird-1 {
  z-index: 1;
  @include group(-18px, -30px);
  transform: scale(0.2);
}

.bird-2 {
  z-index: 1;
  @include group(18px, 10px);
  transform: scale(0.2);
}

.bird-3 {
  z-index: 1;
  @include group(58px, 240px);
  transform: scale(0.2);
}

.bird-4 {
  z-index: 1;
  @include group(50px, 220px);
  transform: scale(0.2);
}

.bird-5 {
  z-index: 1;
  @include group(-50px, -60px);
  transform: scale(0.2);
}

.bird-main {
  @include group(-30px, -22px);
  transform: scale(0.18);
}

.right-branch {
  @include group(80px, 180px);
  transform: scale(0.6);
}

.left-branch {
  @include group(20px, 0);
  transform: scale(0.8);
}

.profile-photo,
.profile-name,
.logo {
  transition: 0.4s all ease-out;
}

.logo {
  margin-top: 220px;
}

//animations
.index {
  .profile-photo,
  .profile-name,
  .bird-1,
  .bird-2,
  .bird-3,
  .bird-4,
  .bird-5 {
    opacity: 0;
  }
}

.intro {
  .bird-1,
  .bird-2,
  .bird-3,
  .bird-4,
  .bird-5,
  .bird-main {
    opacity: 0;
  }

  .bird-single {
    opacity: 1;
    z-index: 1;
    @include group(0, 240px);
    transform: scale(0.18) rotate(0.02turn);
  }

  .right-branch {
    @include group(100px, 180px);
    transform: scale(0.6) rotate(0.02turn);
  }

  .logo {
    margin-top: 80px;
  }

  .profile-photo {
    transform: scale(0.8);
  }

  .profile-name {
    transform: scale(0.9);
  }
}

.group {
  .logo {
    // @include group(220px, 100px);
  }
  .profile-photo,
  .profile-name {
    opacity: 0;
  }
}

@media screen and (min-width: 700px) {
  .index {
    .left-branch {
      @include group(60px, 130px);
      transform: scale(1);
    }
    .right-branch {
      @include group(80px, 450px);
      transform: scale(1);
    }
    .bird-main {
      @include group(-30px, 170px);
      transform: scale(0.2);
    }
    .logo {
      margin-top: 180px;
    }
  }

  .intro {
    .left-branch {
      @include group(70px, 100px);
      transform: scale(1);
    }
    .right-branch {
      @include group(80px, 450px);
      transform: scale(1);
    }
    .bird-single {
      @include group(-20px, 180px);
      transform: scale(0.2);
    }
    .logo {
      margin-top: 20px;
    }
  }

  .group {
    .bird-1 {
      z-index: 1;
      @include group(75px, 150px);
      transform: scale(0.2);
    }

    .bird-2 {
      z-index: 1;
      @include group(40px, 30px);
      transform: scale(0.2);
    }

    .bird-3 {
      z-index: 1;
      @include group(100px, 560px);
      transform: scale(0.2);
    }

    .bird-4 {
      z-index: 1;
      @include group(120px, 500px);
      transform: scale(0.2);
    }

    .bird-5 {
      z-index: 1;
      @include group(0, 30px);
      transform: scale(0.2);
    }

    .bird-main {
      @include group(-60px, 180px);
      transform: scale(0.18);
    }
    .left-branch {
      @include group(80px, 100px);
      transform: scale(1.2);
    }
    .right-branch {
      @include group(150px, 500px);
      transform: scale(1);
    }
    .logo {
      margin-top: 170px;
    }
  }
}

@media screen and (min-width: 1200px) {
  // Home page
  .index {
    .left-branch {
      @include group(100px, 400px);
      transform: scale(1.3);
    }
    .right-branch {
      @include group(150px, 800px);
      transform: scale(1);
    }
    .bird-main {
      @include group(-10px, 490px);
      transform: scale(0.3);
    }
    .logo {
      margin-top: 240px;
      transform: scale(1.2);
    }
  }

  // Individual page
  .intro {
    .left-branch {
      @include group(140px, 340px);
      transform: scale(1.5);
    }
    .right-branch {
      @include group(220px, 850px);
      transform: scale(1);
    }
    .bird-single {
      @include group(60px, 400px);
      transform: scale(0.2) rotate(0.02turn);
    }
    .logo {
      margin-top: 100px;
      transform: scale(1.2);
    }
    .profile-photo {
      margin-top: 10px;
    }
  }

  // Team page
  .group {
    .bird-1 {
      z-index: 1;
      @include group(75px, 480px);
      transform: scale(0.2);
    }

    .bird-2 {
      z-index: 1;
      @include group(50px, 360px);
      transform: scale(0.2);
    }

    .bird-3 {
      z-index: 1;
      @include group(110px, 860px);
      transform: scale(0.2);
    }

    .bird-4 {
      z-index: 1;
      @include group(120px, 830px);
      transform: scale(0.2);
    }

    .bird-5 {
      z-index: 1;
      @include group(0, 360px);
      transform: scale(0.2);
    }

    .bird-main {
      @include group(-30px, 500px);
      transform: scale(0.28);
    }
    .left-branch {
      @include group(80px, 420px);
      transform: scale(1.2);
    }
    .right-branch {
      @include group(150px, 810px);
      transform: scale(1);
    }
    .logo {
      margin-top: 200px;
    }
  }
}

@media screen and (min-width: 1500px) {
  // Home page
  .index {
    .left-branch {
      @include group(100px, 370px);
      transform: scale(1.3);
    }
    .right-branch {
      @include group(150px, 850px);
      transform: scale(1);
    }
    .bird-main {
      @include group(-10px, 500px);
      transform: scale(0.3);
    }
    .logo {
      // transform: scale(2);
      // @include group(280px, 630px);
    }
  }

  // Individual page
  .intro {
    .left-branch {
      @include group(140px, 500px);
      transform: scale(1.5);
    }
    .right-branch {
      @include group(220px, 1200px);
      transform: scale(1);
    }
    .bird-single {
      @include group(60px, 600px);
      transform: scale(0.2) rotate(0.02turn);
    }
    .logo {
      // @include group(120px, 880px);
      // transform: scale(1.3);
    }
    .profile-photo {
      // @include group(200px, 900px);
    }

    .profile-name {
    }
  }

  // Team page
  .group {
    .bird-1 {
      z-index: 1;
      @include group(75px, 500px);
      transform: scale(0.2);
    }

    .bird-2 {
      z-index: 1;
      @include group(40px, 380px);
      transform: scale(0.2);
    }

    .bird-3 {
      z-index: 1;
      @include group(100px, 1150px);
      transform: scale(0.2);
    }

    .bird-4 {
      z-index: 1;
      @include group(120px, 1130px);
      transform: scale(0.2);
    }

    .bird-5 {
      z-index: 1;
      @include group(0, 380px);
      transform: scale(0.2);
    }

    .bird-main {
      @include group(-30px, 680px);
      transform: scale(0.18);
    }
    .left-branch {
      @include group(80px, 460px);
      transform: scale(1.2);
    }
    .right-branch {
      @include group(150px, 1100px);
      transform: scale(1);
    }
    .logo {
      // @include group(280px, 800px);
      // transform: scale(1);
    }
    .profile-photo {
      // @include group(200px, 200px);
    }
  }
}
</style>
