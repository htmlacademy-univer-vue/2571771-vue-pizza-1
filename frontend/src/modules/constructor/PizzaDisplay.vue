<template>
    <div>
      <h2>Пицца:</h2>
      <AppDrop @drop="handleDrop">
        <div class="pizza">
          <p>Перетащите ингредиенты сюда!</p>
          <div v-for="item in pizzaIngredients" :key="item.id">
            <p>{{ item.name }}</p>
          </div>
        </div>
      </AppDrop>
    </div>
  </template>
  
  <script>
  import AppDrop from "@/components/AppDrop.vue";
  
  export default {
    name: "PizzaDisplay",
    components: { AppDrop },
    data() {
      return {
        pizzaIngredients: [],
      };
    },
    methods: {
      handleDrop(item) {
        this.pizzaIngredients.push(item);
        console.log("Dropped", item);
      },
    },
  };
  </script>
  
  <style scoped>
  .pizza {
    width: 300px;
    height: 300px;
    border: 2px solid #ddd;
    border-radius: 50%;
    position: relative;
    text-align: center;
    line-height: 300px;
  }
  </style>
  