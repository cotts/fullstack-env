<template>
  <div>
    <h4>Available Diapers</h4>
    <div class="shopping-list">
      <ul class="size-list">
        <li v-for="(diaper, index) of list" class="list-group-menu" :key="index" v-show="diaper.available">
          <router-link :to="{ name: 'Product Buy', params: { id: diaper._id}}" class="product list-group-item list-group-item-action">
          <h5 class="input-group-item">{{ diaper.name }}</h5>
          <ul>
            <li v-for="(size, idx) in diaper.sizes" :key="idx" class="input-buy">
              <input type="text"  class="form-control" name="" v-model="size.amount" disabled>
              <p>available</p>
            </li>
          </ul>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data(){
    return {
      list: '',
      buy: [{
        id: '',
        size: '',
        amount: ''
      }]
    }
  },
  methods: {
    fetchData: function(){
      const vm = this;

      axios.get('http://127.0.0.1:3000/api/v1/diapers')
      .then(data => vm.list = data.data);
    },
    buyItem: function(item){
      console.log(item);
    }
  },
   mounted() {
    this.fetchData();
  }
}
</script>
<style scoped>
.size-list {
  padding: 0;
}
.product {
  display: inherit;
  flex-flow: inherit;
  align-items: inherit;
  justify-content: space-between;
  margin-bottom: 30px;
  max-width: 1200px;
}
.input-buy {
  display: inline-block;
}
.form-control {
  width: 5em;
  margin: 10px;
  text-align: center;
}

.shopping-list {
  margin-top: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
</style>


