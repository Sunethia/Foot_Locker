<template>
  <div>
    <nav class="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="">Sign Up</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/contact">Contact</a></li>
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
  background-color: black;
  border-bottom: 2px solid black;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: "Rampart One", cursive;
}
i {
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 3rem;
  margin-top: 1.5rem;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: grey;
}
</style>
