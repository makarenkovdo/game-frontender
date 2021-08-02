import React from 'react'
import styles from './DrawAnswersList.module.scss'

const DrawAnswersList = props => (<ol className={styles.list} type='A'> {
    props.answer.map((el, id) => {
            return (<li key={id} onClick={props.answerHandler.bind(this, id)} className={styles.item}>{el.name}</li>)
            }
    )
    }
    </ol>
)

//  const DrawAnswersList = () => {
//      return (<div>DrawList</div>)
//  }
 
        
   




export default DrawAnswersList