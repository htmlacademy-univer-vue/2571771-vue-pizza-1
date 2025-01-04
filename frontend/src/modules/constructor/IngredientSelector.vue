<template>
    <div>
      <h2>Выберите ингредиенты:</h2>
      <ul>
        <li v-for="item in ingredients" :key="item.id">
          <AppDrag :item="item" @drag-start="handleDragStart">
            <img :src="`/src/assets/img/${item.image}`" :alt="item.name" />
            <p><strong>{{ item.name }}</strong></p>
            <p>Цена: {{ item.price }} ₽</p>
          </AppDrag>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import AppDrag from "@/components/AppDrag.vue";
  
  export default {
    name: "IngredientSelector",
    components: { AppDrag },
    props: {
      ingredients: {
        type: Array,
        required: true,
      },
    },
    methods: {
      handleDragStart(item) {
        console.log("Dragging", item);
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
  