<template>
  <el-col v-bind="colProps">
    <el-form-item
      :ref="el => formItemRef = el"
      :label="itemProps?.label"
      :label-width="!itemProps?.label && '0px'"
      :prop="itemProps?.prop"
      v-bind="formatedFormProps"
    >
      <slot />
    </el-form-item>
  </el-col>
</template>

<script lang="ts" setup>
// 表单通用组件 1. 支持栅格 2. 支持el-form-item 用来统一表单风格
import { defineProps, PropType, toRefs, ref, watchEffect, watch, Ref, inject, unref, computed } from 'vue'

interface IUseFormColProps {
  span: number
}

interface IUseFormProps {
  rules: unknown
}

interface IUseFormItemProps {
  label?: string
  mode?: 'form' | 'show'
  prop: string
  colProps?: IUseFormColProps
  formProps?: IUseFormProps
  required?: boolean
}

const props = defineProps({
    props: {
        type: Object as PropType<IUseFormItemProps>,
        require: true
    }
})

const { props: itemProps } = toRefs(props)

const colProps = computed(() => itemProps?.value?.colProps || { span: 12 })

const formatedFormProps = ref({
}) as Ref<any>

const type = inject('frFormItemType')

const resetFormProps = () => {
    const injectFormType = unref(type)
    if (!itemProps?.value) return
    // 如果 required 为 true 并且模式不为 show 时，给 rules 添加 required
    if (itemProps.value.required && (!itemProps.value.mode || itemProps.value.mode !== 'show') && injectFormType !== 'show') {
        const requiredRule = {
            required: true, message: '此项为必填'
        }
        // 如果存在 rules 则加入 requiredRule
        if (itemProps.value.formProps && itemProps.value.formProps.rules) {
            // 数组的情况
            if (Array.isArray(itemProps.value.formProps.rules)) {
                formatedFormProps.value.rules = [...itemProps.value.formProps.rules, requiredRule]
            } else {
                // 对象的情况
                formatedFormProps.value.rules = [itemProps.value.formProps.rules, requiredRule]
            }
        } else {
            // 不存在的话 则直接添加一个数组
            formatedFormProps.value.rules = [requiredRule]
        }
    } else {
    // 如果存在 formProps 需要赋值给 formatedFormProps
        if (!itemProps.value || !itemProps.value.formProps) return
        if (itemProps.value.formProps.rules) {
            const isShowMode = (itemProps.value.mode && itemProps.value.mode === 'show') || (injectFormType === 'show')
            // 如果不是展示模式需要将 rules 给 formatedFormProps，如果是展示模式则不需要校验
            if (!isShowMode) {
                formatedFormProps.value.rules = itemProps.value.formProps.rules
            }
        }
    }
}

watchEffect(resetFormProps)

watch([
    () => itemProps?.value && itemProps.value.required,
    () => itemProps?.value && itemProps.value.mode
], resetFormProps)

const formItemRef = ref()
</script>
