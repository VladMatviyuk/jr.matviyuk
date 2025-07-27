type Result = { years: number; months: number; days: number };

export const calculateDate = (date: string): Result => {
  const today = new Date();
  const start = new Date(date);

  let year = start.getFullYear();
  let month = start.getMonth();
  let day = start.getDate();

  let years = 0;
  let months = 0;
  let days = 0;

   // Вычисляем дни
  if (today.getDate() >= day) {
    days = today.getDate() - day;
  } else {
    // Занимаем один месяц
    months = -1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days = prevMonth.getDate() - day + today.getDate();
    month--;
  }

  // Вычисляем месяцы
  if (today.getMonth() >= month) {
    months += today.getMonth() - month;
  } else {
    months += today.getMonth() - month + 12;
    years = -1; // занимаем год
    year--;
  }

  // Вычисляем годы
  years += today.getFullYear() - year;

  return {
    years,
    months,
    days,
  };
};
