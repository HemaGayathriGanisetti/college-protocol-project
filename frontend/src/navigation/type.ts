export type RootStackParamList = {
   Login: undefined;
  Main: undefined;
  Home: undefined;

  // Labs
  Labs: undefined;
  LabDetails: { lab: any };

  // Rules
  Rules: undefined;
  CategoryRules: { categoryId: number; categoryName: string };
  RuleDetails: { rule: any };

  // Timetable
  Timetable:  { data?: any };

  // Search
  Search: undefined;
};