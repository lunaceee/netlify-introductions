<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center>
      <v-flex xs12 sm6 md6 class="email">
        <v-text-field label="Email" box></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="signup">
        <v-btn>Sign up</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex class="login">
        <v-btn>Login</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
</script>

<style lang="scss" scoped>
button {
  min-width: 200px;
}
@media screen and (min-width: 700px) {
  .email {
    margin-top: 10px;
  }
}

@media screen and (min-width: 1400px) {
  .email {
    margin-top: 80px;
  }
}
</style>
