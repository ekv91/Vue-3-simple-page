<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { cards } from '../cards';

const card = ref(null);
const router = useRouter();
const route = useRoute(); 

const fetchCardById = (id) => {
  card.value = cards.find(c => c.id === parseInt(id));
};

const goBack = () => {
  router.push({ name: 'card-list' });
};

onMounted(() => {
  const id = route.params.id;
  fetchCardById(id);
});
</script>

<template>
  <div class="card-details-container">
    <div v-if="card" class="card-details">
      <img :src="card.imageUrl" alt="Card Image" class="card-details-image" />
      <div class="card-details-content">
        <h1>{{ card.title }}</h1>
        <h2>{{ card.subtitle }}</h2>
        <div v-for="(text, index) in card.texts" :key="index" class="card-text">
          <p>{{ text }}</p>
        </div>
        <button @click="goBack" class="back-button"> &lt; NAZAJ NA SEZNAM</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-details-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 30px auto;
  max-width: 1141px;
  
}

.card-details {
  display: flex;
  gap: 30px;
  margin: 0 auto;
}

.card-details-image {
 height: 203px;
 width: 361px;
 border-radius: 5px;
 box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-details-image img {
   width: fit-content;
   
}

.card-details-content {
  max-width: 746px;
  margin-top: -5px;
}

.card-details-content h2 {
margin-bottom: 20px;
color: #686868;
font-weight: 300;
}

.card-details-content h1 {
  font-size: 24px;
  font-weight: bold;
  color: #262626;
 
}
.card-details-content p{
  color:#686868 ;
  margin-bottom: 20px;
  font-size: 13px;
}

.card-details-content button {
  padding: 15px 30px;
  color: #48C6EF;
  border: 2px solid #48C6EF;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
}

.card-details-content button:hover {
  background-color: #5EA0E0;
  color: #FFF;
}

@media (max-width: 500px) {
  .card-details-container {
    margin: 0 20px;
    border: 2px solid #5EA0E0;
  }
  .card-details {
    flex-direction: column;
    align-items: center;
  }
  .card-details-image{
    margin-top: 30px;
  }
  .card-details-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
  .back-button {
    margin-top: 20px;
  }

}
</style>