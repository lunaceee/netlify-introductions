<template>
  <transition-group tag="div">
    <div v-for="(user, i) in userInfo" 
      :key="user.title" 
      :class="[user === selectedUser ? activeUser : secondaryUser]"
    >
      <nuxt-link exact :to="userInfo[i]._path">
        <img v-if="page === 'index'" src="../static/images/netlify-logo.png" />
        <img v-else :src="user.thumnail" alt="">
      </nuxt-link>
    </div>

     <h2 key="profile-name" class="profile-name">
      <span v-if="page === 'group'" class="user-trip">Netlifriends</span>
      <span v-else-if="page === 'index'"></span>
      <span v-else>{{ selectedUser.title }}</span>
    </h2>

  </transition-group>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      activeUser: 'profile-photo',
      secondaryUser: 'profile-photo-secondary',
    }
  },
  computed: {
    ...mapState(['page', 'indexedUser', 'userInfo']),
    ...mapGetters(['selectedUser']),
  }
}
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
  width: 200px;
  @include group(150px, 0);
  img {
    border-radius: 4px;
  }
}

.profile-photo-secondary {
  @include group(150px, 0);
  width: 200px;
  opacity: 0;
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
  font-size: 35px;
  @include group(355px, 0);
}

//animations
.intro {
  .profile-photo {
    transform: translate3d(-20px, -100px, 0) scale(0.75);
  }
  .profile-name {
    transform: translate3d(-8px, -125px, 0) scale(0.75);
    color: white;
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

.items,
.list-move {
  transition: all 0.4s ease;
}

.list-leave-active {
  position: absolute;
}

#text {
  transform-origin: 50% 50%;
}

svg {
  fill: #a8dadc;
}

@media screen and (max-width: 600px) {
  ul,
  aside {
    display: none;
  }
}
</style>