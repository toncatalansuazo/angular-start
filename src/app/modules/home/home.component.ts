import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromHome, fromHomeSelectors } from './store';
import { Product } from 'src/app/models/product';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showSidebar$: Observable<boolean>;

  constructor(private store: Store<fromHome.State>) { }

  ngOnInit(): void {
    this.listenCurrentProduct()
  }

  private listenCurrentProduct() {
    this.showSidebar$ = this.store.select(fromHomeSelectors.selectCurrentProduct).pipe(
      map(currentProduct => Boolean(currentProduct))
    );
  }

}
