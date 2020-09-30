import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ConfirmedValidator } from 'src/app/confirmed.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
  // providers: []
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = fb.group({
      cpassword: ['', [Validators.required]],
      npassword: ['', [Validators.required]],
      ncpassword: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('npassword', 'ncpassword')
    })
  }
    
  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated())
    {
      this.router.navigate(['/unauthorized']);
    }
  }

  onSubmit() {
    const cpassword = this.form.value.cpassword;
    const npassword = this.form.value.npassword;
    //alert(cpassword);
    //alert(npassword);
    this.authService.verifyChgPassword(cpassword,npassword);
    
  }

}
