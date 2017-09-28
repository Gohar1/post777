import { Component } from '@angular/core';
import { FacebookService, InitParams,LoginResponse } from 'ngx-facebook';
import { AuthService } from "angular2-social-login";
import {data} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	public user;
	sub: any;
	constructor(public _auth: AuthService,private fb: FacebookService){ 
		let initParams: InitParams = {
      appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
 
	}
	 
	str:boolean = false;
	userIdRes: string = "sd";
	openAccountSetting:boolean = false;
	loginWithFacebook(): void {
		
		   this.fb.login()
			 .then(
					(response: LoginResponse) => {
						console.log(response.authResponse);
						this.userIdRes = response.authResponse.userID;
						if( this.userIdRes != ""){
							localStorage.setItem("userID",this.userIdRes);
							this.str = true;
							// this.me(this.userIdRes, response.authResponse.accessToken)
						}
						
					}
				)
			 .catch((error: any) => console.error(error));

			//  this.fb.api(
			// 		"/{userId}?fields=id,name",
			// 	function (response):Observable<any> {
			// 		if (response && !response.error) {
			// 			console.log(response.error)
			// 		}
			// 	}
		 
	// )
	}

	ngOnInit() {
		let localId = localStorage.getItem("userID");
		if(localId){
			this.str = true;
			this.userIdRes = localId;
		}
		
	}



	overUserImage(){
		this.openAccountSetting = true;
	}
	
	outoverUserImage(){
		this.openAccountSetting = false;
	}

	logout(){
		localStorage.removeItem("userID");
		location.reload()
	}
}

