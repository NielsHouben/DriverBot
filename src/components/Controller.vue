<template>
  <input
    type="range"
    id="slider"
  >
</template>

<script>
export default {

}
</script>

<style scoped>
#slider {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  padding: 5px;
  border-bottom: 3px solid black;
}

#slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 6vw;
  width: 4vw;
  background: rgb(84, 216, 31);
  border: 0.4vw solid black;
  border-radius: 10px;
}

#slider:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}
</style>