<template>
  <div :class="$style.xq_outer">
    <div :class="$style.xq_bg"></div>
    <div :class="$style.xq_women"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" module>
.xq_outer {
  position: relative;
  width: 600px;
  height: 360px;
  margin: 20px auto;
}
.xq_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/public/xq_bg.jpeg");
  background-size: 100% 100%;
}

// @property --r {
//   syntax: "<percentage>";
//   inherits: true;
//   initial-value: -5%;
// }

@property --angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: -10deg;
}

.xq_women {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/public/xq_women.jpeg");
  background-size: 100% 100%;
  // -webkit-mask-image: linear-gradient(to right, transparent 30%, #fff 44%);
  // -webkit-mask-image: linear-gradient(to right, transparent 48%, #fff 52%);
  // -webkit-mask-size: 210%;
  // -webkit-mask-position: left;
  // -webkit-mask-image: radial-gradient(
  //   circle,
  //   #fff calc(var(--r) - 5%),
  //   transparent calc(var(--r) + 5%)
  // );
  -webkit-mask-image: conic-gradient(
      #fff 0deg,
      #fff calc(var(--angle) - 10deg),
      transparent calc(var(--angle) + 10deg),
      transparent 360deg
    ),
    conic-gradient(transparent 350deg, #fff 360deg);
  z-index: -1;
}

// @keyframes circle {
//   to {
//     --r: 105%;
//   }
// }

@keyframes ang {
  to {
    --angle: 370deg;
  }
}
.xq_outer:is(:hover) .xq_women {
  // -webkit-mask-position: right;
  // transition: -webkit-mask-position 2s linear;
  animation: ang 2s linear forwards;
  z-index: 1;
}
</style>
