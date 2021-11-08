import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store';
import { loadQuestions } from '../../../store/stackoverflow/stackoverflow.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title!: string;
  items$ = this.store.select(state => state.stackoverflow[this.title])

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    console.log(this.title);
    this.store.dispatch(loadQuestions({
      for: this.title
    }));
  }

}
