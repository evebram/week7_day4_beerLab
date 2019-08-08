<template>
  <div id="app">
    <nav>
      <router-link
      :to="{
        name: 'home',
        params: { beers: beersList }
      }">
      Home
    </router-link>

    <router-link
    :to="{
      name: 'favourites',
      params: { beers: favouritesList }
    }">
    Favourites
  </router-link>

    </nav>
    <router-view />
  </div>
</template>

<script>
import {eventBus} from './main';
export default {
  name: 'app',
  data(){
    return {
      beersList: [],
      favouritesList: []
    }
  },
  mounted(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    //.then(beers => console.log(beers));
    .then(beers => this.beersList = beers);
    // .then(beers => eventBus.$emit('BeersLoaded', beers));
    eventBus.$on('favouriteBeer', (beer) => {
      this.favouritesList.push(beer);
    })
    }
  }
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

<!-- QUESTIONS -->
<!-- passing data to routes? -->
<!-- data persistence across distant routes -->
<!-- where to make fetch requests -->
