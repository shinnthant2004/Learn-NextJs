import { NextApiRequest, NextApiResponse } from "next"
import fs from "fs/promises"
import path from "path"
import { extractData } from "./helpers";

const handler = async (request:NextApiRequest,response:NextApiResponse) => {
   const filePath = path.join(process.cwd(),"data","blogs.json");
   const fileData:any = await fs.readFile(filePath);     

  if(request.method === "GET"){
     const data = JSON.parse(fileData);          

     return response.status(200).json({
        message:"success",
        data,
     })
  }else if(request.method === "POST"){
    const {name,description} = request.body;
    const newBlog:any = {
      id:new Date().toISOString(),
      name,
      description
    }

   const data = JSON.parse(fileData); 

   data.push(newBlog)

   const writer = await fs.writeFile(filePath,JSON.stringify(data));
   return response.status(201).json({
      message:"success",
   })
  }
}

export default handler