<template>
  <div>
    <div id="header">
      <span id="title">HOE SNEL WAS IK?</span>
      <div id="search">
        <span>Zoeken</span>
        <i class="material-icons">search</i>
      </div>
    </div>
    <div id="content">
      <slot/>
    </div>
    <div id="footer">
      Hoe Snel Was Ik: Footer
    </div>
  </div>
</template>

<style scoped lang="scss">
#header {
  display: flex;
  background: var(--primary-color-dark);
  width: 100%;
  height: 3.5rem;
  align-items: center;
  position: fixed;
  top: 0;
}

#title {
  font-size: xx-large;
  font-weight: 600;
  width: 100%;
  text-align: center;
}

#search {
  display: none;
  flex: 1;
  background: var(--primary-color-xx-light);
  color: var(--grey-color-800);
  padding: 0.5rem;
  border-radius: var(--corner-radius);
  position: absolute;

  &>i {
    flex: 1;
    text-align: right;
    white-space: nowrap
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
}


/* For desktop design */
@media only screen and (min-width: 768px) {
  #title {
    font-size: xx-large;
    font-weight: bold;
  }

  #search {
    display: flex;
    width: 30rem;
    right: calc(50vw - 15rem);
  }
}
</style>