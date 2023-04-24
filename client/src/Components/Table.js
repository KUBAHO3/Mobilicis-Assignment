function DynamicTable({data}){
  // get table column
   const column = Object.keys(data[0]);
   let newColumn = []
   if(column[0] === "_id" && column[1] === "id"){
    for(var i=2; i<column.length-1; i++){
     newColumn.push(column[i]);
   }
   }else{
    newColumn = column;
   }
  
   // get table heading data
   const ThData =()=>{
      
       return newColumn.map((item)=>{
           return <th>{item}</th>
       })
   }
  // get table row data
  const tdData =() =>{
     
       return data.map((item)=>{
         return(
             <tr>
                  {
                     newColumn.map((v)=>{
                         return <td>{item[v]}</td>
                     })
                  }
             </tr>
         )
       })
  }
    return (
        <table className="table" id="mytable">
          <thead>
           <tr>{ThData()}</tr>
          </thead>
          <tbody>
          {tdData()}
          </tbody>
         </table>
    )
  }
  export default DynamicTable;