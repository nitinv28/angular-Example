import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id;
  firstname;
  lastname;
  data: any = null;
   constructor(private http: HttpClient){
   //this.callServices();
  
  }

 private callServices() {
    return  this.http.get('http://localhost:8089/eta-web/getDetails')
               
                 .subscribe(data => {
                        this.data = data;
                        console.log(data);
                        this.setData();
                });
  }

  private setData(){
  	 this.title =this.data.firstName;
     this.id =this.data.id;
     this.firstname = this.data.firstName;
     this.lastname = this.data.lastName
  }
  
}
