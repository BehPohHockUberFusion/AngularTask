import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name = 'Beh Poh Hock';
  email = 'pohhock.beh@uberfusion.com';
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated())
    {
      this.router.navigate(['/unauthorized']);
    }
  }

}
