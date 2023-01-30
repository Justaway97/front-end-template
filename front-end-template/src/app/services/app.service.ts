import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { URL } from './app.service.constant';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private authentication: any;
  private user: any;

  setAuthentication(authentication: any) {
    this.authentication = authentication;
  }

  setUser(user: any) {
    this.user = user;
  }

  constructor(private http: HttpClient, protected snackBar: MatSnackBar) {}

  get(url: string, param?: any) {
    return new Promise((resolve, reject) => {
      let finalUrl = URL.index.concat(url);
      if (param) {
        finalUrl = finalUrl.concat('?').concat(this.getQueryString(param));
      }
      this.http.get(finalUrl, { observe: 'response' }).subscribe(
        (data: any) => {
          // update authentication
          // console.log(data.headers.get('Content-Length'));
          if (data.body.message) {
            this.snackBar.open(data.body.message, 'OK', { duration: 3 * 1000 });
          }
          resolve(data.body.data);
        },
        (error) => {
          this.snackBar.open(error.error.error, 'OK', { duration: 3 * 1000 });
          reject(null);
        }
      );
    });
  }

  post(url: string, value: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(URL.index.concat(url), value, { observe: 'response' })
        .subscribe(
          (data: any) => {
            // update authentication
            // console.log(data.headers.get('Content-Length'));
            if (data.body.message) {
              this.snackBar.open(data.body.message, 'OK', {
                duration: 3 * 1000,
              });
            }
            resolve(data.body.data);
          },
          (error) => {
            this.snackBar.open(error.error.error, 'OK', { duration: 3 * 1000 });
            reject(null);
          }
        );
    });
  }

  delete(url: string, param?: any) {
    return new Promise((resolve, reject) => {
      let finalUrl = URL.index.concat(url);
      if (param) {
        finalUrl = finalUrl.concat('?').concat(this.getQueryString(param));
      }
      this.http.delete(finalUrl, { observe: 'response' }).subscribe(
        (data: any) => {
          // update authentication
          // console.log(data.headers.get('Content-Length'));
          if (data.body.message) {
            this.snackBar.open(data.body.message, 'OK');
          }
          resolve(data.body.data);
        },
        (error) => {
          this.snackBar.open(error.error.error, 'OK');
          reject(null);
        }
      );
    });
  }

  getIndex() {
    const response = this.http.get(URL.index).subscribe((data) => {
      console.log('test index');
    });
    console.log(response);
    return response;
  }

  getHome() {
    return this.http.get(URL.home);
  }

  getOptions(param?: any) {
    return this.http.get(
      URL.option.concat('?').concat(this.getQueryString(param))
    );
  }

  updateHome(value: any) {
    return this.http.post(URL.updateHome, value);
  }

  private getQueryString(param: any) {
    let keys = Object.keys(param);
    let queryString = '';
    for (const key of keys) {
      queryString = queryString.concat(key).concat('=').concat(param[key]);
    }
    return queryString;
  }
}
