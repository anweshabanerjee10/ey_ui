import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;
  message = '';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private navigationService: NavigationService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }


  //   constructor(private http:HttpClient, private router:Router) { }
  // userSignUp(data:signUp){
  //   this.http.post('http://localhost:3000/seller',
  //   data,
  //   {observe:'response'}).subscribe((result)=>{
  //     console.warn(result)
  //     if(result){
  //       localStorage.setItem('seller',JSON.stringify(result.body))
  //       this.router.navigate(['seller-home'])
  //     }
  //   })
  // } 
  login() {
    this.navigationService
      .loginAdmin(this.Email.value, this.PWD.value)
      .subscribe((res: any) => {
        if (res.toString() !== 'invalid') {
          this.message = 'Logged In Successfully.';
          this.utilityService.setAdmin(res.toString());
          this.router.navigate(['admin'])
          console.log(this.utilityService.getAdmin());

          
        } else {
          this.message = 'Invalid Credentials!';
        }
      });
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }
}
