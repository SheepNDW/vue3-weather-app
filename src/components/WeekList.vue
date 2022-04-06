<script>
export default {
  name: 'WeekList'
}
</script>

<template>
  <div class="week-container">
    <ul class="week-list">
      <li class="active">
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
        <span class="day-name">週四</span>
        <span class="day-temp">25°C</span>
      </li>
      <li>
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
                style="clip-path: url(#SVGID_2_); fill: #c88c32"
                d="M15.762,9.903c-0.398-0.261-0.618-0.588-0.618-0.921
               c0-0.334,0.22-0.661,0.617-0.921l2.024-1.321c0.177-0.116,0.257-0.337,0.193-0.539c-0.063-0.203-0.248-0.341-0.465-0.334
               l-2.51,0.065c-0.486,0-0.864-0.158-1.062-0.446c-0.186-0.267-0.202-0.639-0.05-1.049l0.821-2.201
               c0.074-0.196,0.01-0.418-0.157-0.544c-0.166-0.127-0.396-0.129-0.565-0.005l-1.944,1.426c-0.779,0.571-1.623,0.321-1.899-0.574
               L9.453,0.298C9.33-0.1,8.67-0.1,8.547,0.298L7.855,2.539C7.577,3.435,6.732,3.685,5.954,3.114L4.01,1.687
               c-0.169-0.124-0.4-0.122-0.566,0.005C3.277,1.818,3.213,2.04,3.287,2.236l0.821,2.201c0.153,0.41,0.135,0.782-0.049,1.049
               C3.86,5.774,3.484,5.932,2.942,5.932H2.938L0.486,5.867C0.271,5.861,0.085,5.999,0.021,6.201C-0.042,6.403,0.038,6.624,0.215,6.74
               l2.023,1.321c0.398,0.26,0.618,0.587,0.618,0.921c0,0.333-0.22,0.661-0.618,0.921l-2.023,1.32
               c-0.177,0.116-0.257,0.337-0.194,0.539c0.064,0.203,0.249,0.32,0.465,0.334l2.51-0.064c0.486,0,0.863,0.157,1.063,0.444
               c0.184,0.269,0.202,0.641,0.049,1.051l-0.821,2.2c-0.074,0.196-0.01,0.419,0.157,0.545c0.166,0.127,0.397,0.129,0.566,0.004
               l1.944-1.426c0.78-0.571,1.624-0.319,1.901,0.574l0.692,2.241C8.609,17.865,8.792,18,9,18s0.391-0.135,0.453-0.334l0.693-2.241
               c0.276-0.895,1.12-1.144,1.899-0.574l1.944,1.426c0.086,0.063,0.2,0.098,0.289,0.092c0.262-0.004,0.482-0.208,0.482-0.475
               c0-0.104-0.034-0.201-0.092-0.28l-0.778-2.086c-0.152-0.41-0.136-0.782,0.05-1.051c0.198-0.286,0.576-0.453,1.12-0.443l2.452,0.063
               c0.217-0.013,0.401-0.131,0.465-0.334c0.063-0.202-0.017-0.423-0.193-0.539L15.762,9.903z M9,12.5c-1.93,0-3.5-1.57-3.5-3.5
               c0-1.93,1.57-3.5,3.5-3.5c1.93,0,3.5,1.57,3.5,3.5C12.5,10.93,10.93,12.5,9,12.5"
              />
            </g>
          </svg>
        </span>
        <span class="day-name">週五</span>
        <span class="day-temp">25°C</span>
      </li>
      <li>
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
                  fill: #dddcdc;
                "
                d="M15,11
               c-0.018,0-0.033,0.005-0.05,0.005C14.708,9.309,13.263,8,11.5,8C9.567,8,8,9.567,8,11.5C8,11.776,7.776,12,7.5,12S7,11.776,7,11.5
               c0-0.495,0.1-0.962,0.248-1.408C7.007,10.036,6.759,10,6.5,10C4.567,10,3,11.567,3,13.5S4.567,17,6.5,17H15c1.656,0,3-1.343,3-3
               S16.656,11,15,11"
              />
              <path
                style="
                  clip-path: url(#SVGID_2_);
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                  fill: #dddcdc;
                "
                d="M7.771,9
               c0.809-1.202,2.175-2,3.729-2c0.743,0,1.449,0.189,2.074,0.52c0.265-0.448,0.426-0.963,0.426-1.52c0-1.657-1.342-3-3-3
               c-0.273,0-0.533,0.048-0.785,0.117C9.677,1.873,8.441,1,7,1C5.559,1,4.324,1.873,3.787,3.118C3.535,3.048,3.273,3,3,3
               C1.342,3,0,4.342,0,6c0,1.656,1.343,3,3,3H7.771z"
              />
            </g></svg
        ></span>
        <span class="day-name">週六</span>
        <span class="day-temp">25°C</span>
      </li>
      <li>
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
                  fill: #dddcdc;
                "
                d="M14.5,11
               c-0.213,0-0.42,0.026-0.622,0.062C13.454,9.308,11.884,8,10,8c-2.209,0-4,1.791-4,4c0,0.276-0.224,0.5-0.5,0.5S5,12.276,5,12
               c0-0.622,0.128-1.212,0.337-1.762C4.918,10.089,4.47,10,4,10c-2.209,0-4,1.791-4,4s1.791,4,4,4h10.5c1.933,0,3.5-1.567,3.5-3.5
               S16.433,11,14.5,11"
              />
              <path
                style="clip-path: url(#SVGID_2_); fill: #c88c32"
                d="M3.879,8.382l1.939,0.226C5.975,8.63,6.102,8.682,6.219,8.74
               c0.447-0.518,1-0.939,1.622-1.239C7.778,7.181,7.755,6.85,7.804,6.509c0.234-1.636,1.758-2.777,3.396-2.544
               c1.639,0.234,2.777,1.756,2.543,3.393c-0.052,0.36-0.174,0.691-0.337,0.994c0.476,0.447,0.868,0.985,1.143,1.6
               c0.156-0.043,0.343-0.051,0.56-0.016l1.882,0.318c0.168,0.015,0.323-0.058,0.395-0.206c0.07-0.148,0.034-0.327-0.09-0.436
               l-1.412-1.24c-0.278-0.244-0.411-0.52-0.374-0.777c0.037-0.257,0.241-0.485,0.577-0.641l1.702-0.795
               c0.149-0.07,0.234-0.231,0.208-0.394c-0.027-0.163-0.153-0.289-0.32-0.308l-1.94-0.226c-0.374-0.053-0.647-0.216-0.769-0.46
               c-0.114-0.227-0.087-0.515,0.077-0.814l0.874-1.603c0.079-0.143,0.053-0.321-0.062-0.437c-0.112-0.115-0.29-0.142-0.434-0.065
               l-1.654,0.883c-0.66,0.354-1.285,0.069-1.399-0.65l-0.288-1.802c-0.051-0.32-0.558-0.393-0.696-0.099l-0.779,1.648
               c-0.312,0.659-0.99,0.759-1.527,0.234l-1.34-1.312C7.621,0.641,7.442,0.617,7.301,0.696c-0.143,0.08-0.218,0.243-0.182,0.402
               L7.51,2.882C7.583,3.215,7.528,3.5,7.357,3.685c-0.185,0.2-0.493,0.28-0.91,0.22H6.444l-1.879-0.32
               C4.4,3.557,4.241,3.642,4.17,3.792C4.1,3.94,4.137,4.119,4.26,4.228l1.412,1.24c0.277,0.244,0.409,0.52,0.373,0.777
               C6.009,6.501,5.804,6.729,5.469,6.885L3.767,7.68c-0.15,0.07-0.235,0.231-0.209,0.393C3.585,8.236,3.714,8.348,3.879,8.382"
              />
            </g></svg
        ></span>
        <span class="day-name">週日</span>
        <span class="day-temp">25°C</span>
      </li>
      <li>
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
                  fill: #dddcdc;
                "
                d="M15,11
               c-0.018,0-0.033,0.005-0.05,0.005C14.708,9.309,13.263,8,11.5,8C9.567,8,8,9.567,8,11.5C8,11.776,7.776,12,7.5,12S7,11.776,7,11.5
               c0-0.495,0.1-0.962,0.248-1.408C7.007,10.036,6.759,10,6.5,10C4.567,10,3,11.567,3,13.5S4.567,17,6.5,17H15c1.656,0,3-1.343,3-3
               S16.656,11,15,11"
              />
              <path
                style="
                  clip-path: url(#SVGID_2_);
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                  fill: #dddcdc;
                "
                d="M7.771,9
               c0.809-1.202,2.175-2,3.729-2c0.743,0,1.449,0.189,2.074,0.52c0.265-0.448,0.426-0.963,0.426-1.52c0-1.657-1.342-3-3-3
               c-0.273,0-0.533,0.048-0.785,0.117C9.677,1.873,8.441,1,7,1C5.559,1,4.324,1.873,3.787,3.118C3.535,3.048,3.273,3,3,3
               C1.342,3,0,4.342,0,6c0,1.656,1.343,3,3,3H7.771z"
              />
            </g></svg
        ></span>
        <span class="day-name">週一</span>
        <span class="day-temp">25°C</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.week-container {
  grid-area: weeklist;
}
.week-list {
  margin: 10px 35px;
  border-radius: 10px;
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.4);

  display: flex;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: 15px;
    cursor: pointer;
    border-radius: 10px;
    text-align: center;
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
      background-color: #fff;
      color: #222831;
    }

    span {
      display: block;
    }
  }

  .day-name {
    margin-top: 10px;
    text-align: center;
  }
  .day-temp {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
}

.active {
  background-color: #fff;
  color: #222831;
}
</style>
