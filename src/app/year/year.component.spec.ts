import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeekComponent } from './../week/week.component';
import { MonthComponent } from './../month/month.component';
import { YearComponent } from './year.component';


describe('YearComponent', () => {
  let component: YearComponent;
  let fixture: ComponentFixture<YearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        WeekComponent,
        MonthComponent,
        YearComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
