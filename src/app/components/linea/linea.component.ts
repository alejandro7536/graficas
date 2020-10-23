import { Component, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent {

  public lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Tamales' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Tortillas' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Pasteles' }
  ];

  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels;
  public barChartType = 'line';
  public barChartLegend = true;


  public randomize(): void {
    // Only Change 3 values
    this.lineChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100) ];

    this.lineChartData[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100) ];

    this.lineChartData[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100) ];
  }



}
