import './App.css';
import Layout from './components/Layout/Layout';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Layout />
      <ScrollToTop smooth color="#ff7f50" style={{backgroundColor:"#1e1e2c",borderRadius:"80px"}} />
    </>
  );
}

export default App;
