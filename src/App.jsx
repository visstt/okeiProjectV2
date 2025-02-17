import Header from "./Global/Header/Header";
import HomeLayout from "./Pages/Home/HomeLayout";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      {/* <HomeLayout /> */}
    </div>
  );
}

export default App;
