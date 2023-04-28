import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs/promises"
import path from "path"

const handler = async (request:NextApiRequest,response:NextApiResponse) => {
  if(request.method === "GET"){
     const filePath = path.join(process.cwd(),"data","blogs.json");
     const fileData:any = await fs.readFile(filePath);     
     const data = JSON.parse(fileData);     

     console.log(data,"data");
     

     return response.status(200).json({
        message:"success",
        data,
     })
  }
}

export default handler