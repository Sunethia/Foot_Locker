import { createStore } from "vuex";
import router from "@/router/index";
export default createStore({
  state: {
    users: null,
    products: null,
    product: null,
  },
  mutations: {
    setproduct: (state, product) => {
      state.product = product;
    },
    setproducts: (state, products) => {
      state.products = products;
    },
    setusers: (state, users) => {
      state.users = users;
    },
  },
  actions: {
    login: async (context, data) => {
      const { email, password } = data;
      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const usersData = await response.json();
      console.log(usersData);
      console.log(router);
      router.push({
        name: "products",
      });
      context.commit("setusers", usersData[0]);
    },
    register: async (context, data) => {
      const { FullName, email, password } = data;
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          FullName: FullName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
    },
    getProduct: async (context, id) => {
      fetch(" http://localhost:6969/products/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setproduct", product));
    },
    getProducts: async (context) => {
      fetch(" http://localhost:6969/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },
    DeleteProduct: async (context, id) => {
      fetch(" http://localhost:6969/products/" + id)
        .then((res) => res.json())
        .then((Products) => context.commit("Deleteproduct", products));
    },
  },
  modules: {},
});
