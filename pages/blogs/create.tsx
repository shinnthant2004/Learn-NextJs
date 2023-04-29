import { useRouter } from "next/router"
import { HTMLInputTypeAttribute, RefObject, useRef } from "react"

const CreateBlog = () => {
    const router = useRouter();

    const nameRef:RefObject<HTMLInputElement> = useRef(null)
    const descriptionRef:RefObject<HTMLInputElement> = useRef(null)

    const createHandler = () => {
        const name = nameRef?.current?.value;
        const description = descriptionRef?.current?.value;

        const blog = {
            name,
            description
        }

        fetch('/api/blogs/',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(blog)
        }).then((res)=>{
            router.push('/blogs')
        })
    }

    return (
        <div className="w-full my-8 flex justify-center items-center">
           <form onSubmit={(e)=>{
            e.preventDefault()
            createHandler()
           }} className="w-[300px]">
              <div>
                 <label className="block" htmlFor="name">Name</label>
                 <input ref={nameRef} className="w-full border border-gray-400 rounded-md my-3 p-3" type="text" id="name"/>
              </div>
              <div>
                 <label className="block" htmlFor="description">Description</label>
                 <input ref={descriptionRef} className="w-full border border-gray-400 rounded-md my-3 p-3" type="text" id="description"/>
              </div>
              <button type="submit" className="mt-3 bg-gray-300 font-[600] rounded-md p-3 w-full">Create</button>
           </form>
        </div>
    )
}

export default CreateBlog