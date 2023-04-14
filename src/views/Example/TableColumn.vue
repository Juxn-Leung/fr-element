<template>
  <div>             
    <el-table
      :border="false"
      :data="dataList"
      row-key="id"
      default-expand-all
    >
      <el-table-column
        v-for="(columnProps, index) in dataTableColumn"
        v-bind="columnProps"
        :key="index"
      />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, toRefs } from 'vue'
import { IAttributeListProps, IEventListProps, ISlotListProps } from './useExampleProps'

interface IColumnProps {
  prop: string
  label: string
  minWidth?:string
  width?:string
}

const props = defineProps({
  dataList: {
    type: Array as PropType<IAttributeListProps[] | IEventListProps[] | ISlotListProps[]>
  },
  dataTableColumn: {
    type: Array as PropType<IColumnProps[]>
  },
})

const { dataList, dataTableColumn } = toRefs(props)

</script>