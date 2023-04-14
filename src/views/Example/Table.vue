<template>
  <div v-if="attributeList && attributeList.length">
    <p class="text-2xl mt-24 mb-16">
      #属性
    </p>               
    <TableColumn
      :data-list="attributeList"
      :data-table-column="attributeColumnPropsList"
    />
  </div>
  <div v-if="eventList && eventList.length">
    <p class="text-2xl mt-24 mb-16">
      #事件
    </p>               
    <TableColumn
      :data-list="eventList"
      :data-table-column="eventColumnPropsList"
    />
  </div>
  <div v-if="slotList && slotList.length">
    <p class="text-2xl mt-24 mb-16">
      #方法
    </p>               
    <TableColumn
      :data-list="slotList"
      :data-table-column="methodColumnPropsList"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, Ref, PropType, toRefs, h } from 'vue'
import { IAttributeListProps, IEventListProps, ISlotListProps } from './useExampleProps'
import TableColumn from './TableColumn.vue'

interface IchildrenProps {
  prop: string
  label: string
}

interface IColumnProps {
  prop: string
  label: string
  minWidth?:string
  width?:string
  children?:IchildrenProps[]
}

const props = defineProps({
  attributeList: {
    type: Array as PropType<IAttributeListProps[]>
  },
  eventList: {
    type: Array as PropType<IEventListProps[]>
  },
  slotList: {
    type: Array as PropType<ISlotListProps[]>
  },
})

const { attributeList, eventList, slotList } = toRefs(props)

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
    minWidth:"120"
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
  {
    prop: 'required',
    label: '必填',
    minWidth:"100",
    formatter: (row: IAttributeListProps) => {
      return h('span', {}, row.required ? '是' : '否')
    }
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