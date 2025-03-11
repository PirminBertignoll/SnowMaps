import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkiResort } from '../shared/ski-resort';
import { SkiResortService } from '../services/snow-service';


@Component({
  selector: 'sm-ski-resort-detail',
  templateUrl: './ski-resort-detail.component.html',
  styleUrls: ['./ski-resort-detail.component.scss']
})
export class SkiResortDetailComponent implements OnInit {
  skiResort!: SkiResort | undefined;
  

  constructor(
    private route: ActivatedRoute,
    private skiResortService: SkiResortService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.skiResortService.getSkiResortById(id).subscribe((resort) => {
        this.skiResort = resort;
      });
    }
  }
}
