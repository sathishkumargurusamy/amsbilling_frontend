import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from '../../service/products.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})

export class ViewProductComponent implements OnInit {
  public products:any;
  public selectedIndex:any;
  public search_motor;
  public search_other;
  constructor( public prodServ:ProductsService ) { }

  ngOnInit() {
    this.getAllProduct();
  }
  getAllProduct(){
    this.prodServ.getAllProducts().subscribe(data=>{
      this.products=data;
    });
  }
  updateProduct(body){
    this.prodServ.updateProduct(body).subscribe(data=>{
      this.getAllProduct();
    })
  }
  updateToggle(i,body){
    if(this.selectedIndex!=i){
      this.selectedIndex=i;
    }
    else
    {
      this.selectedIndex=-1;
      this.updateProduct(body);
    }
    
  }
}


