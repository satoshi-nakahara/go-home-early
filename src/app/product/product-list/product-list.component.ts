import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any

  // constructor(private route: ActivatedRoute) { }

  constructor(private productService: ProductService){  }

  ngOnInit(): void {
    this.products = this.productService.getProducts()

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {this.products = data },
      (err) => {console.error('エラーが発生しました: ' + err); }
    )

  }
}
