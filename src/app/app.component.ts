import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from './store/auth-store/auth-state';
import { GooglePopupLoginAction } from './store/auth-store/auth-actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public showMenu = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private store: Store<AuthState>
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  public login() {
    this.authService.googleSignin();
  }

  public loginWithGooglePopUp(): void {
    console.log('this.loginWithGooglePopUp()');
    this.store.dispatch(GooglePopupLoginAction());
  }
}
