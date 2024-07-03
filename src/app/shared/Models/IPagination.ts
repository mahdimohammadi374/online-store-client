export interface IPagination<T> {
    pageIndex: number
    pageSize: number
    count: number
    result: T[]
  }
  
  export interface Result {
    id: number
    title: string
    price: number
    pictureUrl: string
    productTypeId: number
    productBrandId: number
    productBrand: string
    productType: string
    description: string
    isActive: boolean
    summary: string
  }