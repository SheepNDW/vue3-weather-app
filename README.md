# 天氣盒子 App
![](https://i.imgur.com/9geuPiq.png)

## 專案簡介:

使用 OpenWeather API 開發的查詢即時天氣 App <br>
[線上 Demo 網址](https://sheepndw.github.io/vue3-weather-app/)

## 使用技術:

* 使用 Vue 3 搭配 Composition API
* 透過 Vue Cli 開發
* 使用 Pinia 進行狀態管理

### 專案中使用到的其他第三方套件:

* axios 請求工具
* dayjs 日期處理工具

## 開發時踩過的坑:

在 weatherStore 中使用 statusStore 的時候報了一個 getActive Pinia was called with no active Pinia 的錯。<br>
經過 google 後發現為引入方式的問題 [詳情請看此討埨](https://github.com/vuejs/pinia/discussions/806) <br>

解法懶人包：
1. 圖一情況有可能會出現上述錯誤

   ![](https://i.imgur.com/vnAFzDN.png)

2. 改成以圖二方式使用即可解決

   ![](https://i.imgur.com/VwnojPj.png)