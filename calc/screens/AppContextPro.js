import React, { useState, useEffect, createContext } from "react";

export const MyAppContext = createContext(null);


function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}


const AppContextPro = ({ children }) => {
  const [spinValue, setSpinValue] = useState('3');
  const [includeGst, setIncludeGst] = React.useState("");
  const [excludeGst, setExcludeGst] = React.useState("");
  const [gstRate, setGstRate] = React.useState(0);


  const clearBtnClick = ()=>{
    console.warn("clear btn clicked")
    setIncludeGst("0.0");
    setExcludeGst("0.0")
      setGstRate("0.0")
}

  const calcIncludeGst = (value) => {
    //   console.log("value = " + value);
    value = value.replace(/[^0-9.]/g, '')
    setIncludeGst(value);
    if (value > 0) {
      let gstAmount = parseInt(value) - [parseInt(value) * (100 / (100 + parseInt(spinValue)))];
      let priceCharged = parseInt(value) - gstAmount
      console.log(value + "  gst = " + gstAmount + "  price " + priceCharged);


      setExcludeGst(round(priceCharged,2).toString())
      setGstRate(round(gstAmount,2).toString())
    }

    else {
      setExcludeGst("0.0")
      setGstRate("0.0")
    }

  };

  
  const calcExcludeGst = (value) => {
    //   console.log("value = " + value);
    value = value.replace(/[^0-9.]/g, '')
    setExcludeGst(value);
 

    if (value > 0) {
      let gstAmount = parseInt(value) * parseInt(spinValue) / 100;
      let priceCharged = parseInt(value) + gstAmount

      console.log(value + "  gst = " + gstAmount + "  price " + priceCharged);
      setIncludeGst(round(priceCharged,2).toString())
      setGstRate(round(gstAmount,2).toString())
    }
    else {
      setIncludeGst("0.0")
      setGstRate("0.0")
    }
  };

  const mProps = {
    spinValue,
    setSpinValue,
    calcIncludeGst,
    calcExcludeGst,
    includeGst,
    excludeGst,
    gstRate,
    clearBtnClick
  }

  return (
    <MyAppContext.Provider value={mProps}>
      {children}
    </MyAppContext.Provider>
  );
};

export default AppContextPro;
