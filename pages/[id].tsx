import path from "path"
import fs from "fs/promises"

import {IProduct} from "./index"

interface IProps {
    product: IProduct
} 

const ProductDetail = (props:IProps) => {
    const {product} = props
    return (
        <div>
            <p>{product.name}</p>
        </div>
    )
}

export async function getStaticPaths(params:any) {
    return {
        paths:[
            {
                params:{id:"1"}
            },
            {
                params:{id:"2"}
            },
            {
                params:{id:"3"}
            },
        ],
        fallback:false
    }
}  

export async function getStaticProps(context:any) {

    const filePath = path.join(process.cwd(),"data","products.json")
    const jsonData:any = await fs.readFile(filePath)
    const data = JSON.parse(jsonData);

    const {products} = data;
        
    if(!products) return {
        notFound:true
    }

    const {params:{id}} = context

    const product = products.find((item:any)=> +item.id === +id)
    
    return {
        props:{
            product
        }
    }
    
}

export default ProductDetail