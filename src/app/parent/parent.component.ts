import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

public num1:number = 0;
public num2:number = 0;
public result:number = 0;

catch(value:any){
   this.result=value;
}


}
