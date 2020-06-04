<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <hr />

        <button @click="selectedComponent = 'appMemory'" class="btn-sm btn btn-primary">appMemory</button>
        <button
          @click="selectedComponent = 'appNewMemory'"
          class="btn-sm btn btn-primary"
        >appNewMemory</button>
        <button @click="selectedComponent = 'appAuthor'" class="btn-sm btn btn-primary">appAuthor</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <hr />

        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="title">Deneme</h1>
            <p slot="content">bu bir denemedir</p>
            <i>All Right...</i>
          </component>
        </keep-alive>

        <!-- <component :is="selectedComponent">
          <h1 slot="title">Deneme</h1>
          <p slot="content">bu bir denemedir</p>
          <i>All Right...</i>
        </component>-->

        <!-- <appMemory content="deneme">
          <h1 slot="title">Deneme</h1>
          <p slot="content">bu bir denemedir</p>
          <i>All Right...</i>
        </appMemory>-->
      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory";
import NewMemory from "./components/NewMemory";
import Author from "./components/Author";

export default {
  data: function() {
    return { selectedComponent: "appMemory" };
  },
  components: {
    appMemory: Memory,
    appNewMemory: NewMemory,
    appAuthor: Author
  }
};
</script>

<style scoped>
</style>
