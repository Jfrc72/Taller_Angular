import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSerieList() {
    this.serieService.getSeries().subscribe(serie => {
      this.series = serie;
    });
  }

  calculateAverageSeasons() {
    let totalSeasons = 0;
    for (const serie of this.series) {
      totalSeasons += serie.seasons;
    }
    const averageSeasons = totalSeasons / this.series.length;
    return averageSeasons;
  }

  ngOnInit() {
    this.getSerieList();
  }

}