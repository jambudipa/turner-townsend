import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'tt-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements AfterViewInit, OnDestroy {

  @Input() filterText: string;
  @Output() filterTextChanged: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('filterTextCtrl', {static: false}) filterTextCtrl: ElementRef;

  subscription: Subscription;

  ngAfterViewInit() {
    this.subscription = fromEvent(this.filterTextCtrl.nativeElement, 'input').pipe(
      debounceTime(500)
    ).subscribe((event: Event) => this.filterTextChanged.emit((event.target as HTMLInputElement).value));
  }

  onClearClicked() {
    this.filterTextChanged.emit('');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
