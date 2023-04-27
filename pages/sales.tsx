import { useEffect, useState } from 'react';
import useSWR from 'swr'

interface IProps {
    sales: {id:number,name:string}[]
}

const Sales = (props:IProps) => {
    const {sales:serverData} = props;

    const [localData,setLocalData] = useState(serverData)
    const {data,error,isLoading} = useSWR("https://next-learn-c1220-default-rtdb.firebaseio.com/sales.json");    
    
    useEffect(()=>{

       if(data){
        const transformedData = Object.keys(data).map((item)=>{
            return {
               id: data[item].id,
               name:data[item].name
            }
          });
        setLocalData(transformedData)
       }   
    },[data])
    
    return (
        <div>
            {
                localData.map((sale,index)=>{
                    return (
                        <p key={index}>{sale.name}</p>
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