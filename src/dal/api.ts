import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3004/'
})

export const basketApi = {
    getGoods(){
        return instance.get(`/goods`).then((data:any) => data.data)
    },
    getProducts(){
        return instance.get(`/basket`).then((data:any) => data.data)
    },
    addProduct(productName:string, amount:number){
        return instance.post(`/basket`, {productName, amount})
    }
}