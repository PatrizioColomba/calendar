import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthComponent } from './month.component';
import { WeekComponent } from './../week/week.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MonthComponent', () => {
  let component: MonthComponent;
  let fixture: ComponentFixture<MonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MonthComponent,
        WeekComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
