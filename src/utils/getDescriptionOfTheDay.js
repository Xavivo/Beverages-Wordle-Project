import descriptions from '../descriptions.json';

export const getDescriptionOfTheDay = () => {
  const startDate = new Date('2025-10-19');
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const index = diffDays % descriptions.length;
  return descriptions[index];
};