import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  // GET all users
  getAllUsers(): Observable<AxiosResponse<User[]>> {
    return this.httpService
      .get('https://dummyjson.com/users')
      .pipe(map((response) => response.data.users));
  }

  // GET one user
  findOne(id: string): Observable<AxiosResponse<User>> {
    return this.httpService
      .get(`https://dummyjson.com/users/${id}`)
      .pipe(map((response) => response.data));
  }

  // ADD a new user
  addUser(body: User): Observable<AxiosResponse<User>> {
    return this.httpService
      .post('https://dummyjson.com/users/add', {
        firstName: body.firstName,
        lastName: body.lastName,
      })
      .pipe(map((response) => response.data));
  }

  // UPDATE a user
  updateUser(body: User, id: string): Observable<AxiosResponse<User>> {
    return this.httpService
      .put(`https://dummyjson.com/users/${id}`, {
        firstName: body.firstName,
        lastName: body.lastName,
      })
      .pipe(map((response) => response.data));
  }

  // DELETE a user
  deleteUser(id: string): Observable<AxiosResponse<User>> {
    return this.httpService
      .delete(`https://dummyjson.com/users/${id}`)
      .pipe(map((response) => response.data));
  }
}
