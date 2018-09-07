<template>
  <div>
    <h2>{{ this.shichen }}</h2>
    <h2>{{ this.currentTime }}</h2>
  </div>
</template>

<script>
const getTime = hours => {
  if (hours >= 1 && hours < 3) {
    return "【丑时】";
  } else if (hours >= 3 && hours < 5) {
    return "【寅时】";
  } else if (hours >= 5 && hours < 7) {
    return "【卯时】";
  } else if (hours >= 7 && hours < 9) {
    return "【辰时】";
  } else if (hours >= 9 && hours < 11) {
    return "【巳时】";
  } else if (hours >= 11 && hours < 13) {
    return "【午时】";
  } else if (hours >= 13 && hours < 15) {
    return "【未时】";
  } else if (hours >= 15 && hours < 17) {
    return "【申时】";
  } else if (hours >= 17 && hours < 19) {
    return "【酉时】";
  } else if (hours >= 19 && hours < 21) {
    return "【戌时】";
  } else if (hours >= 21 && hours < 23) {
    return "【亥时】";
  } else {
    return "【子时】";
  }
};

export default {
  name: "Time",
  data() {
    return {
      shichen: getTime(new Date().getHours()),
      currentTime: null
    };
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = new Date().toLocaleTimeString();
    }
  },
  created() {
    this.currentTime = new Date().toLocaleTimeString();
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
};
</script>

<style scoped>
div {
  padding-bottom: 200px;
}
</style>
