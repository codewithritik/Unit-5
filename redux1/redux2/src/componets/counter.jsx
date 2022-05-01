import { AddCount } from '../counter/action';
import { useDispatch, useSelector } from 'react-redux';

export const Counter = () =>{
    const Dispatcj = useDispatch()
    const x = useSelector((store)=>store.ritik)

return <div>
    <h1>
      counter:{x}
    </h1>
    <button onClick={()=>{
      Dispatcj(AddCount(1))
    }}>
      add
    </button>
</div>
}