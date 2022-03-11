<template>
  <div id="content">
    <slot/>
  </div>
  <div id="footer">
    Hoe Snel Was Ik: Footer
  </div>
</template>

<style scoped lang="scss">
#content {
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

}
</style>