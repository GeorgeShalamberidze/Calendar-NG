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

  getCalendarStartDate(date: Date): Date {
    const year = date.getFullYear();
    const month = date.getMonth();

    /** Get first day of current month by passing in 3rd option to Date constructor */
    const firstDayOfMonth = new Date(year, month, 1);

    /** Current month's first day index of a week (0-6) */
    const dayOfWeek = firstDayOfMonth.getDay();
    console.log('dayofweek: ', dayOfWeek);
    console.log('firstDayOfMonth: ', firstDayOfMonth.getDate());

    const lastSunday = new Date(dayOfWeek);

    /** Calculate how much days are from previous month to the first day of current month */
    lastSunday.setDate(firstDayOfMonth.getDate() - dayOfWeek);

    return lastSunday;
  }
}
