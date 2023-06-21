import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  if (String(date) === 'Invalid Date') return null;
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}