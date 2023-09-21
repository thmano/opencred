import { createContext, ReactNode, useState } from 'react';

type FarmContextProps = {
  children: ReactNode;
};
type FarmType = {
  name: string;
  location: string;
  hectareTotais: string;
  hectaresPlantil: string;
  latitude: string;
  longitude: string;
  setName: (newState: string) => void;
  setLocation: (newState: string) => void;
  setHectareTotais: (newState: string) => void;
  setHectaresPlantil: (newState: string) => void;
  setLatitude: (newState: string) => void;
  setLongitude: (newState: string) => void;
};

const DEFAULT_VALUE = {
  name: 'Fazenda Salto Alto',
  location: 'Belo Horizonte - MG',
  hectareTotais: '430',
  hectaresPlantil: '380',
  latitude: '-20.1574045',
  longitude: '-53.5029533',
  setName: () => {},
  setLocation: () => {},
  setHectareTotais: () => {},
  setHectaresPlantil: () => {},
  setLatitude: () => {},
  setLongitude: () => {},
};

export const FarmContext = createContext<FarmType>(DEFAULT_VALUE);

export const FarmContextProvider = ({ children }: FarmContextProps) => {
  const [name, setName] = useState(DEFAULT_VALUE.name);
  const [location, setLocation] = useState(DEFAULT_VALUE.location);
  const [hectareTotais, setHectareTotais] = useState(DEFAULT_VALUE.hectareTotais);
  const [hectaresPlantil, setHectaresPlantil] = useState(DEFAULT_VALUE.hectaresPlantil);
  const [latitude, setLatitude] = useState(DEFAULT_VALUE.latitude);
  const [longitude, setLongitude] = useState(DEFAULT_VALUE.longitude);

  return (
    <FarmContext.Provider
      value={{
        name,
        setName,
        location,
        setLocation,
        hectareTotais,
        setHectareTotais,
        hectaresPlantil,
        setHectaresPlantil,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
      }}
    >
      {children}
    </FarmContext.Provider>
  );
};
