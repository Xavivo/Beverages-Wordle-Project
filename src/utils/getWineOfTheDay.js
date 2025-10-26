import wines from '../wines.json';

export const getWineOfTheDay = () => {
  if (!wines || !wines.length) return null;
  const startDate = new Date('2025-10-19');
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const index = diffDays % wines.length;
  return wines[index];
};