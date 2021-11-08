import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../../store';
import { loadQuestions } from '../../../../store/stackoverflow/stackoverflow.actions';

@Component({
  selector: 'app-stackoverflow',
  templateUrl: './stackoverflow.component.html',
  styleUrls: ['./stackoverflow.component.css']
})
export class StackoverflowComponent implements OnInit {

  @Input() title!: string;
  items$ = this.store.select(state => state.stackoverflow[this.title])

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadQuestions({
      for: this.title
    }));
  }

}
