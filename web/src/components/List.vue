<template>
  <div class="list">
   <ul class="list-group">
     <li class="list-group-item list-group-item-action flex-column align-items-start"
      v-for="(diaper, id) of list"
      :key="id"
      v-show="diaper.doc.available">
       <router-link :to="{ name: 'Edit Diaper', params: { id: diaper.id}}">
       <h3>{{diaper.doc.name}}</h3>
       <h4>{{ diaper.doc.description }}</h4>
           <h5 class="list-title">
             Sizes
             </h5>
         <div class="list-sizes">
           <div v-for="(size, index) in diaper.doc.sizes" :key="index">
             <h5>{{ size.size }} <span class="badge badge-info"> {{ size.amount }}</span></h5>
           </div>
         </div>
       </router-link>
     </li>
   </ul>
   <p>
     </p>
  </div>
</template>
<script>
  import axios from 'axios';
export default {
  data(){
    return {
      list: ''
    }
  },
  methods: {
    fetchData: function(){
      const vm = this;
      axios.get('http://127.0.0.1:3000/api/v1/diapers')
      .then(data => vm.list = data.data);
      }
  },
  mounted(){
    this.fetchData();
  }
}
</script>
<style scoped>
.list-group-item {
  margin-bottom: 10px;
  border-radius: 10px;
}
.list-title {
  font-weight: bold;
  line-height: 2em;
  padding-top: 10px;
}
.list-sizes {
  margin: 30px auto;
  display: flex;
  width: 50%;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
</style>


