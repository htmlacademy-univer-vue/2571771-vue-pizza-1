<template>
    <div>
      <h2>Дополнительно:</h2>
      <ul>
        <li 
          v-for="item in misc" 
          :key="item.id" 
          :class="{ selected: selectedMisc.includes(item.id) }"
          @click="toggleMisc(item.id)"
        >
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
    data() {
      return {
        selectedMisc: [],
      };
    },
    methods: {
      toggleMisc(id) {
        const index = this.selectedMisc.indexOf(id);
        if (index === -1) {
          this.selectedMisc.push(id);
        } else {
          this.selectedMisc.splice(index, 1);
        }
        this.$emit("miscSelected", this.selectedMisc);
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
  img {
    width: 50px;
    height: 50px;
  }
  .selected {
    border: 2px solid #007bff;
    border-radius: 5px;
  }
  </style>
  