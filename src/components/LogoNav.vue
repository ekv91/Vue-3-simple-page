<script setup>
import { ref } from 'vue';

const isNavOpen = ref(false); 

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value; 
};
</script>
<template>
    <div class="header-container">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo">
      </div>
      <button @click="toggleNav" class="nav-toggle" aria-label="toggle navigation">
        <span v-if="!isNavOpen" class="fas fa-bars"></span> 
        <span v-else class="fas fa-times"></span> 
      </button>
      <nav class="navigation" :class="{ 'open': isNavOpen }">
        <ul>
          <li><i class="fas fa-home"></i>Domov</li>
          <span></span>
          <li>O nas</li>
          <span></span>
          <li>Kontakt</li>
          <span></span>
          <li>Pišite nam</li>
          <span></span>  
          <li>IZDELKI</li>
          <span></span>
        </ul>
      </nav>
    </div>
  </template>
  
  <style scoped>  
  .header-container {
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    max-width: 1141px;
    margin: 0 auto;
    padding-top: 20px;
  }
  
  .logo img {
    max-width: 139px;
    max-height: 60px;
    margin-bottom: 20px; 
  }
  
  .navigation {
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    height: 50px;
    background-image: linear-gradient(-180deg, #48C6EF 0%, #6F86D6 100%);
    border-radius: 5px;
    width: 100%; 
    box-shadow: 0 -4px 6px -1px rgba(72, 198, 239, 0.5);

    
  }
  .nav-toggle {
    display: none; 
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
  }
  
  .navigation ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    padding: 0; 
  }
  
  .navigation li {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold; 
    color: white;
    margin: 22px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .fa-home {
    color: rgba(255, 255, 255, 0.24);
    margin-right: 15px;
  }
  
  .navigation span {
    display: inline-block;
    height: 28px;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.14);
    margin: 0 10px;
  }

 
@media (max-width: 500px) {
    .navigation {
      display: none; 
      position: fixed;
      top: 0; left: 0;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      align-items: center; 
      justify-content: flex-start; 
      background-color: rgba(0, 0, 0, 0.95); 
      z-index: 20; 
      padding-top: 60px; 
    }
  
    .navigation.open {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: rgba(156, 57, 57, 0.95);
        padding-top: 60px; 
        z-index: 20; 
        width: 100%; 
        height: 100vh; 
      }

      .navigation ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
        margin-top: 20px;
      }   
      .navigation li {
        width: 80%;
        text-align: center;
        padding: 12px 0;
        border-bottom: 1px solid #ffffff; 
      }
  
      .nav-toggle {
        display: block;
        position: absolute;
        top: 40px; right: 40px;
        z-index: 30;
      }
      
      .navigation span {
        display: none; 
      }
    .fa-bars{
        color: #48C6EF;
        font-size: 40px;
        position: absolute;
    }
    .fa-times  {
        color: red;
        font-size: 40px;
        position: fixed;
        top: 30px;
        right: 30px;
    }
  }
   
  </style>