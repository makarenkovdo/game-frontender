import styles from './App.module.scss';
import Quiz from './containers/Quiz/Quiz';
import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <div className={styles.App}>
     <Layout >
       <Quiz />
       
     </Layout>
    </div>
  );
}

export default App;
