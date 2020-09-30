import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name = 'Beh Poh Hock';
  today: number = Date.now();
  //public authService: AuthService
  constructor(public authService: AuthService){
    setInterval(() => {this.today = Date.now()}, 1);
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }

}
