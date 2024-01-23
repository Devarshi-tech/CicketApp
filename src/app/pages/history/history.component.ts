import { Component, OnInit } from '@angular/core';
import { CrickApiService } from '../../crick-api.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  allMatches:any = [];
  constructor(private _api:CrickApiService){}
  
  ngOnInit(): void {
    this._api.getAllMatches().subscribe({
      next:data=>{
        this.allMatches = data;
        console.log(this.allMatches);
      }
    })
  }
}
