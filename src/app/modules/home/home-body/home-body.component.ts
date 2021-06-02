import { Product } from './../../../models/product';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromHome, fromHomeActions, fromHomeSelectors } from '../store';

@Component({
  selector: 'cs-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromHome.State>) { }

  ngOnInit(): void {
    this.store.dispatch(fromHomeActions.loadProducts());
    this.listenProducts();
  }

  onSelectProduct($event: Product) {
    console.log('product selected', $event);
    this.store.dispatch(fromHomeActions.setCurrentProduct({product: $event}));
  }

  private listenProducts() {
    this.products$ = this.store.select(fromHomeSelectors.selectProducts);
  }

}
