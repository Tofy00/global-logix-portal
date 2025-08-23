/**
 * Утилитарная функция для надежного плавного скроллинга
 */

export const smoothScrollTo = (targetId: string, options?: ScrollIntoViewOptions): Promise<void> => {
  return new Promise((resolve) => {
    const scrollToElement = (attempts = 0) => {
      const element = document.getElementById(targetId);
      
      if (element) {
        // Элемент найден, скроллим к нему
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
          ...options
        });
        
        // Дополнительная проверка для старых браузеров
        if (!CSS.supports('scroll-behavior', 'smooth')) {
          element.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            ...options
          });
        }
        
        resolve();
      } else if (attempts < 10) {
        // Если элемент не найден, пробуем еще раз через небольшой интервал
        setTimeout(() => scrollToElement(attempts + 1), 100);
      } else {
        // Если после 10 попыток элемент не найден, просто скроллим вверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
        resolve();
      }
    };

    // Используем requestAnimationFrame для более плавной анимации
    requestAnimationFrame(() => {
      setTimeout(() => scrollToElement(), 50);
    });
  });
};

export const smoothScrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};