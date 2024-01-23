import { Component, OnInit } from '@angular/core';
import { CrickApiService } from '../../crick-api.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{
  liveMatches:any = [];

  constructor(private apiService:CrickApiService){}

  ngOnInit(): void {
    this.loadLiveMatchesData();
  }

  loadLiveMatchesData(){
    this.apiService.getLiveMatches().subscribe(data=>{
      console.log(data);
      this.liveMatches = data;
    });
  }
}
