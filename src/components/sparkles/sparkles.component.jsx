import React, {useState} from 'react'

import useRandomInterval from '../../hooks/useRandomInterval'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import range from '../../utilities/range'
import random from '../../utilities/random'

import {Wrapper, SparkleWrapper, SparkleSvg, ChildWrapper} from './sparkles.styles'

const DEFAULT_COLOR = '#FFDD5C';

const generateSparkle = color => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
    },
  };
  return sparkle;
};

const Sparkles = ({ color = DEFAULT_COLOR, children, ...rest }) => {
  const [sparkles, setSparkles] = useState(() => {
    return range(3).map(() => generateSparkle(color));
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(() => {
      const sparkle = generateSparkle(color);
      const now = Date.now();
      const nextSparkles = sparkles.filter(sparkle => {
        const delta = now - sparkle.createdAt;
        return delta < 1250;
      });
      nextSparkles.push(sparkle);
      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  );

  return (
    <Wrapper {...rest}>
      {sparkles.map(({id, color, size, style}) => (
        <Sparkle
          key={id}
          color={color}
          size={size}
          style={style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

const Sparkle = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';
  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  );
};

export default Sparkles;
