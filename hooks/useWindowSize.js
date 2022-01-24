import { useState, useEffect } from 'react';

export default function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      // Llamo al handler para q el estado se actualice con los valores iniciales de la ventana
      handleResize();
      
      // Remuevo el evento al desmontar el componente para que no se acoplen varios eventos
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return windowWidth;
}