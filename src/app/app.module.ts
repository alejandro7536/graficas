import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarrasComponent } from './components/barras/barras.component';
import { RadarComponent } from './components/radar/radar.component';
import { DonaComponent } from './components/dona/dona.component';
import { AlineaComponent } from './components/alinea/alinea.component';
import { AareaComponent } from './components/aarea/aarea.component';


@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarrasComponent,
    DonaComponent,
    RadarComponent,
    AlineaComponent,
    AareaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
