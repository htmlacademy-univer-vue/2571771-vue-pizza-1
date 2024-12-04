<template>
    <div>
      <h2>Выберите соус:</h2>
      <ul>
        <li v-for="item in sauces" :key="item.id">
          <p><strong>{{ item.name }}</strong></p>
          <p>Цена: {{ item.price }} ₽</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "SauceList",
    props: {
      sauces: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 20px;
  }
  </style>
  