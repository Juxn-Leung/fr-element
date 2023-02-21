<template>
  <div v-if="attributeList && attributeList.length">
    <p class="text-2xl mt-24 mb-16">
      #属性
    </p>               
    <el-table
      :border="false"
      :align="`left`"
      :data="attributeList"
    >
      <el-table-column
        v-for="(attributeColumnProps, index) in attributeColumnPropsList"
        v-bind="attributeColumnProps"
        :key="index"
      />
    </el-table>
  </div>
  <div v-if="eventList && eventList.length">
    <p class="text-2xl mt-24 mb-16">
      #事件
    </p>               
    <el-table
      :border="false"
      :align="`left`"
      :data="eventList"
    >
      <el-table-column
        v-for="(eventColumnProps, index) in eventColumnPropsList"
        v-bind="eventColumnProps"
        :key="index"
      />
    </el-table>
  </div>
  <div v-if="methodList && methodList.length">
    <p class="text-2xl mt-24 mb-16">
      #方法
    </p>               
    <el-table
      :border="false"
      :align="`left`"
      :data="methodList"
    >
      <el-table-column
        v-for="(methodColumnProps, index) in methodColumnPropsList"
        v-bind="methodColumnProps"
        :key="index"
      />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, Ref, PropType, toRefs } from 'vue'
import { IAttributeListProps, IEventListProps, IMethodListProps } from './useExampleProps'

interface IColumnProps {
  prop: string
  label: string
  minWidth?:string
  width?:string
}

const props = defineProps({
  attributeList: {
    type: Array as PropType<IAttributeListProps[]>
  },
  eventList: {
    type: Array as PropType<IEventListProps[]>
  },
  methodList: {
    type: Array as PropType<IMethodListProps[]>
  },
})

const { attributeList, eventList, methodList } = toRefs(props)

const attributeColumnPropsList = ref([
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
]) as Ref<IColumnProps[]>


const eventColumnPropsList = ref([
  {
    prop: 'name',
    label: '事件名',
    minWidth:"120"
  },
  {
    prop: 'description',
    label: '说明',
    minWidth:"300"
  },
  {
    prop: 'callback',
    label: '回调参数',
    minWidth:"300"
  },
]) as Ref<IColumnProps[]>


const methodColumnPropsList = ref([
  {
    prop: 'name',
    label: '方法名',
    minWidth:"120"
  },
  {
    prop: 'description',
    label: '说明',
    minWidth:"300"
  },
  {
    prop: 'parameter',
    label: '参数',
    minWidth:"300"
  },
]) as Ref<IColumnProps[]>
</script>