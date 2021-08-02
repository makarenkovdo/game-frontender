import styles from './ShowFinish.module.scss'

const ShowFinish = props => {
    return (
        <div className={styles.showFinish}>
            <h1>FINISH</h1>
            <h2>Your result is {props.counter}</h2>
            </div>
        )
}

export default ShowFinish