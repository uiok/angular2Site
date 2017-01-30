import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'backendContent',
  templateUrl: './app/views/backendlayout.html'
})

export class BackendComponent implements OnInit {
	
	ngOnInit() {		
		console.log("Index");
	}
}
