import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FacebookService, InitParams,LoginResponse } from 'ngx-facebook';
import {Http} from '@angular/http';
import {data} from '../data' ;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit  {
	data :data;
	url = "http://localhost:3000/posts";
	constructor(private http: Http){
	
	}
	
	createpost(a,b){
		
	this.data.suggestion=a;
	this.data.description=b;
	
	
		console.log(this.data);
	}

	ngOnInit() {
		
		this.http.post(this.url,HTMLBodyElement).subscribe(data => {
			this.data = data['data'];
		});
			
	}


	opendropdown(){
		var options=document.getElementById("options");
		if (options.style.display == "block") {
			options.style.display = "none";
		}
		else {
			
			options.style.display = "block";
			options.setAttribute('class', 'dropdown card open');
		}
		
}

}