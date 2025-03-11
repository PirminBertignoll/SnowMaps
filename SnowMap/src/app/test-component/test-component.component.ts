import { Component, OnInit } from '@angular/core';
import { SkiResort } from '../shared/ski-resort';
import { SkiResortService } from '../services/snow-service';

@Component({
  selector: 'sm-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  constructor(private ss: SkiResortService) { }

  public skiResorts: SkiResort[] = [];

  ngOnInit(): void {
    this.ss.getSkiResorts().subscribe((resorts: SkiResort[]) => {
      this.skiResorts = resorts;
    });
  }
  selectedSkiResort: SkiResort | null = null;

  selectSkiResort(skiResort: SkiResort) {
    this.selectedSkiResort = skiResort;
  }


}
