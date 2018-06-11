<template>
  <div class="list">
    <div v-for="(diaper, index) of list" :key="index">
      <p> {{ diaper.doc.name }} </p>
      <toggle-button
        v-model="diaper.doc.available"
        :labels="{ checked: 'Available', unchecked: 'Unavailable' }"
        :color="{checked: 'green', unchecked: 'red'}"
        :width="100"
        @change="toggleAvailable(diaper.doc)"
        ></toggle-button>
    </div>
  </div>
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

