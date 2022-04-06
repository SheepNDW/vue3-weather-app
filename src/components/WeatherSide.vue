<script>
export default {
  name: 'WeatherSide'
}
</script>

<template>
  <div class="weather-side">
    <div class="gradient"></div>
    <div class="date-container">
      <h2 class="day-name">週四</h2>
      <span class="date">2021/10/14</span>
      <span class="location">Taipei</span>
    </div>

    <div class="weather-container">
      <!-- icon -->
      <span
        ><svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 18 18"
          style="enable-background: new 0 0 18 18"
          xml:space="preserve"
        >
          <g>
            <defs>
              <rect id="SVGID_1_" width="18" height="18" />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlink:href="#SVGID_1_" style="overflow: visible" />
            </clipPath>
            <path
              style="
                clip-path: url(#SVGID_2_);
                fill-rule: evenodd;
                clip-rule: evenodd;
                fill: #bebdbd;
              "
              d="M14.5,4
           c-0.213,0-0.42,0.026-0.622,0.062C13.454,2.308,11.884,1,10,1C7.791,1,6,2.791,6,5c0,0.276-0.224,0.5-0.5,0.5S5,5.276,5,5
           c0-0.622,0.128-1.212,0.337-1.762C4.918,3.089,4.47,3,4,3C1.791,3,0,4.791,0,7s1.791,4,4,4h10.5c1.933,0,3.5-1.567,3.5-3.5
           C18,5.567,16.433,4,14.5,4"
            />
            <path
              style="
                clip-path: url(#SVGID_2_);
                fill-rule: evenodd;
                clip-rule: evenodd;
                fill: #00697d;
              "
              d="M10,15.8c0,0.664-0.447,1.2-1,1.2
           c-0.553,0-1-0.536-1-1.2C8,15.137,9,13,9,13S10,15.137,10,15.8"
            />
            <path
              style="
                clip-path: url(#SVGID_2_);
                fill-rule: evenodd;
                clip-rule: evenodd;
                fill: #00697d;
              "
              d="M6,15.8C6,16.464,5.553,17,5,17
           s-1-0.536-1-1.2C4,15.137,5,13,5,13S6,15.137,6,15.8"
            />
            <path
              style="
                clip-path: url(#SVGID_2_);
                fill-rule: evenodd;
                clip-rule: evenodd;
                fill: #00697d;
              "
              d="M14,15.8c0,0.664-0.447,1.2-1,1.2
           s-1-0.536-1-1.2c0-0.663,1-2.8,1-2.8S14,15.137,14,15.8"
            />
          </g></svg
      ></span>
      <div class="weather-temp">25°C</div>
      <div class="weather-desc">雨天</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//--- left part start ---
.weather-side {
  position: relative;
  width: 300px;
  height: 100%;
  border-radius: 25px 0 0 25px;
  box-shadow: 0 0 35px -10px rgba(0, 0, 0, 0.2);
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: $colorGradient;
  border-radius: 25px 0 0 25px;
  opacity: 0.8;
}

.date-container {
  position: absolute;
  top: 25px;
  left: 25px;

  .date {
    display: block;
    margin-top: 4px;
  }

  .location {
    display: block;
    margin-top: 4px;
  }
}

.weather-container {
  position: absolute;
  bottom: 25px;
  left: 25px;

  #Layer_1 {
    transform: scale(0.7);
  }
  .weather-temp {
    font-size: 4em;
    font-weight: bold;
  }
  .weather-desc {
    font-size: 20px;
  }
}
//--- left part end ---
</style>
