import drinks from '../drinks.json';

export const getDailyDrink = () => {
  const startDate = new Date('2025-10-19'); // Starting today
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const drinkIndex = diffDays % drinks.length;
  return drinks[drinkIndex];
};