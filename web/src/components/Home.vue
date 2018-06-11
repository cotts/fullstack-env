<template>
  <div class="menu">
      <router-link to="/diaper">
      <button class="btn btn-lisght btn-lg">Create Diaper</button>
    </router-link>
    <router-link to="/list">
      <button class="btn btn-primary btn-lg">List Diapers</button>
    </router-link>
    <router-link to="/buy">
      <button class="btn btn-success btn-lg">Buy Diapers</button>
    </router-link>
       <router-link to="/delete">
      <button class="btn btn-danger btn-lg">Delete Diapers</button>
    </router-link>
  </div>
</template>
<style scoped>
.menu {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
</style>

