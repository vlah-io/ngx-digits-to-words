import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDigitsToWordsComponent } from './ngx-digits-to-words.component';

describe('NgxDigitsToWordsComponent', () => {
  let component: NgxDigitsToWordsComponent;
  let fixture: ComponentFixture<NgxDigitsToWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDigitsToWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDigitsToWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
