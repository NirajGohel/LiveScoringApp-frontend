import { Component, OnInit } from '@angular/core';
import { ScorerService } from '../../../services/scorer.service';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private Scorer: ScorerService, private Admin: AdminService) {}

  public scorers;
  public scorerCount = 0;

  ngOnInit(): void {
    this.Scorer.getAllScorer().subscribe(
      (data) => {
        this.scorers = data;

        for (let s of this.scorers) {
          if (s.verified) this.scorerCount++;
        }
      },
      (error) => console.log(error)
    );
  }

  scorerVerification(status, id) {
    const data = {
      status: status,
      _id: id,
    };

    this.Admin.scorerVerification(data).subscribe(
      (data) => window.location.reload(),
      (error) => console.log(error)
    );
  }
}
