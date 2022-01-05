<template>
  <div id="header">HOE SNEL WAS IK?</div>
  <div class="center-object">
    <SimpleCard
        logo="assets/wwk_logo.png"
        image="assets/materiaal.jpg"
        color="#347594"
    />
    <SimpleCard
        logo="assets/theta_logo.png"
        image="assets/vierx.jpg"
        color="#347594"
        title="ThetaRegatta"
    />
    <SimpleCard
        logo="assets/wwk_logo.png"
        image="assets/vierx2.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo=""
        image="assets/laga.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/theta_logo.png"
        image="assets/boot.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/logo.png"
        image="assets/acht.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/wwk_logo.png"
        image="assets/vierx2.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/wwk_logo.png"
        image="assets/materiaal.jpg"
        color="#347594"
    />
    <SimpleCard
        logo="assets/theta_logo.png"
        image="assets/vierx.jpg"
        color="#347594"
        title="ThetaRegatta"
    />
    <SimpleCard
        logo="assets/wwk_logo.png"
        image="assets/vierx2.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo=""
        image="assets/laga.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/theta_logo.png"
        image="assets/boot.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/logo.png"
        image="assets/acht.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/wwk_logo.png"
        image="assets/vierx2.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/wwk_logo.png"
        image="assets/materiaal.jpg"
        color="#347594"
    />
    <SimpleCard
        logo="assets/theta_logo.png"
        image="assets/vierx.jpg"
        color="#347594"
        title="ThetaRegatta"
    />
    <SimpleCard
        logo="assets/wwk_logo.png"
        image="assets/vierx2.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo=""
        image="assets/laga.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/theta_logo.png"
        image="assets/boot.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/logo.png"
        image="assets/acht.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
    <SimpleCard
        logo="assets/wwk_logo.png"
        image="assets/vierx2.jpg"
        color="#347594"
        title="WinterWedstrijden"
    />
  </div>
</template>

<script>
import RegattaCard from "./components/RegattaCard";
import SimpleCard from "./components/SimpleCard";
export default {
  layout: "normaal",
  components: {SimpleCard, RegattaCard},
  methods: {
    async getData() {
      console.log(await $fetch('https://www.hoesnelwasik.nl/api'));
    }
  }
}
</script>

<style>
body {
  background: #0C4159;
}
</style>

<style scoped>
.center-object {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
}

#header {
  display: flex;
  background: #347594;
  width: 100%;
  height: 4.5rem;
  margin: -8px 0 0 -8px;
  font-family: sans-serif;
  color: #E5EFF1;
  font-size: xxx-large;
  align-items: center;
  padding-left: 1rem;
}
</style>
