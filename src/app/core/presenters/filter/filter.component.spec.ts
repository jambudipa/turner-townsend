import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FilterComponent } from './filter.component';
import { MaterialModule } from '../../../material/material.module';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule
      ],
      declarations: [FilterComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngAfterViewInit', () => {
    it('should emit to @Output() filterTextChanged when the input is changed', fakeAsync(() => {
      let emittedValue = '';
      const inputValue = 'Some filter text';

      const input = fixture.debugElement.query(By.css('input'));
      input.nativeElement.value = inputValue;

      const inputEvent = new Event('input');

      component.filterTextChanged.subscribe(value => emittedValue = value);
      input.nativeElement.dispatchEvent(inputEvent);
      tick(500);

      expect(emittedValue).toBe(inputValue);
    }));
  });

  describe('#onClearClicked()', () => {
    it('should be called when the clear button is clicked', () => {
      spyOn(component, 'onClearClicked');
      component.filterText = 'Some filter text';
      fixture.detectChanges();

      const clearButton = fixture.debugElement.query(By.css('button'));
      clearButton.triggerEventHandler('click', {});

      expect(component.onClearClicked).toHaveBeenCalled();
    });

    it('should emit to @Output() filterTextChanged', () => {
      component.filterTextChanged.subscribe(value => {
        expect(value).toBe('');
      });

      component.onClearClicked();
    });
  });
});
