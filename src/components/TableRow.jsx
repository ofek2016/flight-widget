import TableCall from './TableCall'

const TableRow =({flight})=>{
  // console.log(flight)
  const words =Object.values(flight)
  // console.log(words)
    return (
      <tr>
        <td id='img'></td>
        {words?.map((word,index)=>(
          <TableCall key={index} word={word}/>
        ))}
      </tr>
    )
  }
  
  export default TableRow;