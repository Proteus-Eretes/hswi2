<template>
  <div>
    <div id="header">
      <span id="title">HOE SNEL WAS IK?</span>
      <div id="search">Zoeken</div>
      <!--<img id="settings" src="../assets/settings_black_24dp.svg" alt="settings"/>-->
    </div>
    <div id="content">
      <slot/>
    </div>
  </div>
</template>

<style>
#header {
  display: flex;
  background: var(--primary-color-dark);
  height: 5rem;
  align-items: center;
  padding: 0 1rem;
}

#title {
  font-size: xxx-large;
}

#search {
  background: var(--primary-color-light);
  width: 30rem;
  padding: 0.7rem;
  border-radius: var(--corner-radius);
  position: absolute;
  right: calc(50vw - 15rem);
}

#settings {
  transform: scale(2);
}

#content {
  height:  calc(100vh - 5rem);
  overflow-y: scroll;
}
</style>