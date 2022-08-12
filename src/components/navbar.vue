<template>
  <div>
    <nav class="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">Sign Up</a></li>
        <li><a href="">Login</a></li>
        <i class="fa-solid fa-cart-shopping"></i>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  background-color: white;
  border-bottom: 2px solid black;
}

li {
  float: left;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: "Rampart One", cursive;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: grey;
}
</style>
