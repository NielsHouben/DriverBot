<template>
  <div>
    <Slider
      v-model="value"
      min="0"
      max="201"
    />
  </div>
</template>

<script>
import Slider from '@vueform/slider'

export default {
  components: {
    Slider,
  },
  data () {
    return {
      value: 100
    }
  }
}
</script>

<style src="@vueform/slider/themes/default.css"></style>