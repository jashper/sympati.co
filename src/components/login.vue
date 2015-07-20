<template>
  <div class="ui attached message">
    <div class="header">
      Welcome to our site!
    </div>
    <p>Fill out the form below to sign-up for a new account</p>
  </div>
  <form class="ui form attached segment">
    <div class="field">
      <div class="ui left icon input">
        <i class="user icon"></i>
        <input type="text" name="email" placeholder="E-mail address">
      </div>
    </div>
    <div class="field">
      <div class="ui left icon input">
        <i class="lock icon"></i>
        <input type="password" name="password" placeholder="Password">
      </div>
    </div>
    <div class="ui blue submit button">Login</div>
  </form>
  <div class="ui bottom attached warning message">
    <i class="icon help"></i>
    <a href="#">Sign-up here </a> instead
  </div>
</template>

<script>
  module.exports = {
    components: {},
  };
</script>
