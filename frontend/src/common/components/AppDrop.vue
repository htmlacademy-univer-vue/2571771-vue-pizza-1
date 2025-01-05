<template>
    <div
      class="drop-zone"
      @dragover.prevent="handleDragOver"
      @drop="handleDrop"
    >
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppDrop",
    methods: {
      handleDragOver(event) {
        event.preventDefault();
      },
      handleDrop(event) {
        const data = event.dataTransfer.getData("application/json");
        const item = JSON.parse(data);
        this.$emit("drop", item);
      },
    },
  };
  </script>
  
  <style scoped>
  .drop-zone {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
  }
  .drop-zone:hover {
    border-color: #aaa;
  }
  </style>
  