import React,{Component} from "react";
import {Cards,Chart,CountryPicker} from "./components";
import style from "./App.module.css";
import {fetchData} from "./api";
import Corona from "./components/corona.jpg";

class App extends Component{
  state={
    data:{},
    country:""
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});  
  }

  handleCountryChange=async (country) =>{
    
    const fetchedData = await fetchData(country);

    this.setState({data:fetchedData , country:country}); 
    
    
  }

  render(){
    const { data , country }=this.state;
   
    return (
      
      <div className={style.container}>
        <img src={Corona} alt="Corona-img" ></img>
        <h1><span className="span" >Corona</span> Virus</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

        <h3>Created Gio Dzirkvelishvili</h3>
      </div>
    );
  }
}

export default App;
