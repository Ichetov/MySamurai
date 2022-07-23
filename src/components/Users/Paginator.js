import st from "./Users.module.css";
import { useState } from 'react';
import { useEffect } from 'react';



const Paginator = (props)=>{


  const [numb, setNumb] = useState(1);


  useEffect(()=>{
    return ()=>{
       props.curPage(1);
    }
  },[])

let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
let pages = [];

for (let i = 1; i <= pageCount; i++) {
  pages.push(i);
}

let left = (numb - 1) * 10 + 1;
let right = numb * 10

// let curP = props.currentPage;

// let mePag = curP - 10 <= 0 ? 0 : curP - 10;

// // let curPF = curP - 5 < 0 ? 0 : curP - 5;
// let curPL = mePag + 10;
// let slicedPages = pages.slice(mePag, curPL);

// const mix =()=>{
//   return(
//     slicedPages.map((it) => {
//             return (
//               <span
//                 key={it}
//                 onClick={() => props.onPageChanned(it)}
//                 className={
//                   props.currentPage === it ? st.selectedPage : st.common
//                 }
//               >
//                 {it}
//               </span>
//             );
//           })
//   )
// }



  return(
       <div>

{
  numb > 1 && <button onClick={()=>setNumb(numb-1)}>Назад</button>
}

{
  pages.filter(i=> i>= left && i <= right)
  .map(it=>{
    return <span
                    key={it}
                    onClick={() => props.onPageChanned(it)}
                    className={
                      props.currentPage === it ? st.selectedPage : st.common
                    }
                  >
                    {it}
                  </span>
  })
}

<button onClick={()=>setNumb(numb+1)}>Вперёд</button>
        {/* {
          numb > 1 ? <div>{mix()}<button onClick={()=>setNumb(numb + 1)}>Вперёд</button></div> : <div><button onClick={setNumb(numb-1)}>Назад</button>{mix()}<button onClick={()=>setNumb(numb + 1)}>Вперёд</button></div>
        } */}
          {/* {pages.map((it) => {
            return (
              <span
                key={it}
                onClick={() => props.onPageChanned(it)}
                className={
                  props.currentPage === it ? st.selectedPage : st.common
                }
              >
                {it}
              </span>
            );
          })} */}
   
        </div>
       
  )
}

export default Paginator