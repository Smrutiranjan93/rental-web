import { Injectable } from "@angular/core";
import { LocalStoreService } from "../local-store.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { map, catchError, delay } from "rxjs/operators";
import { User } from "../../models/user.model";
import { of, BehaviorSubject, throwError } from "rxjs";
import { environment } from "environments/environment";

// ================= only for demo purpose ===========
// const DEMO_TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjhkNDc4MDc4NmM3MjE3MjBkYzU1NzMiLCJlbWFpbCI6InJhZmkuYm9ncmFAZ21haWwuY29tIiwicm9sZSI6IlNBIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE1ODc3MTc2NTgsImV4cCI6MTU4ODMyMjQ1OH0.dXw0ySun5ex98dOzTEk0lkmXJvxg3Qgz4ed";

// const DEMO_USER: User = {
//   id: "5b700c45639d2c0c54b354ba",
//   displayName: "Watson Joyce",
//   role: "SA",
// };
// ================= you will get those data from server =======

@Injectable({
  providedIn: "root",
})
export class JwtAuthService {
  PATH_OF_API = "http://rental.nucigent.co.in/backend/api/v1";
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  token;
  isAuthenticated: Boolean;
  user: User = {};
  user$ = new BehaviorSubject<User>(this.user);
  signingIn: Boolean;
  return: string;
  JWT_TOKEN = "JWT_TOKEN";
  APP_USER = "MATX_USER";

  constructor(
    private ls: LocalStoreService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (params) => (this.return = params["return"] || "/")
    );
  }

  signin(email: any,password:any) {
    let params = new HttpParams();
    params = params.append("email", email);
    params = params.append("password",password);
    return this.http.post(this.PATH_OF_API + '/login',{headers:this.requestHeader}, {
      params: params,
    });
   
  }
  // signin(email: any,password:any) {
  //   let params = new HttpParams();
  //   params = params.append("email", email);
  //   params = params.append("password",password);
  //   return this.http.post(this.PATH_OF_API + '/login',null,{params:params}).pipe(
  //     map((response)=>{
  //       const  data:any  = response;
  //       console.log(data);
        
  //       const authUser = {
  //         access_token:data.access_token
  //       };
  //       console.log(authUser);
        
  //       localStorage.setItem('auth', JSON.stringify(authUser));
  //     })
  //   )
  // }
  // public signinnmm(username, password) {
  //   return of({ token: DEMO_TOKEN, user: DEMO_USER }).pipe(
  //     delay(1000),
  //     map((res: any) => {
  //       this.setUserAndToken(res.token, res.user, !!res);
  //       this.signingIn = false;
  //       return res;
  //     }),
  //     catchError((error) => {
  //       return throwError(error);
  //     })
  //   );

  //   // FOLLOWING CODE SENDS SIGNIN REQUEST TO SERVER

  //   this.signingIn = true;
  //   return this.http
  //     .post(`${environment}/auth/local`, { username, password })
  //     .pipe(
  //       map((res: any) => {
  //         this.setUserAndToken(res.token, res.user, !!res);
  //         this.signingIn = false;
  //         return res;
  //       }),
  //       catchError((error) => {
  //         return throwError(error);
  //       })
  //     );
  // }

  /*
    checkTokenIsValid is called inside constructor of
    shared/components/layouts/admin-layout/admin-layout.component.ts
  */
  public checkTokenIsValid() {
    return of().pipe(
      map((profile: User) => {
        this.setUserAndToken(this.getJwtToken(), profile, true);
        this.signingIn = false;
        return profile;
      }),
      catchError((error) => {
        return of(error);
      })
    );

    /*
      The following code get user data and jwt token is assigned to
      Request header using token.interceptor
      This checks if the existing token is valid when app is reloaded
    */

    return this.http.get(`${environment}/api/users/profile`).pipe(
      map((profile: User) => {
        this.setUserAndToken(this.getJwtToken(), profile, true);
        return profile;
      }),
      catchError((error) => {
        this.signout();
        return of(error);
      })
    );
  }

  public signout() {
    this.setUserAndToken(null, null, false);
    this.router.navigateByUrl("sessions/signin");
  }

  // isLoggedIn(): Boolean {
  //   return !!this.getJwtToken();
  // }
  isLoggedIn() {
    const loggedIn = !!localStorage.getItem('auth');
    return of(loggedIn);
  }

  getJwtToken() {
    const token=localStorage.getItem('token')
    return token;
    
  }
  setRoles(roles){
    localStorage.setItem('roles',roles);
  }
  public getRoles() {
    return localStorage.getItem('roles');
  }
  getUser() {
    return this.ls.getItem(this.APP_USER);
  }

  setUserAndToken(token: String, user: User, isAuthenticated: Boolean) {
    this.isAuthenticated = isAuthenticated;
    this.user = user;
    this.user$.next(user);
    this.ls.setItem(this.JWT_TOKEN, token);
    this.ls.setItem(this.APP_USER, user);
  }
}
