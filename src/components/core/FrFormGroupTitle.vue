<template>
  <p :class="['fr-form-group-title']">
    <i class="iconfont icon-icon_juxing" />
    <span
      v-if="required"
      class="required"
    >*</span>
    <span class="content">{{ title }}</span>
  </p>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  title: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false
  }
})
const { title, required } = toRefs(props)

</script>

<style lang="scss" scoped>
// @import '../../styles/var';
// .fr-form-group-title{
//   height: 22px;
//   position: relative;
//   margin-bottom: 16px;
//   font-weight: 700;
//   color: $--font-color-black;
//   display: flex;
//   align-items: center;
//   .iconfont {
//     font-size: 14px;
//     margin-right: 6px;
//     color: $--color-primary;
//     margin-left: -2px;
//   }
//   .content {
//     font-size: $--font-size-medium;
//     &::after {
//       content: '';
//       display: inline-block;
//       width: 0;
//       height: 100%;
//       vertical-align: middle;
//       margin-top: 3px;
//     }
//   }
//   .required{
//     color: $--color-red;
//     transform: translate(-3px, -3px);
//   }
// }
</style>
