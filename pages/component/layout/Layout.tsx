import { Fragment } from "react"

interface IProps {
    children: JSX.Element
}

const Layout = (props:IProps) => {
    return (
       <Fragment>
        <div className="w-screen h-screen">
            <div>
                <nav className="w-full p-4 flex m-h-[50px] bg-gray-200">
                    <p>Home</p>
                    <p className="ml-5">Blogs</p>
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