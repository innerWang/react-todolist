# 一个简易的todo-list

· 包含组件todos(主要用于添加条目以及列表显示、状态取反、删除条目)以及filter(主要用于设置过滤器)




##### Tips
· 各组件有自己的reducer，可使用combineReducers生成用于createStore的reducer
· 可使用React的ref功能访问DOM元素(注意：非虚拟DOM)，具体为：当一个包含ref属性的组件完成装载过程时，会检查ref属性是否是一个函数，若是，则会调用这个函数，参数就是这个组件代表的DOM元素。但是直接访问DOM元素容易引起失控，可使用状态绑定的方法来获取元素的值
· React的props.children可以访问当前组件包裹住的子组件
· 对于动态数量的子组件，每个子组件都必须带上一个可以标示子组件的key属性，key的值唯一

##### 开发辅助工具（本demo暂未使用）
· Chrome扩展包
  1. React DevTools 可检视React组件的树形结构
  2. Redux DevTools 可检视Redux数据流，可将Store状态跳跃到任何一个历史状态
  3. React Perf 可以发现React组件渲染的性能问题
· redux-immutable-state-invariant 辅助包
  · 该包提供了一个Redux中间件，可让Redux在每次派发动作之后做一个检查，若reducer修改了参数state,则会报警提示。
·
