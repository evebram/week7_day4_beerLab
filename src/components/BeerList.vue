<template lang="html">
  <div>

    <beer-item
    v-for="(beer, index) in beers"
    :key="index"
    :beer="beer"
    />

  </div>

</template>

<script>
import BeerItem from './BeerItem';
export default {
  name: 'beer-list',
  props: ['beers'],
  components:{
    'beer-item': BeerItem
  },

}
</script>

<style lang="css" scoped>
</style>
