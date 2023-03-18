import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import { ProductData } from '@/types'

export default ( ) => {
  return  useQuery<ProductData[]>({
    queryKey: ['products'],
    queryFn:  (): Promise<any>  => axios.get( "https://dummyjson.com/products"),
   
    
  })
}