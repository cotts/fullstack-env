<template>
  <ul class="list">
    <li v-for="(diaper, index) of list" :key="index" class="list-view">
      <h5>{{ diaper.name }}</h5>
      <toggle-button
        class="list-button"
        v-model="diaper.available"
        :labels="{ checked: 'Available', unchecked: 'Unavailable' }"
        :color="{checked: 'green', unchecked: 'red'}"
        :height="30"
        :width="100"
        @change="toggleAvailable(diaper)"
        ></toggle-button>
    </li>
  </ul>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {
      list : '',

    }
  },
  methods: {
    fetchData: function(){
      const vm = this;
      axios.get('http://127.0.0.1:3000/api/v1/diapers')
      .then(data => vm.list = data.data);
    },
    toggleAvailable: function(object){
      console.log(object);
       axios({
          method: 'delete',
          url: 'http://localhost:3000/api/v1/diapers',
          data: object
          });
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>
<style scoped>
.list {
  padding-top: 60px;
  width: 500px;
  margin: 0 auto;
}
.list-view {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 20px;
}
.list-button {
  float: right;
  /* line-height: ; */
}
</style>


