<template>
    <header class="app-header">
      <nav>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/basket">Basket</router-link></li>
          <li><router-link to="/restaurants">Restaurants</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
</template>
<<<<<<< HEAD
=======
  
  <script>
  export default {
    name: 'AppHeader'
  }
  </script>
  
  <style scoped>
  .app-header {
    color: white;
    background-color: #10470f;
    padding: 10px;
    text-align: center;
  }
  
  .app-header li {
    font-size: 2em;
    color: white;
    text-decoration: none;
    margin-bottom: 10px;
  }
  
  .nav-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  .nav-links li {
    margin: 0 15px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #fffefe;
    font-size: 1.2em;
  }
  
  .nav-links a:hover {
    color: #007bff;
  }
  </style>
  
>>>>>>> 62db283 (Добавление переменных в компонент в проекте Vue-Pizza)
