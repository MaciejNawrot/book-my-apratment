import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './components/menu/menu.component';
import { RootStoreModule } from '../store';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
    MenuComponent,
  ],
  exports: [
    MenuComponent,
    CoreRoutingModule,
  ],
  imports: [
    CommonModule,
    RootStoreModule,
    CoreRoutingModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
