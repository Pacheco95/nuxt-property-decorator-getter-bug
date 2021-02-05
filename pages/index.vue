<template>
  <div class="container">{{ loading }}</div>
</template>

<script lang="ts">
import { Component, getModule, Vue } from "nuxt-property-decorator";
import ExampleStore from "~/store/example-store";

@Component
export default class Hello extends Vue {
  exampleStore = getModule(ExampleStore, this.$store);

  get loading() {
    console.log("getter");
    return this.exampleStore.loading;
  }

  created() {
    console.log("created?");
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
