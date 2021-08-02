import React from "react"
import styles from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import ShowResult from "../../components/ShowResult/ShowResult"
import ShowFinish from "../../components/ShowFinish/ShowFinish"

class Quiz extends React.Component {

    state = {
        activeQuestion: 0,
        showResult: false,
        isAnswerRight: 0,
        isGameOn: true,
        counter: 0,

        quiz: [
            {
                q: 'Столица Испании?',
                ra: 2,

                a: [
                    { id: 0, name: 'Барселона' },
                    { id: 1, name: 'Бильбао' },
                    { id: 2, name: 'Мадрид' },
                    { id: 3, name: 'Валенсия' },
                ],

            },
            {
                q: 'Столица Германии?',
                ra: 3,

                a: [
                    { id: 0, name: 'Дрезден' },
                    { id: 1, name: 'Мюнхен' },
                    { id: 2, name: 'Гамбург' },
                    { id: 3, name: 'Берлин' },
                ]
            }
        ]


    }

    answerHandler = (id) => {
        let quizLength = this.state.quiz.length - 1
        //check if user give right or wrong answer
        if (id === this.state.quiz[this.state.activeQuestion].ra) {
            this.setState({ isAnswerRight: 'right' })
            this.setState({ counter: this.state.counter + 1 })
        }

        else {
            this.setState({ isAnswerRight: 'wrong' })
            this.setState({ isGameOn: false })
        }
        const interval = window.setTimeout(function () {
            this.setState({ isAnswerRight: null })


            //check if next question is exist
            //switch to another question or finished the game
            if (this.state.activeQuestion < quizLength) {
                this.setState({ activeQuestion: this.state.activeQuestion + 1 })
            }
            else {
                console.log('isGameOn')
                this.setState({ isGameOn: false })

            }
        }.bind(this), 1000)
    }

    switcher = () => {
        console.log('insideSwitcher');
        this.setState({ isAnswerRight: null })

    }

    answerResultRender = () => {
        if (this.state.isAnswerRight == 'right') {
            return <div>True!</div>;
        }

        else if (this.state.isAnswerRight == 'wrong') {
            return <div>False!</div>;
        }

        else return <div>Waiting for you answer!</div>

    }



    render() {
        {
            if (this.state.isGameOn) {
                return (


                    <div >
                        <div>Вопрос</div>
                        <ActiveQuiz
                            state={this.state}
                            answerHandler={this.answerHandler}
                            answerResultRender={this.answerResultRender.bind(this)} />


                        {/* <DrawAnswersList answer={this.state.quiz.a.name}/> */}

                    </div>

                )
            }
            else {
                return (
                    <ShowFinish counter={this.state.counter} />
                )

            }

        }

    }
}

export default Quiz