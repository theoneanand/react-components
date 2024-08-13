import React, {useState} from 'react'
import style from './accordion.module.css'
import data from './data.js'
const Accordion = ({multiselect = false}) => {
    const [selected, setSelected] = useState(null);
    const [multiSelected, setMultiSelected] = useState([]);
    //console.log(multiselect)
    const handleSelection = (id)=>{
        setSelected((prev)=>{
            return prev==id?null:id
        });
    }
    const handleMultiSelection =  (id) =>{
        let selectArray = [...multiSelected];
        const findIndexOfSelected = selectArray.indexOf(id);
        if(findIndexOfSelected !== -1){selectArray.splice(findIndexOfSelected, 1)}else{selectArray.push(id)}
        setMultiSelected(selectArray);
    }
  return (
    <div className={style.accordion}>
        {
            data?.faq?.length > 0 ?
            data?.faq.map(item=>(
                <div className={style["accordion-item"]} key={item.qno}>
                    <button 
                        onClick={
                            multiselect ? ()=>handleMultiSelection(item.qno)
                            : ()=>handleSelection(item.qno)
                        }
                        className={style["accordion-heading"]} 
                        aria-selected={
                            item.qno == selected || multiSelected.indexOf(item.qno) !== -1 ? "true" : "false"
                        }
                    >{item.question}</button>
                    <div 
                        className={
                            `${style["accordion-content"]} 
                            ${item.qno == selected || multiSelected.indexOf(item.qno) !== -1  ? style.show:""}`
                        }
                    >
                        {item.answer}
                    </div>
                </div>
            ))
            
            : <p>No data found</p>

        }
    </div>
  )
}

export default Accordion