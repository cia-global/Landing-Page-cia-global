export type Section = 
  | 'home' 
  | 'about' 
  | 'cities' 
  | 'appointment' 
  | 'contact' 
  | 'city-detail';

export interface NavigationState {
  currentSection: Section;
  selectedCityId: string | null;
  history: Section[];
}