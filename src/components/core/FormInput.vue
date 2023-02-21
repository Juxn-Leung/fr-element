<template>
  <form-item
    :props="inputComponentProps"
  >
    <fr-form-item
      :mode="inputComponentProps?.mode"
      :content="modelValue"
    >
      <el-input
        autocomplete="new-password"
        :model-value="computedValue"
        v-bind="inputComponentProps?.inputProps"
        :maxlength="inputComponentProps?.maxlength || ''"
        :placeholder="computedPlaceholder"
        v-on="formInputEvents"
      />
    </fr-form-item>
  </form-item>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, PropType, toRefs, inject, computed, unref } from 'vue'
import { formContextKey } from 'element-plus'

interface IUseFormInputProps {
  label?: string
  prop: string
  mode?: 'form' | 'show'
  inputProps: any
  inputEvents: any
  colProps?: any
  formProps?: any
  maxlength?: string
}

const props = defineProps({
  props: {
    type: Object as PropType<IUseFormInputProps>,
    require: true
  },
  value: {
    type: [String, Number],
    require: true
  }
})

const elForm = toRefs(inject(formContextKey) as any)
const { props: inputComponentProps, value: modelValue } = toRefs(props)

const emits = defineEmits(['update:value'])

const inputEvents = inputComponentProps?.value && inputComponentProps.value.inputEvents && inputComponentProps.value.inputEvents.input

const modelValueInputHandle = (val: string) => {
  emits('update:value', val)
  if (typeof inputEvents === 'function') {
    inputEvents(val)
  }
}

const formInputEvents = {
  ...inputComponentProps?.value && inputComponentProps.value.inputEvents || {},
  input: modelValueInputHandle
}

const isDisabled = computed<boolean>(() => {
  const customDisabled = inputComponentProps?.value && inputComponentProps.value.inputProps && inputComponentProps.value.inputProps.disabled
  if (customDisabled === true || customDisabled === false) {
    return customDisabled
  }
  return elForm && elForm.disabled && unref(elForm.disabled) || false
})

const computedPlaceholder = computed(() => {
  const placeholder = inputComponentProps?.value && inputComponentProps.value.inputProps && inputComponentProps.value.inputProps.placeholder || ('请输入' + (inputComponentProps?.value && inputComponentProps.value.label || ''))
  return isDisabled.value ? '-' : placeholder
})

const computedValue = computed(() => {
  return modelValue?.value
})

</script>