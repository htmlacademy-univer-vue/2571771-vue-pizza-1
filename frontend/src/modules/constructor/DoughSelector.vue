<template>
    <div>
      <h2>Выберите тесто:</h2>
      <DoughList :dough="doughOptions" @select="handleSelect" />
    </div>
  </template>
  
  <script>
  import DoughList from "@/components/DoughList.vue";
  
  export default {
    name: "DoughSelector",
    components: { DoughList },
    data() {
      return {
        doughOptions: [
          { id: 1, name: "Тонкое", description: "Хрустящее тесто", price: 50, image: "thin.png" },
          { id: 2, name: "Пышное", description: "Мягкое тесто", price: 70, image: "thick.png" },
        ],
      };
    },
    methods: {
      handleSelect(selectedDough) {
        this.$emit("select", selectedDough);
      },
    },
  };
  </script>
  