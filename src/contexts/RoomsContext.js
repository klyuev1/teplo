// RoomsContext.js
import React, { createContext, useContext, useState } from 'react';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [projectID, setProjectID] = useState(null);

  return (
    <RoomsContext.Provider value={{ rooms, setRooms, projectID, setProjectID }}>
      {children}
    </RoomsContext.Provider>
  );
};

export const useRooms = () => {
  return useContext(RoomsContext);
};
