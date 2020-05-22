import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterdataPipe } from '../../src/app/service/SearchFilterPipe';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AddProductComponent,
    DashboardComponent,
    ViewProductComponent,
    FilterdataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatMenuModule,
    MatInputModule,
    MatListModule,
    NgxPaginationModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'view-product',
        component: ViewProductComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
