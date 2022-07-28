<template>
  <span id="team-name">{{ teamname }}</span>
  <span id="back-number">{{ backnumber }}</span>
  <br />
  <span id="rower-name">{{ rower8 }}</span>
</template>

<script setup lang="ts">
defineProps<{
  teamname: string;
  backnumber: string;
  rower8: string;
}>();
</script>

<style scoped>
#team-name {
  font-size: 16px;
  font-weight: 300;
}

#rower-name {
  font-size: 14px;
  font-weight: 400;
}
</style>
