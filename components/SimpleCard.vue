<template>
  <NuxtLink id="link" :to="link">
    <div id="card" class="clickable-element">
      <div id="content">
        <img id="logo" :src="logo" alt="logo"/>
        <span id="title">{{ title }}</span>
      </div>
      <div id="buttongroup">
        <div class="button">Loting</div>
        <div class="button">Uitslagen</div>
        <div class="button">Info</div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default:"Default title" },
  logo:  { type: String, default:"/logo.png" },
  link:  { type: String, default:"/404"},
});
</script>

<style scoped lang="scss">
#link {
  text-decoration: none;
  color: var(--color);
}

#card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-color-dark);
  width: 100%;
}

#content {
  padding: 1rem 0 1rem;
}

#title {
  display: flex;
  font-size: x-large;
  width: 100%;
  margin: auto 0;
  justify-content: center;
  text-align: center;
}

#logo {
  display: flex;
  width: 6rem;
  height: 6rem;
}

@media only screen and (min-width: 768px) {
  #card {
    width: 20rem;
    height: 15rem;
    border-radius: var(--corner-radius);
  }

  #logo {
    width: 8rem;
    height: 8rem;
  }

  #buttongroup {
    display: flex;
    width: 100%;
    justify-content: space-around;

    :nth-child(-n+2) {
      border-right: var(--primary-color-x-dark) 2px solid;
    }
  }

  .button {
    width: 100%;
    padding: 0.7rem;
    text-align: center;
    border-top: var(--primary-color-x-dark) 2px solid;
  }

  .clickable-element {
    transition: ease 0.1s;

    &:hover, &:focus {
      transform: scale(1.03);
    }
  }
}
</style>