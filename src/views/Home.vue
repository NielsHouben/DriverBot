<template>
  <div id="container">
    <Slider
      v-model="value"
      :min="0"
      :max="201"
      :step="1"
      :direction="direction"
      :format="format"
      @update="update"
    />
    <br>
    <br>
    <input v-model="value">
    <br>
    <input v-model="direction">

    <br>
    <br>
    <br>
    <br>
    -------------------------------
    <br>
    <br>
    <br>
    <br>
    <Controlls></Controlls>
  </div>
</template>

<script>
import Slider from '@vueform/slider'
import Controlls from '@/components/Controller.vue'

export default {
  components: { Slider, Controlls },
  data: () => ({
    power: 0,
    value: 101,
    direction: "ltr",
  }),
  methods: {
    update (value) {
      console.log(value)
      if (value == 101) { this.power = 0 }
      else this.power = value > 100 ? `${value - 100}` : `-${101 - value}`
      if (value > 101) { this.direction = 'ltr' }
      else if (value < 101) { this.direction = 'rtl' }
    },
    format () { return `${this.power}%` }
  }
}
</script>

<style >
#container {
  width: 75%;
  padding-top: 45px;
  margin: 0 auto;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>