/**
 * Formats the given date into a string with the format: "Weekday, Month Day, Year".
 * @param date The date to format.
 * @returns A formatted date string.
 */
export const formatDate = (date: string | number | Date): string => {
  // Convert input to a Date object
  const formattedDate = new Date(date);

  // Define options for date formatting
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Format the date using the specified options and return
  return formattedDate.toLocaleDateString("en-GB", options);
};