import { useEffect ,useState } from "react";



const UseApi=(url)=>{
    const [data,SetData] = useState([]);
    useEffect(()=>{
        fetch(url).then((res) => res.json()).then( res =>
          SetData(res)
        )
      },[url])

    return data  
}

export default UseApi