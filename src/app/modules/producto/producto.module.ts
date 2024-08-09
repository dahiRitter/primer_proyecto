import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ARCHIVO DE RUTAS
import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS
import { ProductoComponent } from './pages/producto/producto.component';
import { alimentosComponent} from './pages/alimentos/alimentos.component';
import { juguetesComponent } from './pages/juguetes/juguetes.component';
import { AccesoriosComponent} from './pages/accesorios/accesorios.component'

@NgModule({
  declarations: [
    ProductoComponent,
    juguetesComponent,
    alimentosComponent,
    AccesoriosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    juguetesComponent,
    alimentosComponent,
    AccesoriosComponent
  ]
})
export class ProductoModule { }