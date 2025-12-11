import { useState, useEffect, useCallback } from 'react';
import { Section, NavigationState } from '../types/navigation';

export const useNavigation = () => {
  const [state, setState] = useState<NavigationState>({
    currentSection: 'home',
    selectedCityId: null,
    history: ['home'],
  });

  // Scroll al cambiar de sección
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state.currentSection]);

  // Navegación
  const navigate = useCallback((section: Section, cityId?: string) => {
    setState((prev) => ({
      currentSection: section,
      selectedCityId: section === 'city-detail' && cityId ? cityId : null,
      history: [...prev.history, section],
    }));
  }, []);

  // Volver atrás
  const goBack = useCallback(() => {
    setState((prev) => {
      if (prev.history.length <= 1) return prev;
      
      const newHistory = [...prev.history];
      newHistory.pop(); // Remover actual
      const previousSection = newHistory[newHistory.length - 1] || 'home';
      
      return {
        currentSection: previousSection as Section,
        selectedCityId: null,
        history: newHistory,
      };
    });
  }, []);

  // Ir al inicio
  const goHome = useCallback(() => {
    setState({
      currentSection: 'home',
      selectedCityId: null,
      history: ['home'],
    });
  }, []);

  return {
    currentSection: state.currentSection,
    selectedCityId: state.selectedCityId,
    history: state.history,
    navigate,
    goBack,
    goHome,
    canGoBack: state.history.length > 1,
  };
};