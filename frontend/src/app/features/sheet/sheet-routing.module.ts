import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'sheet',
    component: MainComponent,
    children: [
      // {path: 'orders', component: OrdersComponent},
      // {path: 'order-detail/:orderId', component: OrderDetailComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SheetRoutingModule { }
