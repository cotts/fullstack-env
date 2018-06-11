<template>
  <div class="menu">
      <router-link to="/diaper">
      <button class="btn btn-lisght">Create Diaper</button>
    </router-link>
    <router-link to="/list">
      <button class="btn btn-primary">List Diapers</button>
    </router-link>
    <router-link to="/buy">
      <button class="btn btn-success">Buy Diapers</button>
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

