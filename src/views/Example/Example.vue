<template>
  <div class="flex">
    <el-menu
      default-active="1"
      class="el-menu-vertical"
    >
      <template
        v-for="(item, index) in menuList"
        :key="index"
      >
        <el-menu-item
          :index="String(index)"
          @click="handleChange"
        >
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <component
      :is="component.component"
      :key="component.component"
      class="flex-1"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Input from './Input.vue'
import Select from './Select.vue'

const menuList = ref([
  {
    name: 'form-group-title',
    component: Select
  },
  {
    name: 'form-input',
    component: Input
  },
  {
    name: 'form-select',
    component: Select
  },
])

const component = ref({
  component: Input,
})

const handleChange = (event: any) => {
  component.value.component = menuList.value[event.index].component
}

</script>

<style scoped lang="scss">
.el-menu-vertical {
  width: 180px;
}
</style>