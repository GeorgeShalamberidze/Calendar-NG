import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  public dates: Array<Date> = [];
  public date: Date = new Date();
  public weekDays: Array<string> = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  constructor() {
    console.log(this.getCalendarStartDate(this.date));
  }

  setMonth = (inc: number) => {
    const newDate = new Date(this.date);
    newDate.setMonth(this.date.getMonth() + inc);
    newDate.setDate(1);
    // setDate(newDate);
    // setDateArray(getCalendarDays(date));
  };

  isSameMonth = (dateVal: Date): boolean => {
    return dateVal.getMonth() === this.date.getMonth();
  };

  getCalendarStartDate = (date: Date): Date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);

    // Calculate the last Sunday before the first day of the current month
    const dayOfWeek = firstDayOfMonth.getDay();
    const lastSunday = new Date(firstDayOfMonth);

    lastSunday.setDate(firstDayOfMonth.getDate() - dayOfWeek);

    return lastSunday;
  };

  getCalendarDays = (date: Date) => {
    const calendarStartDate = this.getCalendarStartDate(date);

    return this.rangeFromTo(0, 41).map((num) => {
      const currentDate = new Date(calendarStartDate);
      currentDate.setDate(calendarStartDate.getDate() + num);
      return currentDate;
    });
  };

  rangeFromTo = (start: number, end: number) => {
    if (start >= end) return [];

    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };
}
