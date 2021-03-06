import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolleyballService } from '../../../services/volleyball.service';

@Component({
  selector: 'app-view-match',
  templateUrl: './view-match.component.html',
  styleUrls: ['./view-match.component.scss'],
})
export class ViewMatchComponent implements OnInit {
  constructor(
    private Volleyball: VolleyballService,
    private route: ActivatedRoute
  ) {}

  public res;

  ngOnInit(): void {
    this.Volleyball.getMatch(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => (this.res = data),
      (error) => console.log(error)
    );
  }
}
