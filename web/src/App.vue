<template>
  <div id="app" class="container-fluid">
    <h1 class="app-title">Diaper Manager</h1>
   <router-view />
   <button class="btn btn-dark btn-back" @click="goBack">Back</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
    goBack: function() {
        this.$router.go(-1);
      },
  }
}
</script>
<style>
* {
  font-family: 'Lato', sans-serif;
}
html,
.container-fluid {
  background-color: #f2f7fd;
  text-align: center;
}

li {
  list-style-type: none;
}

a,
a:active,
a:hover,
a:visited,
.router-link {
  text-decoration: none;
  color: inherit;
}

.app-title {
  padding: 30px;
}
.btn-back {
  float: right;
  margin: 50px;
}
</style>
