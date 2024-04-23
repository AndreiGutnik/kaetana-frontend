import { useEffect, useState } from 'react';

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1648);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1648);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};

export default useDevice;
