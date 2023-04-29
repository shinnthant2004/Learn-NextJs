import { defineFilePath, extractData } from "../api/blogs/helpers"

interface IBlog {
    id:number;
    name:string;
    description:string;
}

interface IProps {
  blog: IBlog
  notFound:boolean
}

const BlogDetail = (props:IProps) => {
    const {blog,notFound} = props;

    if(notFound){
        return (
            <div>
               <p>No Blog Found</p>
            </div>
        )
    }else{
        return (
            <div>
               <p>{blog.name}</p>
               <p>{blog.description}</p>
            </div>
        )
    }
}

export async function getStaticPaths(){
    const filePath = defineFilePath()
    const data = await extractData(filePath);

    const params = data.map((blog)=>{
        return {
           params:{
             id:blog.id.toString()
           }
        }
    })
    
    return {
        paths:params,
        fallback:"blocking"
    }
}

export async function getStaticProps(context:any){    
    const {params:{id}} = context
    
    const filePath = defineFilePath()
    const data = await extractData(filePath);

    const blog = data.find((blog)=>{
        return blog.id == id
    })    

    if(!blog){
        return {
            props:{
                notFound:true
            }
        }
    }
    
    return {
        props:{
            blog,
        }
    }
}

export default BlogDetail