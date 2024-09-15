// MyContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const storeDataString = localStorage.getItem('bookData');
  const storeDataArray = JSON.parse(storeDataString) || [];
  const [AddData, setAddData] = useState(storeDataArray);

  useEffect(() => {
    const dataString = JSON.stringify(AddData);
    localStorage.setItem('bookData', dataString);
  }, [AddData]);

  return (
    <MyContext.Provider value={{ AddData, setAddData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);

