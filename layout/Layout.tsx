import { Fragment } from "react"

interface IProps {
    children: JSX.Element
}

const Layout = (props:IProps) => {
    return (
       <Fragment>
         <div>
            <nav>
                <p>Home</p>
            </nav>
         </div>
         {
            props.children
         }
       </Fragment>
    )
}

export default Layout