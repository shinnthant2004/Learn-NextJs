import { defineFilePath, extractData } from "./api/blogs/helpers";

interface IBlog {
  id:number;
  name:string;
  description:string;
}
interface IProps {
  blogs:IBlog[]
}

const Home = (props:IProps) => {
  const {blogs} = props;
  return (
    <div>
      {
        blogs.map((blog)=>{
          return (
            <div key={blog.id}>
              <p>{blog.name}</p>
              <p>{blog.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps(){
  // should not use fetch API when u want to use your own API inside next
  const filePath = defineFilePath();
  const data = await extractData(filePath);
  
  return {
    props:{
      blogs:data
    }
  }
}

export default Home