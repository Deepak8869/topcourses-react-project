import React from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import {useState , useEffect} from "react";
import { toast } from "react-toastify";
import { apiUrl,filterData} from "./data";
import "./styles/App.css";


const App = () => {
  const  [courses ,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);

    async function fetchData(){
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
      }
      catch(error){
        toast.error("something went wrong");  
      }
      setLoading(false);
    }
    useEffect(()=>{
      fetchData();
    },[])
    
  
  
  return (
    <div>
      <Navbar />
      <Filter  filterData = {filterData}/>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap mt-2 justify-center items-center min-h[50vh]">
        {
          loading ? (<spinner/>) :(<Cards  courses={courses}/>)
        }
      </div>

      
    </div>

  );
};

export default App;
