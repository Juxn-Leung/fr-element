export interface IAttributeListProps {
  id: string
  name: string
  description: string
  type: string
  value: string
  defaultValue: string
}

export interface IEventListProps {
  id: string
  name: string
  description: string
  callback: string
}

export interface IMethodListProps {
  id: string
  name: string
  description: string
  parameter: string
}