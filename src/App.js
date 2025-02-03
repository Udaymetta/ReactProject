import { useState } from 'react';
import Header from './components/Header.jsx'
import CustomerInput from "./components/CustomerInput.jsx";
import Log from "./components/Log.jsx";
import {format} from "./utils/util.js";

const App = () => {
  const [logData,setLogData] = useState([]);
  const[invest, setInvest] = useState(
    {
      "initial investment": null,
      "annual investment": null,
      "expected return": null,
      "duration": null
    }
  )

  function handleChange(field, value) {
    setInvest((prevInvest) => {
      const updatedDetails = {...prevInvest, [field]:  Number(value)};
      calculate(updatedDetails);
        return updatedDetails;
    });
  }
  function calculate(investDetails){
    var investedCapitalval = investDetails['initial investment'];
    var investmentValueVal = investedCapitalval;
    let interest = 0;
    let data = [];
    for (let index = 1; index <= investDetails.duration; index++) {
      var interestInYearVal = investmentValueVal * ((investDetails['expected return']) / 100);
      interest += interestInYearVal;
      investedCapitalval += investDetails['annual investment'];
      var totalInterestVal = interest;
      investmentValueVal = investedCapitalval + totalInterestVal;
      data.push(
        {
          year: index,
          investmentValue: format(investmentValueVal),
          interestInYear: format(interestInYearVal),
          totalInterest: format(totalInterestVal),
          investedCapital: format(investedCapitalval)
        }
      )
    }
    setLogData(data);
    return data;
  }
  return (
    <>
   <Header />
   <CustomerInput handle = {handleChange} data = {invest}/>
   <Log out = {logData}/>
   </>
  );
};

export default App;