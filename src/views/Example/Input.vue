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

    <p class="text-2xl mt-12 mb-8">
      属性
    </p>
    <el-table
      :border="false"
      :align="`left`"
      :data="list"
    >
      <el-table-column
        v-for="(columnProps, index) in columnPropsList"
        v-bind="columnProps"
        :key="index"
      />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'

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

const list = ref([
  {
    name: 'props',
    description: '',
    type: '',
    value: '',
    defaultValue: ''
  }
])

const columnPropsList = ref([
  {
    prop: 'name',
    label: '属性名',
    minWidth:"120"
  },
  {
    prop: 'description',
    label: '说明',
    minWidth:"300"
  },
  {
    prop: 'type',
    label: '类型',
    minWidth:"100"
  },
  {
    prop: 'value',
    label: '可选值',
    minWidth:"100"
  },
  {
    prop: 'defaultValue',
    label: '默认值',
    minWidth:"100"
  },
]) as Ref<any[]>

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