<template>
  <div class="hello">
    <img src="../images/sy1544782158.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
 msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "华文行楷";
  font-weight: 800;
}
.hello img{
  width: 78%;
}
</style>
