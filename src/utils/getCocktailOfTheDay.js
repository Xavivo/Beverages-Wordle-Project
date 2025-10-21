import cocktails from '../cocktails.json';

export const getCocktailOfTheDay = () => {
  const startDate = new Date('2025-10-19'); // Starting today
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const cocktailIndex = diffDays % cocktails.length;
  return cocktails[cocktailIndex];
};