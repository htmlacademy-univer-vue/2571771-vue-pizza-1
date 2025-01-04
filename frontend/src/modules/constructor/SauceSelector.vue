<template>
    <div>
      <h2>Выберите соус:</h2>
      <ul>
        <li 
          v-for="item in sauces" 
          :key="item.id" 
          :class="{ selected: selectedSauce === item.id }"
          @click="selectSauce(item.id)"
        >
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
    data() {
      return {
        selectedSauce: null,
      };
    },
    methods: {
      selectSauce(id) {
        this.selectedSauce = id;
        this.$emit("sauceSelected", id);
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
    cursor: pointer;
  }
  .selected {
    border: 2px solid #007bff;
    border-radius: 5px;
  }
  </style>
  