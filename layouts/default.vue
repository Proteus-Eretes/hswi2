<template>
  <div id="header">
    <div id="title">HOE SNEL WAS IK?</div>
    <div id="search">
      <span>Zoeken</span>
      <i class="material-icons">search</i>
    </div>
  </div>
  <div id="content">
    <slot />
  </div>
  <div id="footer">
    <span>Hoe Snel Was Ik Footer</span>
  </div>
</template>

<style scoped lang="scss">
#header {
  display: flex;
  align-items: center;
  background: var(--primary-color-dark);
  width: 100%;
  height: 3.5rem;
  position: fixed;
  top: 0;
  z-index: 1;
}

#title {
  font-size: xx-large;
  font-weight: bold;
  margin: 0 auto;
}

#search {
  display: none;
  position: absolute;
  background: var(--primary-color-xx-light);
  color: var(--grey-color-800);
  padding: 0.5rem;
  border-radius: var(--corner-radius);

  & > i {
    flex: 1;
    text-align: right;
  }
}

#content {
  padding: 3.5rem 0 0 0;
}

#footer {
  display: flex;
  background: var(--primary-color-dark);
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: center;
}

/* For desktop design */
@media only screen and (min-width: 768px) {
  #search {
    display: flex;
    width: 30rem;
    left: calc(50vw - 16rem);
  }

  #title {
    margin: 0 1rem;
  }
}
</style>
