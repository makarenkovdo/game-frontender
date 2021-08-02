import React from "react"
import styles from './ActiveQuiz.module.scss'
import DrawAnswersList from './../AnswersList/DrawAnswersList'

const ActiveQuiz = props => {
    console.log(props.answerResultRender);

    return (
        <div className={styles.activeQuiz}>
            <h2 className={styles.question}>{props.state.quiz[props.state.activeQuestion].q}</h2>
            <div>Вопрос №{props.state.activeQuestion + 1}</div>
            <div>
                <ol type="A">
                    {console.log(props.state.quiz[props.state.activeQuestion].a[0].name)}
                    <DrawAnswersList
                        answer={props.state.quiz[props.state.activeQuestion].a}
                        answerHandler={props.answerHandler}
                    />
                </ol>
                <div style={{
                    textAlign: 'center',
                }}><h1>{props.answerResultRender()}</h1></div>

            </div>



        </div>
    )

}

export default ActiveQuiz