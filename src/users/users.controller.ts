import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): Observable<AxiosResponse<User[]>> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<AxiosResponse<User>> {
    return this.usersService.findOne(id);
  }

  @Post('add')
  addUser(@Body() body: User): Observable<AxiosResponse<User>> {
    return this.usersService.addUser(body);
  }

  @Put(':id')
  updateUser(
    @Body() body: User,
    @Param('id') id: string,
  ): Observable<AxiosResponse<User>> {
    return this.usersService.updateUser(body, id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Observable<AxiosResponse<User>> {
    return this.usersService.deleteUser(id);
  }
}
