<template>
    <div
      class="draggable"
      draggable="true"
      @dragstart="handleDragStart"
      @dragend="handleDragEnd"
    >
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppDrag",
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    methods: {
      handleDragStart(event) {
        event.dataTransfer.setData("application/json", JSON.stringify(this.item));
        this.$emit("drag-start", this.item);
      },
      handleDragEnd() {
        this.$emit("drag-end");
      },
    },
  };
  </script>
  
  <style scoped>
  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
  </style>
  