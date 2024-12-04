<template>
    <div>
      <h2>Выберите размер:</h2>
      <ul>
        <li v-for="item in sizes" :key="item.id">
          <img :src="`/src/assets/img/${item.image}`" :alt="item.name" />
          <p><strong>{{ item.name }}</strong></p>
          <p>Множитель: {{ item.multiplier }}</p>
        </li>
      </ul>
    </div>
  </template>

  <script>
  export default {
    name: "SizeList",
    props: {
      sizes: {
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