<template lang="html">
  <div>
    
    <p>{{beer.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'beer-item',
  props: [ 'beer' ]
}
</script>

<style lang="css" scoped>
</style>
