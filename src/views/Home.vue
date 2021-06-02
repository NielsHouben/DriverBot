<template>
  <div id="container">
    <Slider
      v-model="state.speed"
      :min="0"
      :max="2047"
      :step="1"
      :format="format"
      @update="publish"
    />
    <br>
    <br>
    <br>
    <Slider
      v-model="state.turn"
      :min="0"
      :max="180"
      :step="1"
      :format="format"
      @update="publish"
    />
    <br>
    <br>
    <input v-model="state.speed">
    <br>
    <input v-model="state.turn">
    <br>

    <br>
    <br>
    <br>
    <br>
    -------------------------------
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
//import Controlls from '@/components/Controller.vue'
import { reactive } from 'vue'
import mqtt from '../api/mqtt'
import Slider from '@vueform/slider'

export default {
  setup () {
    const state = reactive({
      user: {
        id: '123',
        adress: "niels.houben1@gmail.com/DriverBot"
      },
      speed: 1024,
      turn: 90
    })
    const mqttConnect = () => {
      mqtt.launch(state.user.id, (topic, source) => {
        console.log("message:", source, 'on topic:', topic)
        //console.log('things see to wrok')
      })
      //mqtt.subscribe({ 'ping': 1 });
      // setInterval(() => {
      //   mqtt.publish(state.user.adress + "/speed", parseInt(state.speed))
      //   mqtt.publish(state.user.adress + "/direction", parseInt(state.direction))
      // }, 1000)
    }
    mqttConnect()

    return {
      state,
    }
  },
  components: {
    Slider
  },
  methods: {
    publish () {
      let speed = this.state.speed
      let dir = speed < 1024 ? 'b' : 'f'
      if (speed < 1024) speed = Math.abs(speed - 1023)
      if (speed == 1024) speed = 0
      if (speed > 1024) speed = speed - 1024
      let message = `${"0".repeat(4 - speed.toString().length) + speed}${dir}${this.state.turn}`
      console.log(message)
      mqtt.publish("niels.houben1@gmail.com/DriverBot", message)
      //let speed = this.state.speed < 1024 ? this.state.speed - 1023 : this.state.speed
      //console.log(`${speed}${this.state.speed < 1024 ? 'b' : 'f'}`)
    },
    format (value) { return `${parseInt(value)}` }
  }

}
// export default {
//   components: { Slider, Controlls },
//   data: () => ({
//     power: 0,
//     value: 101,
//     direction: "ltr",
//   }),
//   methods: {
//     update (value) {
//       console.log(value)
//       if (value == 101) { this.power = 0 }
//       else this.power = value > 100 ? `${value - 100}` : `-${101 - value}`
//       if (value > 101) { this.direction = 'ltr' }
//       else if (value < 101) { this.direction = 'rtl' }
//     },
//     format () { return `${this.power}%` }
//   }
// }
</script>

<style >
#container {
  width: 75%;
  padding-top: 45px;
  margin: 0 auto;
}
</style>

<style src="@vueform/slider/themes/default.css"></style>