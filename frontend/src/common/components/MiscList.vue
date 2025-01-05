<template>
    <div>
      <h2>Дополнительно:</h2>
      <ul>
        <li v-for="item in misc" :key="item.id">
          <img :src="`/src/assets/img/${item.image}.svg`" :alt="item.name" />
          <p><strong>{{ item.name }}</strong></p>
          <p>Цена: {{ item.price }} ₽</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "MiscList",
    props: {
      misc: {
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
  img {
    width: 50px;
    height: 50px;
  }
  </style>
  