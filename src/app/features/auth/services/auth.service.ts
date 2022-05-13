import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<IUser | null>;
  public currentUser: Observable<IUser | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<IUser | null>(
      JSON.parse(localStorage.getItem('SALUX@currentUser') as string)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IUser | null {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string): Observable<IUser> {
    console.log(username, password);
    const user: IUser = { name: 'Usuário teste' };
    //TODO update to real api using post request
    return of<IUser>(user).pipe(
      map((user) => {
        localStorage.setItem('SALUX@currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('SALUX@currentUser');
    this.currentUserSubject.next(null);
  }
}
