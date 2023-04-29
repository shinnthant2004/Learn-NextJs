import { useRouter } from "next/router"
import { Fragment } from "react"

interface IProps {
    children: JSX.Element
}

const Layout = (props:IProps) => {
    const router = useRouter()
    return (
       <Fragment>
        <div className="w-screen h-screen">
            <div>
                <nav className="w-full p-4 flex m-h-[50px] bg-gray-200">
                    <p className="cursor-pointer" onClick={()=>{
                        router.push("/")
                    }} >Home</p>
                    <p onClick={()=>{
                        router.push("/blogs")
                    }} className="ml-5 cursor-pointer">Blogs</p>
                </nav>
            </div>
            <div className="p-5">
            {
                props.children
            }
            </div>
        </div>
       </Fragment>
    )
}

export default Layout