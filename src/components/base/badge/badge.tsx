import { StyledProps } from "types"
import "./badge.scss"
import moment from "moment"

export type BadgeProps = StyledProps & {
  time: string
}

const getSimplifiedTimespan = (time: string) => {
  const timespan = moment.duration(Math.abs(new Date().valueOf() - new Date(time).valueOf()));
  let result = '';
  if (timespan.asYears() >= 1) result = Math.trunc(timespan.asYears()) + 'Y';
  else if (timespan.asMonths() >= 1) result = Math.trunc(timespan.asMonths()) + 'M';
  else if (timespan.asWeeks() >= 1) result = Math.trunc(timespan.asWeeks()) + 'W';
  else if (timespan.asDays() >= 1) result = Math.trunc(timespan.asDays()) + 'D';
  else if (timespan.asHours() >= 1) result = Math.trunc(timespan.asHours()) + 'H';
  else if (timespan.asMinutes() >= 1) result = Math.trunc(timespan.asMinutes()) + 'm';
  else result = Math.trunc(timespan.asSeconds()) + 'S';
  return result + ' AGO';
}

export const Badge = ({ time }: BadgeProps) => (
  <div className="badge">{getSimplifiedTimespan(time)}</div>
);
