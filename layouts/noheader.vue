<template>
  <div id="content">
    <slot />
  </div>
  <div id="footer">
    <span>Hoe Snel Was Ik Footer</span>
  </div>
</template>

<style scoped lang="scss">
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
}
</style>
