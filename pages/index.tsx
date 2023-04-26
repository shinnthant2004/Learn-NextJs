import path from "path"
import { cwd } from "process"
import fs from "fs/promises"
import Link from "next/link";

export interface IProduct {
  id:number;
  name:string;
  description:string;
}

interface IProps {
  data: {
    products:IProduct[]
  }
}

const Home = (props:IProps) => {
  const {data:{products}} = props;  
  
  return (
    <div>
      {
       products && products.map((item:any,index:number)=>{
          return <Link style={{display:"block"}} href={`${item.id}`} key={index}>{item.name}</Link>
        })
      }
    </div>
  )
}

export default Home

export async function getStaticProps () {

  const filePath = path.join(process.cwd(),"data","products.json");
  
  const jsonData:any = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);
  
  return {
    props:{
      data,
    }
  }
}