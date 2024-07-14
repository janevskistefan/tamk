import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TamkHttpInterceptorService implements HttpInterceptor {

  #baseUrl = "http://localhost:8080/"
  #matcherForExternalServices = /(?:http|https|\.)+/;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.#matcherForExternalServices.test(req.url)) {
      const modifiedRequest = req.clone({
        url: this.#baseUrl + req.url
      })
      return next.handle(modifiedRequest)
    }
    return next.handle(req)
  }
}
