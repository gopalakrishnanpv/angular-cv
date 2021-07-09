import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  private future: Date;
  private futureString: string;
  private counter$: Observable<number>;
  private subscription: Subscription;
  public message: string;

  private currentDate = new Date();

  public getCurrentDate(){
    return this.currentDate.toDateString();
  }

  dhms(t) {
    var days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      days + ' days',
      hours + ' hours',
      minutes + ' minutes',
      seconds + ' seconds'
    ].join(' ');
  }


  ngOnInit() {
    this.future = new Date("2021-04-22");
    this.counter$ = interval(1000).pipe(map(x => {
      return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
    }));

    this.subscription = this.counter$.subscribe((x) => this.message = this.dhms(x));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
