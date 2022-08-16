<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <h1>FOOT LOCKER</h1>
      </div>
    </div>
    <div class="row">
      <img class="home-image" src="https://i.postimg.cc/4NfwqTKw/baf1.jpg" />
    </div>
  </div>
  <div class="aboutish">
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            class="one"
            src="https://i.postimg.cc/MpGNQqT4/dunk-high.webp"
            alt="dunk"
          />
          <h3>Nike dunk High</h3>
        </div>
        <div class="col">
          <img
            src="https://i.postimg.cc/Y0pbBzLV/air-jordan-3-elephant.jpg"
            class="two"
            alt="jordan"
          />
          <h3>Air Jordan 3</h3>
        </div>
        <div class="col">
          <img
            src="https://i.postimg.cc/Y0sgD66Q/ozelia.webp"
            class="three"
            alt="adidas"
          />
          <h3>Adidas Ozelia</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="justdropped">
    <h1>Just Dropped</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            src="https://i.postimg.cc/bv6VXHDd/lemon-frost.jpg"
            class="four"
            alt="jordans"
          />
          <h2>Nike Lemon-Frost</h2>
          <h3>R 2 399,95</h3>
        </div>
        <div class="col">
          <img
            src="https://i.postimg.cc/6q4mf2Qq/stealth.jpg"
            class="five"
            alt=""
          />
          <h2>Jordan "Stealth"</h2>
          <h3>R3999.99</h3>
        </div>
        <div class="col">
          <img
            src="https://i.postimg.cc/7Y3nSMNd/white-air.webp"
            class="six"
            alt="airforce"
          />
          <h2>Nike Air force</h2>
          <h3>R2499.99</h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img
                src="https://i.postimg.cc/8zhJLQ0R/nike-logo.jpg"
                alt="img"
                class="logo"
              />
            </div>
            <div class="col-md-8">
              <img
                src="https://i.postimg.cc/DyG8K3F9/airforce.jpg"
                alt="logo"
                class="shoe"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

export default {
  views: {
    Home,
    Contact,
  },
};
</script>
<style scoped>
.fa-cart-shopping:before,
.fa-shopping-cart:before {
  content: "\f07a";
  margin-left: 30rem;
}
h1 {
  font-size: 10rem;
  font-family: "Rampart One";
  color: darkred;
  margin-bottom: 3rem;
}
h2 {
  color: black;
  margin-top: 3rem;
}
h3 {
  color: black;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.home-image {
  width: 85rem;
  height: 45rem;
  box-shadow: 5px 5px 5px 5px #ba181b;
  margin-left: 5.5rem;
  margin-bottom: 5rem;
}
.home-image:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px black;
  color: darkred;
}
img.one {
  width: 25rem;
  height: 400px;
  box-shadow: 5px 5px 5px 5px #ba181b;
  transition: width 3s;
}
img.one:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px black;
  color: darkred;
}
img.two {
  width: 25rem;
  height: 400px;
  box-shadow: 5px 5px 5px 5px #ba181b;
}
img.two:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px black;
  color: darkred;
}
img.three {
  width: 25rem;
  height: 400px;
  box-shadow: 5px 5px 5px 5px #ba181b;
}
img.three:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px black;
  color: darkred;
}
img.four {
  width: 25rem;
  height: 400px;
  box-shadow: 5px 5px 5px 5px #ba181b;
}
img.four:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px black;
  color: darkred;
}
img.five {
  width: 25rem;
  height: 400px;
  box-shadow: 5px 5px 5px 5px #ba181b;
}
img.five:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px black;
  color: darkred;
}
img.six {
  width: 25rem;
  height: 400px;
  box-shadow: 5px 5px 5px 5px #ba181b;
}
img.six:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px black;
  color: darkred;
}
.shoe {
  width: 45rem;
  height: 40rem;
  margin-bottom: 5rem;
  box-shadow: 5px 5px 5px 5px darkred;
}
.shoe:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px black;
  color: darkred;
}
.logo {
  width: 31.7rem;
  height: 40rem;
  margin-bottom: 5rem;
  box-shadow: 5px 5px 5px 5px #ba181b;
}
.logo:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px black;
  color: darkred;
}

/* media queries */

@media (min-width: 300px) and (max-width: 1032px) {
}
</style>
