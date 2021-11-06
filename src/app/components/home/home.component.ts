import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { delay, mapTo, merge, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buttonTitle = "CLICK ME";

  constructor(
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Home");
  }

  handleClick(): void {
    merge(
      of(null).pipe(mapTo(3)),
      of(null).pipe(mapTo(2), delay(1000)),
      of(null).pipe(mapTo(1), delay(2000)),
      of(null).pipe(mapTo(0), delay(3000)),
    ).subscribe(value => {
      if (value === 0) {
        try {
          this.router.navigate(['/dashboard']);
        } catch (error) {
          throw new Error('[HomeComponent] Could not route to dashboard.');
        }
      }
      this.buttonTitle = String(value);
    });
  }

}
