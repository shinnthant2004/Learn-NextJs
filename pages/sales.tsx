import useSWR from 'swr'

interface IProps {
    sales: {id:number,name:string}[]
}

const Sales = (props:IProps) => {
    const {sales} = props;
    
    return (
        <div>
            {
                sales.map((sale)=>{
                    return (
                        <p key={sale.id}>{sale.name}</p>
                    )
                })
            }
        </div>
    )
}

export async function getServerSideProps () {

  const dataA = await fetch("https://next-learn-c1220-default-rtdb.firebaseio.com/sales.json").then((res)=>{
     return res.json()
   }).then((data)=>{
      return data
   });

   const dataB = Object.keys(dataA).map((item)=>{
     return {
        id: dataA[item].id,
        name:dataA[item].name
     }
   });   
   
    return {
        props:{
            sales:dataB
        }
    }
}

export default Sales