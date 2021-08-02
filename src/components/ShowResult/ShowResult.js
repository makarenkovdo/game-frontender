import ShowFinish from '../ShowFinish/ShowFinish';
import styles from './ShowResult.module.scss'

const ShowResult = props => {
    console.log(props);
    if (props.result) {
        return (<div><h1>TRUE</h1>
                 </div>)
    }
    else {return (<div>
        <h1>FALSE</h1>
        <ShowFinish />
               </div>)}
}

export default ShowResult