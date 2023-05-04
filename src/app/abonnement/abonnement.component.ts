import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {
  public modal:boolean=false;
  public abonnement:string="";
  ngOnInit(): void {

  
  }

onSelect(selectedValue:EventTarget| null) {
  if(selectedValue){
   console.log (selectedValue);
    this.modal=true;

  }


  
 
}

}
