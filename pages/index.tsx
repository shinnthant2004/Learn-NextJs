import path from "path"
import { cwd } from "process"
import fs from "fs/promises"

const Home = ({products}:any) => {
  return (
    <div>
      {
        products.map((item:any,index:number)=>{
          return <p key={index}>{item.name}</p>
        })
      }
    </div>
  )
}

export default Home

export async function getStaticProps () {

  const filePath = path.join(process.cwd(),"data","products.json");
  
  const jsonData:any = await fs.readFile(filePath);

  // console.log(data);
  const data = JSON.parse(jsonData);
  

  return {
    props:{
      products:data
    }
  }
}