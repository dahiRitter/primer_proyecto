import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTACIONES DE LAS VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { alimentosComponent } from './pages/alimentos/alimentos.component';
import { juguetesComponent} from './pages/juguetes/juguetes.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"juguetes",component: juguetesComponent
  },
  {
    path:"alimentos",component:alimentosComponent
  },
  {
    path:"Accesorios",component:AccesoriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }