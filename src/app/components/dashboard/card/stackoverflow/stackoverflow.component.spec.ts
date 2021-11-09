import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackoverflowComponent } from './stackoverflow.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../../../store';

describe('StackoverflowComponent', () => {
  let component: StackoverflowComponent;
  let fixture: ComponentFixture<StackoverflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackoverflowComponent ],
      providers: [
        provideMockStore({
          initialState: initialState,
        }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackoverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
