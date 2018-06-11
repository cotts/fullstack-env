<template>
  <div class="form-group">
    <h2>{{ title }}</h2>
    <label for="name">Name / Model</label>
    <input id="name" type="text" class="form-control" v-model="diaper.name">
    <label for="description"> Description </label>
    <textarea id="desription" class="form-control" cols="30" rows="5" v-model="diaper.description"></textarea>
    <div class="form-sizes">
      <h4 class="title">Sizes</h4>
    <div v-for="(size, index) in diaper.sizes" :key="index">
      <input type="text" name="" id="" class="form-control" v-model="size.size">
      <input type="number" name="" id="" class="form-control" v-model="size.amount">
      <button class="btn btn-danger btn-sm" @click="deleteSize(index)">X</button>
    </div>
    <button class="btn btn-info" @click="addSize">Add Size</button>
    </div>
    <button class="btn btn-success btn-lg btn-end" @click="goButton">{{ button }}</button>
  </div>

</template>
<script>
import axios from 'axios';

export default {
  data(){
    return{
      diaper : {
        name: '',
        description: '',
        sizes: [],
        available: true
      },
      title: '',
      button: ''
    }
  },
  methods: {
    addSize: function(){
      this.diaper.sizes.push({size: '', amount: ''})
    },
    deleteSize: function(index){
      console.log(index)
      this.diaper.sizes.splice(index, 1);
    },
    goButton: function(){
      if(this.$route.params.id){
        axios({
          method: 'put',
          url: 'http://localhost:3000/api/v1/diapers',
          data: this.diaper
          }).then(res => this.$toaster.info(res.statusText))
      }else{
         axios({
          method: 'post',
          url: 'http://localhost:3000/api/v1/diapers',
          data: this.diaper
          }).then(res => this.$toaster.info(res.statusText))
      }
    }
  },
  mounted: function(){
    const vm = this;
    if(vm.$route.params.id){
      axios.get(`http://localhost:3000/api/v1/diapers/${vm.$route.params.id}`).then(data => vm.diaper = data.data)
      vm.title = 'Edit Diaper';
      vm.button = 'Update';
    } else {
      vm.title = 'Create a new Diaper';
      vm.button = 'Insert Diaper'
    }

  }
}
</script>
<style scoped>
.form-group {
  text-align: center;
}
input,
textarea {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 500px;
}

.form-sizes .form-control {
  display: inline-block;
  width: 5em;
}

.form-sizes .title {
  padding: 10px;
}

.btn-end {
  margin: 40px;
}
</style>

