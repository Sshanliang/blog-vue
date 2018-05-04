<template>

  <div>
    <el-header>
      <header-menu></header-menu>
    </el-header>
    <card></card>
    <carousel></carousel>
    <div class="container">
      <el-container>
        <el-main>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>

    </div>


  </div>
</template>

<script>
    import headerMenu from '../components/header'
    import card from '../components/card'
    import carousel from '../components/carousel'
export default {

    components: {
        headerMenu,
        card,
        carousel
    },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    margin: 0;
  }
  .container{
    width: 100%;
    padding: 0;
  }
  .el-header {
    box-shadow: 0 0 5px #ccc;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }


</style>
