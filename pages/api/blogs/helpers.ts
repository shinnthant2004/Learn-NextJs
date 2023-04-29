import path from "path";
import fs from "fs/promises"

export const defineFilePath = () => {
    const filePath = path.join(process.cwd(),"data","blogs.json");
    return filePath
}

export const extractData = async (filePath:string) => {
    const fileData:any = await fs.readFile(filePath);   
      
    const data = JSON.parse(fileData);   

        
    const formattedData = data.map((item:any)=>{
        return {
            id: item.id,
            name: item.name,
            description: item.description,
        }
    })    
    
    return formattedData
}