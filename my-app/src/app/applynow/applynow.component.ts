import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-applynow',
  templateUrl: './applynow.component.html',
  styleUrls: ['./applynow.component.css']
})
export class ApplynowComponent implements OnInit {

  isTrue = false;
  userData:object;
  txt:any;
  fileData :any;
  data :object;

  constructor(private http: HttpClient) { 
  this.fileSizevalidation();
  }

  private hidePopup(){
    console.log("Hide pop-------------");
    this.isTrue= false;
    (<HTMLInputElement>document.getElementById('name')).value ="";
    (<HTMLInputElement>document.getElementById('email')).value ="";
    (<HTMLInputElement>document.getElementById('file')).value ="";
    (<HTMLInputElement>document.getElementById('mobile')).value ="";
    (<HTMLInputElement>document.getElementById('message')).value ="";
  }

  private getApiServices() {
    console.log("****************getApiServices************");
    return  this.http.get('http://localhost:8080/api')
                 .subscribe(data => {
                        this.data = data;
                        console.log(data);
    });
  }

  private setDetails(userDetails) {
      this.userData = { 
        "name":userDetails.name,
        "email":userDetails.email,
        "mobile":userDetails.mobile,
        "message":userDetails.message,
        "file":userDetails.file
      }

      let headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data;boundary='+Math.random());
      headers.append('Accept', 'application/json');

      console.log(this.userData);
      userDetails.name ="";
      this.isTrue= true;

      return  this.http.post('http://localhost:8080/apply_now',this.userData)
              .subscribe(data => {
                    this.data = data;
                      console.log(data);
       });
}



private fileSizevalidation(){
  window.onload=function(){
    document.getElementById('file').addEventListener('change', checkFile, false);
    function checkFile(e) {
        var file_list = e.target.files;
        for (var i = 0, file; file = file_list[i]; i++) {
          this.fileData=file;
            var sFileName = file.name;
            //console.log("-----------file.name"+file.name);
            var sFileExtension = sFileName.split('.')[sFileName.split('.').length - 1].toLowerCase();
            var iFileSize = file.size;
            var iConvert = (file.size / 10485760).toFixed(2);
    
            if (!(sFileExtension === "pdf" || sFileExtension === "doc" || sFileExtension === "docx") || iFileSize > 1048576) {
                this.txt = "File type : " + sFileExtension + "\n\n";
                this.txt += "Size: " + iConvert + " MB \n\n";
                this.txt += "Please make sure your file is in pdf or doc format and less than 1 MB.\n\n";
                alert(this.txt);
                (<HTMLInputElement>document.getElementById('file')).value ="";
            }
        }
    }
    }//]]> 
}

private uploadFile() {
    console.log("-----------Upload File fileData");
    var input = <HTMLInputElement>document.getElementById('file');
    var file = input.files[0];
    let formData = new FormData();
    formData.append("file", file, file.name);
    return  this.http.post('http://localhost:8080/upload1',formData)
    .subscribe(data => {
          this.data = data;
            console.log(data);
    });
}

  ngOnInit() {
    
    }
    
  }

