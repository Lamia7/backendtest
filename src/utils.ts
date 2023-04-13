/**
 * Get all days included in a date range
@param {Date} startDate Mission's stating date
@param {Date} endDate Mission's ending date
@returns {Date[]} Array of days included in the mission
*/
function getDaysInRange(startDate: Date, endDate: Date): Date[] {
  const days: Date[] = [];

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
