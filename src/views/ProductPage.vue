<template>
  <div class="container mt-20">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="!product">
      No product, <router-link class="main-link" to="/">Go to main</router-link>
    </div>
    <div v-else class="product">
      <div class="product__image">
        <img :src="product.image" :alt="product.title">
      </div>
      <div>
        <h2 class="product__title">{{ product.title }}</h2>
        <price :price="product.price" />
        <p>{{product.description}}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";
import {useProductStore} from "@/stores/singleProductStore";
import Price from "@/components/products/Price.vue";
@Component({
  components: {Price}
})
export default class ProductPage extends Vue {
  private store = useProductStore()

  private async mounted() {
    const id = this.$route.params.id as string
    await this.store.getProduct(id)
  }

  private get isLoading() {
    return this.store.isLoading
  }

  private get product() {
    return this.store.product
  }
}
</script>
<style lang="scss" scoped>
.main-link {
  color: #59ffe0;
  font-size: 18px;
}

.product {
  display: flex;
  gap: 20px;

  &__image {
    max-width: 320px;

    img {
      max-width: 100%;
    }
  }

  &__title {
    color: white;
  }
}
</style>