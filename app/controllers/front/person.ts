import { Component } from  '@angular/core'
import {Tabs} from '../tabSet';
import {wordService} from '../../service/wordService';
@Component({
	selector:"personList",
	templateUrl:"./app/views/person/List.html",  
	providers: [wordService,Tabs]

})
export class PersonComponent {

	constructor(private _wordService:wordService){
		_wordService.indexTabList = ["aaa","bbb","ccc"];		
	}
	
} 