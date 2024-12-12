export const uitls = {
  toaset(title = '数据加载失败', icon = 'none') {
    uni.showToast({
      title,
      icon,
      mask: true,
    })
  },
}

// 方便全局进行引用
uni.uitls = uitls
