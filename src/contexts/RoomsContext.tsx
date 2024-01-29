import React, { createContext, useContext, useState } from 'react';

import {RoomsContextType, RoomsProviderProps, Room} from "../utils/interfaces"

const RoomsContext = createContext<RoomsContextType| undefined>(undefined);


export const RoomsProvider: React.FC<RoomsProviderProps>  = ({ children }) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [projectID, setProjectID] = useState<string | null>(null);

  return (
    <RoomsContext.Provider value={{ rooms, setRooms, projectID, setProjectID }}>
      {children}
    </RoomsContext.Provider>
  );
};

export const useRooms = () => {
  return useContext(RoomsContext);
};
