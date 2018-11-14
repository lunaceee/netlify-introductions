<template>
  <transition-group tag="div">
    <div v-for="(user, i) in userInfo" 
      @click="changeUser(i)"
      :key="user.title" 
      :class="[user === selectedUser ? activeUser : secondaryUser, `profile-${i}`]"
      :ref="`profile${i}`"
    >
      <img v-if="page === 'index'" src="../static/images/netlify-logo.png" />
      <img v-else :src="user.thumnail" alt="">
    </div>

    <button :class="follow" key="follow">
      <span>Follow</span>
    </button>

     <h2 key="profile-name" class="profile-name">
      <span v-if="page === 'group'" class="user-trip">{{ selectedUser.title }}</span>
      <span v-else-if="page === 'index'">Netlify</span>
      <span v-else>{{ selectedUser.title }}</span>
    </h2>

  </transition-group>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      following: false,
      follow: 'follow',
      followclass: 'active-follow',
      activeUser: 'profile-photo',
      secondaryUser: 'profile-photo-secondary',
    }
  },
  computed: {
    ...mapState(['page', 'indexedUser', 'userInfo']),
    ...mapGetters(['selectedUser'])
  },
  methods: {
    changeUser(i) {
      this.$store.commit('changeUser', i)
      if (this.page === 'group') {
        const el = this.$refs.profile0[0]
        el.style.transform = `translate3d(${-70 +
          this.indexedUser * 55}px, -70px, 0) scale(0.25)`
      }
    }
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

@mixin online($size, $position, $border) {
  position: absolute;
  background: #07dc3c;
  border-radius: 50% 50%;
  width: $size;
  height: $size;
  right: $position;
  bottom: $position;
  border: $border;
  opacity: 0;
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

.profile-1 {
  transform: translate3d(-15px, -70px, 0) scale(0.25);
}
.profile-2 {
  transform: translate3d(40px, -70px, 0) scale(0.25);
}
.profile-3 {
  transform: translate3d(95px, -70px, 0) scale(0.25);
}

.follow {
  font-weight: bold;
  width: 150px;
  transition: 1s all ease;
  @include group(320px, 220px);
  &:focus {
    outline: 1px dotted rgb(5, 134, 106);
  }
}

.saveinfo {
  color: white;
  position: absolute;
  top: 194px;
  font-size: 20px;
  right: 56px;
  text-align: right;
  visibility: hidden;
  opacity: 0;
}

.profile-name {
  font-size: 35px;
  @include group(355px, 0);
}

.side-icon {
  position: absolute;
  top: 220px;
  right: 0;
  display: block;
  transition: 0.4s all ease-out;
  padding: 12px 12px 9px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50% 50%;
  cursor: pointer;
}

//animations
.single {
  .follow {
    transform: translate3d(-215px, -80px, 0);
  }
  .profile-photo {
    transform: translate3d(-20px, -100px, 0) scale(0.75);
  }
  .profile-name {
    transform: translate3d(140px, -125px, 0) scale(0.75);
    color: white;
  }
  .side-icon {
    transform: translate3d(0, -40px, 0);
    background: rgba(255, 255, 255, 0.9);
  }
  .calendar {
    opacity: 1;
  }
}

.group {
  .follow {
    opacity: 0;
    transition: none;
  }
  .profile-photo {
    transform: translate3d(-70px, -70px, 0) scale(0.25);
    img {
      border-radius: 50% 50%;
    }
  }
  .profile-0,
  .profile-1,
  .profile-2,
  .profile-3 {
    transition: 0.4s all ease-in-out;
    opacity: 1;
  }
  .profile-photo,
  .profile-photo-secondary {
    img:hover {
      transition: 0.2s all ease;
      border: 10px solid white;
    }
  }
  .online {
    opacity: 1;
  }
  .profile-name {
    transform: translate3d(0px, -125px, 0);
    color: white;
  }
  .side-icon {
    transform: translate3d(0, -40px, 0);
    background: rgba(255, 255, 255, 0.9);
  }
  .map-pin {
    opacity: 1;
  }
}

.index {
  .profile-photo {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.index .profile-photo.profile-0 {
  transform: translate3d(0, 0, 0) scale(1) !important;
}

//make the icon aligned with the avatars that are similar on mobile
@media screen and (max-width: 600px) {
  .group,
  .place {
    .side-icon {
      transform: translate3d(0, -65px, 0);
      padding: 14px 14px 12px;
    }
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