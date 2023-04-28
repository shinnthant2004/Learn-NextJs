import path from "path";
import fs from "fs/promises"

export const defineFilePath = () => {
    const filePath = path.join(process.cwd(),"data","blogs.json");
    return filePath
}

export const extractData = async (filePath:string) => {
    const fileData:any = await fs.readFile(filePath);     
    const data = JSON.parse(fileData);   

    const blogObj = data.blogs;
        
    const formattedData = Object.keys(blogObj).map((item)=>{
        return {
            id: blogObj[item].id,
            name: blogObj[item].name,
            description: blogObj[item].description,
        }
    })    
    
    return formattedData
}