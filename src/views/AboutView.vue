<template>
  <div class="about">
    <div class="container">
      <h1>Foot Locker</h1>
      <h2>The shoe that will not let you down.</h2>
      <div class="row">
        <div class="col">
          <img
            src="https://i.postimg.cc/WpWXGLqJ/about.webp"
            alt="img"
            class="about1"
          />
        </div>
        <div class="col">
          <h2>
            ‘Foot Locker’ – Footwear for Everyone For each one of those shoe
            sweethearts out there, ‘Foot Locker’ offer the one-stop goal to pick
            the correct match of footwear. To satisfy the affection for shoes,
            we offer heaps of alternatives from driving footwear marks, all
            under one rooftop. Gone are the days when you needed to go from
            store to store to locate the correct style and size for yourself. At
            ‘Foot Locker’, you can locate a vast accumulation of dashing
            footwear in all sizes and styles, all inside a couple of snaps.
            Simple right? Not just we are here to spare your time, we are
            putting forth you the most dazzling footwear alternatives from all
            the first-rate brands like Nike, Adidas, and Jordan. At ‘Foot
            Locker’, we offer men, ladies, and child’s shoes perfect for any and
            each event. Ideal from game shoes to shoes to flip-flops, there is
            nothing that you can’t discover at ‘Foot Locker’ to supplement your
            clothing. At ‘Foot Locker’ , conveying quality footwear that
            displays style is our adage. Devoted to satisfying your shopping
            wants with no inconvenience, we ensure that you encounter smooth web
            based requesting background. Our intriguing accumulation of
            elegantly insightful footwear is accessible at astonishing costs
            that will really shock you. So be a shoe-holic with ‘Foot Locker’.
          </h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img
          src="https://i.postimg.cc/YSxKH6tF/about2.webp"
          alt="bout"
          class="shelf"
        />
        <h3>We offer a variety of brands.</h3>
      </div>
      <div class="col">
        <img
          src="https://i.postimg.cc/jdHN62c5/customs.jpg"
          alt="cust"
          class="cust"
        />
        <h3>We offer customisation services.</h3>
      </div>
      <div class="col">
        <img
          src="https://i.postimg.cc/7hKS8QWR/https-hypebeast-com-image-2018-06-goat-clean-sneakers-1.jpg"
          alt="clean"
          class="shelf1"
        />
        <h3>We offer products to help you keep your sneakers clean.</h3>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about {
  background-color: white;
}
h1 {
  color: black;
  margin-top: 4rem;
}
h2 {
  color: black;
  margin-bottom: 5rem;
  margin-top: 3rem;
  font-size: 15px;
  font-family: "Courier New", Courier, monospace;
}
.about1 {
  height: 25rem;
  width: 35rem;
}
.about1:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px red;
  color: darkred;
}
.shelf {
  width: 25rem;
  height: 25rem;
}
.shelf:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px red;
  color: darkred;
}
.shelf1 {
  width: 25rem;
  height: 25rem;
}
.shelf1:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px red;
  color: darkred;
}
.cust {
  width: 25rem;
  height: 25rem;
}
.cust:hover {
  background: red;
  box-shadow: 5px 5px 5px 5px red;
  color: darkred;
}
h3 {
  color: black;
  font-size: 20px;
}
/* media queries */
/* media queries */

@media (min-width: 300px) and (max-width: 1032px) {
  .h1 {
    font-size: 10px;
  }
}
@media (min-width: 655px) and (max-width: 670px) {
  .i {
    margin-right: 3px;
  }
}
@media (min-width: 500px) and (max-width: 666px) {
  .about1 {
    height: 17rem;
    width: 15rem;
  }
  h2 {
    font-size: 7px;
  }
  i {
    margin-top: 3rem;
  }
  .shelf {
    width: 10rem;
    height: 10rem;
  }
  .cust {
    width: 10rem;
    height: 10rem;
  }
  .shelf1 {
    width: 10rem;
    height: 10rem;
  }
}
@media (min-width: 440px) and (max-width: 501px) {
  .about1 {
    width: 12rem;
    height: 17rem;
  }
  h2 {
    font-size: 7px;
  }
  .cust {
    width: 12rem;
    height: 17rem;
  }
  .shelf1[data-v-4cebd208] {
    width: 15rem;
    height: 17rem;
  }
}
@media (min-width: 400px) and (max-width: 435px) {
  .about1 {
    width: 15rem;
    height: 30rem;
  }
  h2 {
    font-size: 7px;

  }
  .shelf {
    width:15rem;
    height: 25rem;
  }
  h3 {
    font-size:10px ;
  }
  .cust {
    width: 15rem;
    height: 25rem;
  }
  .shelf1 {
    width: 15rem;
    height:25rem ;
  }

}
@media (min-width: 300px) and (max-width: 400px) {
  .about1 {
    width:10rem;
    height: 15rem;
  }
  h2 {
    font-size: 5px;
  }
  .shelf {
     width:10rem;
    height: 15rem;
  }
  h3 {
    font-size: 7px;
  }
  .cust {
     width:10rem;
    height: 15rem;
  }
  .shelf1 {
     width:10rem;
    height: 15rem;
  }
}
</style>
