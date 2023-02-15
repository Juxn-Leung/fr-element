<template>
  <div class="fr-form-item">
    <slot
      v-if="useMode === 'form'"
    />
    <slot
      v-if="useMode === 'show'"
      name="show"
    >
      <p
        v-if="useMode === 'show'"
        class="fr-form-content"
      >
        {{ content || '-' }}
      </p>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, inject, toRefs, unref, computed } from 'vue'

const props = defineProps({
    content: {
        type: [String, Number],
    },
    mode: {
        type: String,
    }
})

const { content, mode } = toRefs(props)

const useMode = computed(() => {
    const injectMode = unref(inject('frFormItemType'))
    return mode?.value || injectMode || 'form'
})

</script>

<style lang="scss" scoped>
// @import '../../styles/var';
// .fr-form-item{
//   padding-left: 4px;
//   .fr-form-content{
//     font-size: $--font-size-base;
//     color: $--font-color-black;
//     margin-left: 10px;
//     display: flex;
//     align-items: center;
//   }
// }
</style>
