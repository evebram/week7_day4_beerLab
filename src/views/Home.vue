<template lang="html">
  <div>
    <h1>Home</h1>
    <beer-list :beers="beers"/>
  </div>
</template>

<script>
import {eventBus} from '../main';
import BeerList from '@/components/BeerList';

export default {
  name: 'home',
  components:{
    'beer-list': BeerList
  },
  data() {
    return {
      beers: []
    }
  },
  mounted(){
    eventBus.$on('BeersLoaded', beers => this.beers = beers)
  }
}
</script>

<style lang="css" scoped>
</style>
