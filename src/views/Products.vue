<template>
  <h1>PRODUCTS</h1>
  <div v-if="products" class="prods">
    <Card
      class="card"
      v-for="product in products"
      :key="product.product_id"
      :product="product"
    />
  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  components: { Card },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style scoped>
h1 {
  font-size: 5rem;
  color: darkred;
  font-family: "Rampart One";
}
.prods {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-inline: 7%;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
}
.card {
  height: 25rem;
  width: 20rem;
}
.prods a {
  text-decoration: none;
  color: black;
}
.product_img {
  height: 15rem;
  width: 18rem;
  margin-left: 3.5rem;
}
</style>
