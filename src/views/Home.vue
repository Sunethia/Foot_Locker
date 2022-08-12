<template>
  <div class="container">
    <form>
      <input type="text" name="email" placeholder="Email:" />
      <input type="text" name="password" placeholder="Password:" />
      <button>Login</button>
      <div class="form-extra">
        <a href=""><p>Register</p></a>
        <a href=""><p>Forgot-Psw</p></a>
      </div>
    </form>
  </div>
</template>
<script></script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px skyblue;
  height: 400px;
  width: 400px;
  gap: 20px;
}
.form-extra {
  display: flex;
  gap: 10px;
}
.form-extra p {
  background: skyblue;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  color: black;
}
button {
  width: 210px;
  border-radius: 10px;
  background: skyblue;
  border: none;
  height: 30px;
}
.form-extra a {
  text-decoration: none;
}
</style>
