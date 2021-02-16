import {useEffect, useRef, useCallback} from 'react';

import random from '../utilities/random'
import typeError from '../utilities/typeError';

const useRandomInterval = (callback, minDelay, maxDelay) => {
    const timeoutId = useRef(null);
    const savedCallback = useRef(callback);
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      if (typeError([minDelay, maxDelay], ["number"])) return;

      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();

      return () => window.clearTimeout(timeoutId.current);
    }, [minDelay, maxDelay]);
  
    const cancel = useCallback(function () {
      window.clearTimeout(timeoutId.current);
    }, []);
    
    return cancel;
};

export default useRandomInterval;