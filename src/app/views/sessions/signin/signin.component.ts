import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatButton } from "@angular/material/button";
import { MatProgressBar } from "@angular/material/progress-bar";
import {
  Validators,
  UntypedFormGroup,
  UntypedFormControl,
  FormBuilder,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { JwtAuthService } from "../../../shared/services/auth/jwt-auth.service";
import { AuthUser } from "app/shared/models/Authuser";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm!: FormGroup;
  errorMsg = "";
  formSubmitAttempt: boolean = false;
  // return: string;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private jwtAuth: JwtAuthService,
    private formBuilder: FormBuilder,
    private matxLoader: AppLoaderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: new FormControl(" ", [Validators.required]),
      password: new FormControl(" ", [Validators.required]),
      rememberMe: new FormControl(true),
    });
  }
  isFieldInvalid(field: string) {
    const control = this.signinForm.get(field);
    if (!control) {
      return;
    }
    return (
      (!control.valid && control.touched) ||
      (control.untouched && this.formSubmitAttempt)
    );
  }
  signin() {
    if (this.signinForm.valid) {
      const formValue = this.signinForm.value;
      console.log(this.signinForm.value);
      this.jwtAuth
        .signin(formValue.email, formValue.password)
        .subscribe((result: any) => {
          // if(result instanceof AuthUser){
          //   const defaultUrl=
          //   result.first_name=== 'ADMIN'? '/Admin':'/';
          //   const returnUrl=
          //   this.route.snapshot.queryParams['returnUrl'] || defaultUrl
          // }
          // localStorage.setItem("username", result.first_name);
          console.log(result);
          localStorage.setItem("token", result.access_token);
          this.jwtAuth.setRoles(result.first_name);
          console.log(result.first_name);
          if (result.first_name == "Admin") {
            this.router.navigateByUrl("dashboard/analytics");
          } else if (result.first_name == "Tenant") {
            this.router.navigateByUrl("dashboard/analytics");
          } else if (result.first_name == "Landlord") {
            this.router.navigateByUrl("dashboard/analytics");
          }
        });
    }
  }
  // this.route.queryParams
  //   .pipe(takeUntil(this._unsubscribeAll))
  //   .subscribe(params => this.return = params['return'] || '/');

  // ngAfterViewInit() {
  //   this.autoSignIn();
  // }

  // ngOnDestroy() {
  //   this._unsubscribeAll.next(1);
  //   this._unsubscribeAll.complete();
  // }

  // signin() {
  //   const signinData = this.signinForm.value

  //   this.submitButton.disabled = true;
  //   this.progressBar.mode = 'indeterminate';

  //   this.jwtAuth.signin(signinData.username, signinData.password)
  //   .subscribe(response => {
  //     this.router.navigateByUrl(this.jwtAuth.return);
  //   }, err => {
  //     this.submitButton.disabled = false;
  //     this.progressBar.mode = 'determinate';
  //     this.errorMsg = err.message;
  //   })
  // }

  // autoSignIn() {
  //   if(this.jwtAuth.return === '/') {
  //     return
  //   }
  //   this.matxLoader.open(`Automatically Signing you in! \n Return url: ${this.jwtAuth.return.substring(0, 20)}...`, {width: '320px'});
  //   setTimeout(() => {
  //     this.signin();
  //     console.log('autoSignIn');
  //     this.matxLoader.close()
  //   }, 2000);
  // }
}
