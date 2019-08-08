<template lang="html">
  <div>
    <h1>Favourites</h1>
    <beer-list :beers="beers"/>
  </div>
</template>

<script>
import {eventBus} from '../main';
import BeerList from '@/components/BeerList';

export default {
  name: 'favourites',
  components:{
    'beer-list': BeerList
  },
  props: [ 'beers' ],
  mounted(){
    eventBus.$on('favouriteBeer', beer => this.beers.push(beer))
  }
}
</script>

<style lang="css" scoped>
</style>
