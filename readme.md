## 安装

npm install pdt-mini-ui

## 使用

1，es 目录里是放 component
// import xxComponent from "/pdt-mini-ui/es/xxComponent"
2, utils 里现在一个自动埋点，一个表单验证

## 初始化埋点功能示例

```js
const sa = require('./utils/autotrack.js')
sa.setPara({
  server_url: '${commonApi}/capture',
  show_log: false,
  isAuto: true, //关闭全局点击埋点
})
sa.init()
App({
  onLaunch() {
    this.sensors = sa
  },
})
```

## 埋点功能使用

##### 自动埋点

```js
<view data-saParam='{{param}}' data-name='test-name' data-value='test-value' data-title='test-title' data-saClose='{{false}}'></view>
 @param { Object } saParam  传入多个参数 (可选)
 @param { String } name     标识元素名称 (可选)
 @param { String } value    标识元素具体值 (可选)
 @param { String } title    标识元素标题 (可选)
@param { Boolean } saClose 默认false (可选)
##### 自定义埋点Api调用示例
 <view data-saClose='{{true}}'></view>
 `getApp().sensors.track('$MPClick', {
      analysis: {
        title: "手机号码",
        name: "contactPhone",
        value: "13660613878"
      }
  });`
```
