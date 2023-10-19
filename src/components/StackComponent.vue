<template>
  <div class="container">
    <div class="item item1">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</template>
<style scoped>
.container {
  height: 500px;
  width: 800px;
  border: 3px solid red;
  display: flex;
  flex-direction: column;
}
.item {
  border: 5px solid green;
  background-color: lightblue;
  color: black;
  font-size: 50px;
  text-align: center;
}

/* .item1 {
  flex-grow: 1;
} */
</style>
