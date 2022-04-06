<script>
import TodayInfo from './TodayInfo.vue'
import WeekList from './WeekList.vue'
import SearchBox from './SearchBox.vue'

export default {
  name: 'InfoSide',
  components: { TodayInfo, WeekList, SearchBox }
}
</script>

<template>
  <div class="info-side">
    <TodayInfo />

    <WeekList />

    <SearchBox />
  </div>
</template>

<style lang="scss" scoped>
.info-side {
  width: 450px;
  padding-top: 25px;
  height: 100%;
  box-sizing: border-box;
  position: relative;

  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    '. info info info info .'
    'weeklist weeklist weeklist weeklist weeklist weeklist'
    'weeklist weeklist weeklist weeklist weeklist weeklist'
    'weeklist weeklist weeklist weeklist weeklist weeklist'
    '. search search search search .'
    '. search search search search .';
}
</style>
