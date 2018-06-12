<template>
  <div>
    <h3 class="title">{{ diaper.name }}</h3>
    <div class="product-list">
      <ul>
        <li class="input-group" >
          <ul class="size-list">
            <li v-for="(size, idx) in diaper.sizes" :key="idx" class="input-buy">
              <p>{{ size.size }}</p>
              <input type="number" name="" id="" class="form-control" min="0" :max="size.amount" v-model="value[idx]">
              <p>from</p>
              <input type="text"  class="form-control" name="" :value="value[idx]? size.amount - value[idx] : size.amount" disabled>
              <p>available</p>
              <button class="btn btn-success" @click="buyItem(diaper._id, diaper.name, idx, value[idx], size.size)" :disabled="!value[idx] || value[idx] <= 0">Buy</button>
            </li>
          </ul>
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
      diaper: '',
      value: [],
    }
  },
  methods: {
    updateDiaper: function(index, bought){
      console.log(this.diaper.sizes[index].amount);
      this.diaper.sizes[index].amount = this.diaper.sizes[index].amount - bought;
      console.log(this.diaper.sizes[index].amount);
    },
    buyItem: function(id, name, index, amount, size){
      const buyOrder = {
        diaperId : id,
        name,
        size, 
        amount,
        date: new Date(),
      }
      this.updateDiaper(index, amount);
      
      axios
      .post('http://localhost:3000/api/v1/buy', buyOrder)
      .then(res => this.$toaster.info('Bought!'));
      axios({
          method: 'put',
          url: 'http://localhost:3000/api/v1/diapers',
          data: this.diaper
          }).then(res => this.$toaster.success('Diaper Stock Updated'))
      this.value[index]= '';
    },
  },
   mounted: function(){
    const vm = this;
    axios.get(`http://localhost:3000/api/v1/diapers/${vm.$route.params.id}`).then(data => vm.diaper = data.data)
  }
}
</script>
<style scoped>
.title {
  margin: 40px;
}
.input-group {
  margin-bottom: 30px;
  display: flex;
  flex-flow: column nowrap;
}
.input-buy {
  display: inline-block;
}
ul {
  padding: 0;
}
.form-control {
  width: 5em;
  margin: 10px;
  text-align: center;
}
</style>


