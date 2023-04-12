/**
 * Get all days included in a date range
 * @param startDate
 * @param endDate
 * @returns
 */
function getDaysInRange(startDate: Date, endDate: Date): Date[] {
  const days = [];

  for (
    let day = new Date(startDate);
    day <= endDate;
    day.setDate(day.getDate() + 1)
  ) {
    days.push(new Date(day));
  }

  return days;
}

export default { getDaysInRange };
