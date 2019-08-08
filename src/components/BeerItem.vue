<template lang="html">
  <div>
    <p @click="handleClick">
      {{beer.name}}
      <span v-if="isfavourite">✅</span>
    </p>
  </div>
</template>

<script>
import {eventBus} from '../main';

export default {
  name: 'beer-item',
  props: [ 'beer', 'isfav'],
  methods: {
    handleClick() {
      this.isfavourite = true;
      eventBus.$emit('favouriteBeer', this.beer);
    }
  }
}

</script>

<style lang="css" scoped>
p {
  cursor: pointer;
}
</style>
