import { defineStore} from "pinia";
import {ref} from 'vue'
// 自定义存储数据
const counter = defineStore('counter', ()=>{
  // 定义响应式的数据
  const count = ref(0)
  // 定义加法
  function increment() {
    count.value++
  }
  // 定义减法
  function decrement() {
    if (count.value <= 0) return
    count.value--
  }
  // return出来，外面才能访问
  return {count,increment,decrement}
})

export default counter
