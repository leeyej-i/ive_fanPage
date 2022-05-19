import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
  const dom = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    };
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      };
    },
    [delay, duration],
  );

  useEffect(() => {
    const { current } = dom;
    let observer;
    // 50% 만큼 노출 혹은 제외되면
    const options = { threshold: 0.3 };

    if (current) {
      // target element가 화면에 노출되었는지 여부 확인
      /*
        Intersection Observer 객체 생성 + callback 함수와 obtion 전달
        Intersection Observer 에서 observe 로 구독할 Target Element 를 추가한다.
       */
      observer = new IntersectionObserver(handleScroll, options);
      observer.observe(current);
    }
    else {
      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;