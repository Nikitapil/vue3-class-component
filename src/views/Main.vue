<template>
  <div>Hello</div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-facing-decorator";
import {useMainStore} from "@/stores/mainStore";

@Component
export default class Main extends Vue {
  store = useMainStore()

  async mounted() {
    await this.store.getProducts()
    console.log(this.store.products)
  }
}
</script>
