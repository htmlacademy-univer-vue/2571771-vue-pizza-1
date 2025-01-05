<template>
    <div>
      <h2>Выберите размер:</h2>
      <SizeList :sizes="sizeOptions" @select="handleSelect" />
    </div>
  </template>
  
  <script>
  import SizeList from "@/components/SizeList.vue";
  
  export default {
    name: "SizeSelector",
    components: { SizeList },
    data() {
      return {
        sizeOptions: [
          { id: 1, name: "Маленькая", multiplier: 1, image: "small.png" },
          { id: 2, name: "Средняя", multiplier: 1.5, image: "medium.png" },
          { id: 3, name: "Большая", multiplier: 2, image: "large.png" },
        ],
      };
    },
    methods: {
      handleSelect(selectedSize) {
        this.$emit("select", selectedSize);
      },
    },
  };
  </script>
  