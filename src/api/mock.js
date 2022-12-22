import Mock from 'mockjs'

Mock.mock('/api/home/getData', function(){
  // 拦截到请求后到处理逻辑
  console.log("拦截到了")
})