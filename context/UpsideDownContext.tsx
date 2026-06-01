import React, { createContext, useContext, useEffect, useState } from 'react';

interface UpsideDownState {
  upsideDown: boolean;
  toggle: () => void;
}

const UpsideDownContext = createContext<UpsideDownState>({
  upsideDown: false,
  toggle: () => {},
});

export const UpsideDownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [upsideDown, setUpsideDown] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (upsideDown) {
      root.classList.add('upside-down-world');
    } else {
      root.classList.remove('upside-down-world');
    }
  }, [upsideDown]);

  return (
    <UpsideDownContext.Provider value={{ upsideDown, toggle: () => setUpsideDown((v) => !v) }}>
      {children}
    </UpsideDownContext.Provider>
  );
};

export const useUpsideDown = () => useContext(UpsideDownContext);
