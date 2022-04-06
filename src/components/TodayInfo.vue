<script>
export default {
  name: 'TodayInfo'
}
</script>

<template>
  <div class="today-info-container">
    <div class="today-info">
      <!-- percent -->
      <div class="info-box mb-1">
        <span class="title">降雨率</span>
        <span class="value">88</span>
      </div>
      <!-- humidity -->
      <div class="info-box mb-1">
        <span class="title">濕度</span>
        <span class="value">88</span>
      </div>
      <!-- wind -->
      <div class="info-box">
        <span class="title">風速</span>
        <span class="value">88</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.today-info-container {
  grid-area: info;
}
.today-info {
  padding: 16px;
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  .info-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.mb-1 {
  margin-bottom: 10px;
}
</style>
