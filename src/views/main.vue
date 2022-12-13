<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <common-aside/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
  </div>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
export default {
  components: { CommonAside },
  data() {
    return {};
  },
};
</script>

<style>
</style>