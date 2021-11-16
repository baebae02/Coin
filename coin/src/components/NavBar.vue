<template>
  <div class="navBar">
     <a href="/">
         <img src='../assets/home.png'>
     </a>
     <a href="/search">
         <img src='../assets/search.png'>
     </a>
     <a href="/add">
         <img src='../assets/plus.png'>
     </a>
     <a href="/star">
         <img src='../assets/star.png'>
     </a>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
.navBar {
    width: 414px;
    height: 40px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 30px 30px 0px 0px;
    padding: 10px;
    bottom: 0;
}
img {
    width: 30px;
}
</style>