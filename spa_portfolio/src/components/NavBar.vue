<template>
  <nav>
    <div class="content_nav">
      <p class="nav_text"><router-link to="/">SOBRE MIM</router-link></p>
      <p class="nav_text"><router-link to="/my-work">O QUE FAÇO?</router-link></p>
      <p class="nav_text"><router-link to="/my-hobbies">HOBBIES</router-link></p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>
