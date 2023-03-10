import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AddWilderForm from "./components/AddWilderForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WildersGrid from "./components/WildersGrid";

function App() {
  const [wilders, setWilders] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:5000/api/wilder");

    setWilders(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <AddWilderForm fetchData={fetchData} />
      <WildersGrid wilders={wilders} fetchData={fetchData} />
      <Footer />
    </div>
  );
}

export default App;
