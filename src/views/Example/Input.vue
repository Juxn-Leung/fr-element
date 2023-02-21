<template>
  <div class="p-12">
    <p class="text-2xl mb-8">
      基础用法
    </p>
    <div class="border rounded-md p-6 pb-0">
      <el-radio-group
        v-model="isChange"
        size="large"
        class="mb-8"
      >
        <el-radio-button label="form">
          表单模式
        </el-radio-button>
        <el-radio-button label="show">
          展示模式
        </el-radio-button>
      </el-radio-group>
      <el-form
        :model="dataInfo"
        label-width="100px"
      >
        <el-row :gutter="56">
          <form-input
            v-model:value="dataInfo.name"
            :props="{ label: '标签名称：', prop: 'name', mode: isChange }"
          />

          <form-input
            v-model:value="dataInfo.name"
            :props="{ prop: 'name', mode: isChange }"
          />
        </el-row>
      </el-form>
      <el-collapse>
        <el-collapse-item>
          <div
            v-highlight
            language="JavaScript"
          >
            <pre>
            <code>
              {{ preCode }}
            </code>
          </pre>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <Table
      :attribute-list="attributeList"
      :event-list="eventList"
      :method-list="methodList"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import Table from './Table.vue'
import { IAttributeListProps, IEventListProps, IMethodListProps } from './useExampleProps'

const isChange = ref('form')

const dataInfo = ref({
    name: ''
})

const preCode = ref(`
  <template>
    <el-form
      :model="dataInfo"
      label-width="100px"
    >
      <el-row :gutter="56">
        <form-input
          v-model:value="dataInfo.name"
          :props="{ label: '标签名称：', prop: 'name', mode: isChange }"
        />
      </el-row>
    </el-form>
  </template>
  <script lang="ts" setup>
    const dataInfo = ref({
        name: ""
    })
  </script` + `>`)

const attributeList = ref([
  {
    name: 'props',
    description: '',
    type: '',
    value: '',
    defaultValue: ''
  },
  {
    name: 'value',
    description: '',
    type: '',
    value: '',
    defaultValue: ''
  }
]) as Ref<IAttributeListProps[]>

const eventList = ref([
  {
    name: 'props',
    description: '',
    callback: '',
  }
]) as Ref<IEventListProps[]>

const methodList = ref([
  {
    name: 'props',
    description: '',
    parameter: '',
  }
]) as Ref<IMethodListProps[]>

</script>

<style lang="scss" scoped>
:deep(.el-collapse) {
  .el-collapse-item__content {
    padding-bottom: 0;
  }
  .el-collapse-item__header, 
  .el-collapse-item__wrap {
    border-bottom: none;
  }
}
</style>