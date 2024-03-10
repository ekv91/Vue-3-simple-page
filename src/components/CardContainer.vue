<script setup>
import { useRouter } from 'vue-router';
import { cards } from '../cards'; 

const router = useRouter();
const showCardDetails = (id) => {
  router.push({ name: 'card-details', params: { id } });
};
</script>

<template>
  <div class="card-container">
    <div v-for="card in cards" :key="card.id" class="card">
      <img :src="card.imageUrl" class="card-image" />
      <div class="card-content">
        <h1>{{ card.title }}</h1>
        <h2>{{ card.subtitle }}</h2>
        <div v-for="(text, index) in card.texts" :key="index">
          <p>{{ text }}</p>
        </div>
        
        <button @click="showCardDetails(card.id)" class="card-button">+ VEČ O IZDELKU</button>
      </div>
    </div>
  </div>
</template>

  
<style scoped>
.card-container {
  max-width: 1141px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  position: relative;
  width: 100%; 
  height: 666px; 
  border-radius: 5px;
  border: 1px solid gray;
}

.card-image {
  width: 100%;
  height: auto; 
}
.card-content {
    margin-top: 20px;
}

.card-content h1 {
  color: #262626;
  font-weight: bold;
  font-size: 24px;
  margin-left: 20px;
}

.card-content h2 {
  color: #686868;
  opacity: 100%;
  font-size: 20px;
  margin-left: 20px;
  font-weight: 300;

}
.card-content p {
  font-size: 13px;
  color: #686868;
  margin: 20px;
}

.card-button {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #5EA0E0;
  background-color: white;
  border: 1px solid #5EA0E0;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.card-button:hover {
  background-color: #5EA0E0;
  color: white;
}


@media (max-width: 500px) {
    .card-container {
      display: flex;
      flex-direction: column;
      align-items: center; 
      
    }
  
    .card {
      width: auto; 
      margin: 20px; 
      height: auto;
    }
    .card-content p {
        font-size: 13px;
    }
    
    .card-button {
      position: relative; 
      margin-top: 20px; 
  }
  
}
</style>