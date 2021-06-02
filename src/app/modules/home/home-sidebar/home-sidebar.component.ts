import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromHome, fromHomeSelectors } from '../store';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'cs-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {
  currentProduct$: Observable<Product | undefined>;

  constructor(private store: Store<fromHome.State>) { }

  ngOnInit(): void {
    this.listenCurrentProduct()
  }

  listenCurrentProduct() {
    this.currentProduct$ = this.store.select(fromHomeSelectors.selectCurrentProduct);
  }

}
