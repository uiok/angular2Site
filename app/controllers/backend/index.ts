import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bodyContent',
  templateUrl: './app/views/backend/index/index.html'
})

export class BackendIndexComponent implements OnInit {
	
	ngOnInit() {		
		console.log("Index");
	}
}

@Component({
	selector:'sidebarPartial',
	templateUrl:'./app/views/backendSidebarPartial.html'

})

export class SlidebarPartialComponent implements OnInit {
	
	ngOnInit() {
		console.log("sidebarPartial");
	}
}

