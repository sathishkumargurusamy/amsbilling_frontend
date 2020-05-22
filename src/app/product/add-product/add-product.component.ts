import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public isMotor: boolean = false;
  public pname: string;
  public motordescp: string;
  public stock: number;
  public cost: number;
  public total: number;
  constructor(
    public prodServ: ProductsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  calcTotal(){
    console.log('calc');
    if (this.cost && this.stock) {
      this.total = this.cost * this.stock;
    }
  }

  isMotorToggle() {
    this.isMotor = !this.isMotor;
  }
  addProduct() {
    let body = {
      product_name: this.pname,
      motor_description: this.motordescp,
      is_motor:this.isMotor,
      stock: this.stock,
      cost: this.cost
    };
    this.prodServ.addNewProduct(body).subscribe(data => {
      if (data) {
        this._snackBar.open('Product Added Successfully!', "Done", {
          duration: 2000,
        });
        this.clearFields();
      }
    });
  }
  clearFields() {
    this.pname = '';
    this.motordescp = '';
    this.stock = 0;
    this.cost = 0;

  }
}
