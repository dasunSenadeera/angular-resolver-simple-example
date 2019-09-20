import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerResolver } from "./resolver/customer.resolver";
import { HomeComponent } from './components/home/home.component';
import { HelloComponent } from './components/hello/hello.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "customers",
    component: CustomerComponent,
    resolve: { message: CustomerResolver }
  },
  {
    path: "hello",
    component: HelloComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CustomerResolver]
})
export class AppRoutingModule {}
