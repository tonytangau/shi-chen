<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Time />
  </div>
</template>

<script>
import Time from "./components/Time.vue";

export default {
  name: "app",
  components: {
    Time
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
