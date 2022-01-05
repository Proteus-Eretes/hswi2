<template>
  <div id="card">
    <div id="logo">
      <img id="logo-img" :src="logo"/>
    </div>
    <div id="header" :style="style">
    </div>
    <div id="contents" :style="background">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleCard.vue",
  props: {
    title: String,
    logo: String,
    image: String,
    color: String,
  },
  computed: {
    style() {
      return 'background-image: url("' + this.image + '")'
    },
    background() {
      return 'background: ' + this.color
    }
  }
}
</script>

<style scoped>
#card {
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 15rem;
  border-radius: 3px;
  transition: ease 0.05s;
  overflow: hidden;
  user-select: none;
}

#card:hover, #card:focus {
  transform: scale(1.02);
  cursor: pointer;
}

#header {
  background-size: 100%;
  flex: 7rem;
  padding: 0.5rem 0.5rem 0;
  border-bottom: 3px solid #E5EFF1;
}

#contents {
  display: flex;
  flex: 8rem;
  padding: 0 0.5rem 0.5rem;
  justify-content: center;
}

#contents>span {
  align-self: flex-end;
  font-family: sans-serif;
  font-weight: bold;
  font-size: larger;
  color: #E5EFF1;
  padding-bottom: 0.5rem;
}

#logo {
  display: flex;
  position: absolute;
  width: 8rem;
  height: 8rem;
  padding: 3rem 2rem;
}

#logo-img {
  width: inherit;
}
</style>