export interface IAttributeListProps {
  id: number
  name: string
  description: string
  type: string
  value: string
  defaultValue: string
  required: boolean
  hasChildren?: boolean
  children?: IAttributeListProps[]
}

export interface IEventListProps {
  id: string
  name: string
  description: string
  callback: string
}

export interface ISlotListProps {
  id: string
  name: string
  description: string
  parameter: string
}