<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  product: {
    title: string;
    description: string;
    price: number;
    stock: number;
    shipping: {
      weight: string;
      dimensions: string;
      free_shipping: boolean;
      estimated_delivery: string;
    };
    reviews: Array<{
      user: string;
      rating: number;
      comment: string;
    }>;
  };
}>();

const activeTab = ref(0);
</script>

<template>
  <div>
    <div class="flex gap-2 mb-4">
      <button @click="activeTab = 0" :class="activeTab === 0 ? 'font-bold underline' : ''">Produktinformationen</button>
      <button @click="activeTab = 1" :class="activeTab === 1 ? 'font-bold underline' : ''">Versandinformationen</button>
      <button @click="activeTab = 2" :class="activeTab === 2 ? 'font-bold underline' : ''">Bewertungen</button>
    </div>
    <div v-if="activeTab === 0">
      <p><strong>Titel:</strong> {{ product.title }}</p>
      <p><strong>Beschreibung:</strong> {{ product.description }}</p>
      <p><strong>Preis:</strong> €{{ product.price }}</p>
      <p><strong>Verfügbarkeit:</strong> {{ product.stock > 0 ? 'Auf Lager' : 'Nicht verfügbar' }}</p>
    </div>
    <div v-else-if="activeTab === 1">
      <p><strong>Gewicht:</strong> {{ product.shipping.weight }}</p>
      <p><strong>Maße:</strong> {{ product.shipping.dimensions }}</p>
      <p><strong>Kostenloser Versand:</strong> {{ product.shipping.free_shipping ? 'Ja' : 'Nein' }}</p>
      <p><strong>Lieferzeit:</strong> {{ product.shipping.estimated_delivery }}</p>
    </div>
    <div v-else>
      <div v-if="product.reviews && product.reviews.length">
        <ul>
          <li v-for="(review, idx) in product.reviews" :key="idx" class="mb-2">
            <strong>{{ review.user }}</strong> ({{ review.rating }}/5): {{ review.comment }}
          </li>
        </ul>
      </div>
      <div v-else>
        <em>Keine Bewertungen vorhanden.</em>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 0.25rem 0.75rem;
  border: none;
  background: none;
  cursor: pointer;
}
button:focus {
  outline: 2px solid #2563eb;
}
</style>
