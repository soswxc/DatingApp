import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {readSpanComment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/comments";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers()
    }
    getUsers(){
      this.http.get('https://localhost:5001/api/users').subscribe(response => {
        this.users = response;
      }, error => {
        console.log(error);
      })
    }
}
