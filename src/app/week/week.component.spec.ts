import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekComponent } from './week.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WeekComponent', () => {
	let component: WeekComponent;
	let fixture: ComponentFixture<WeekComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
			declarations: [WeekComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WeekComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
