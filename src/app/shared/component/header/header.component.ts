import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { User } from '../../interface/Ilogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loadingEnable: boolean;
  sidenavEnable = false;
  user: User;

  @Output()
  sidenav = new EventEmitter();

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }

  constructor(public dialog: MatDialog, private router: Router,
    public loginService: LoginService,
    public loadingService: LoadingService) { }


  ngOnInit() {
    this.loginService.loggedIn.subscribe(next => {
      this.user = next;
    });
    this.loadingService.progressEnable.subscribe(next => {
      this.loadingEnable = next;
    });
  }
}
