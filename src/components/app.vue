<template>
  <div class="ui center aligned padded grid raised container">
    <div class="six wide column">
      <!-- <router-view></router-view> -->
      <login></login>
    </div>
  </div>
</template>

<script>
  import Login from './login.vue';

  module.exports = {
    components: {
      login: Login,
    },
  };
</script>
