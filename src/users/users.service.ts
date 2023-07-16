import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private usersList: Array<UserInterface> = [
    {
      id: 1,
      firstName: 'test',
      lastName: 'test',
      //The passwords will come from the database and will be hashed!!!
      //await bcrypt.hash(password, 10)
      password: 'test',
      email: 'test@abv.bg',
      age: 20,
      role: 10,
    },
    {
      id: 2,
      firstName: 'test1',
      lastName: 'test1',
      password: 'test',
      email: 'test1@abv.bg',
      age: 20,
      role: 10,
    },
    {
      id: 3,
      firstName: 'test2',
      lastName: 'test2',
      password: 'test',
      email: 'test2@abv.bg',
      age: 20,
      role: 10,
    },
  ];

  public async findOne(email: string): Promise<UserInterface> {
    return this.usersList.find((user) => user.email === email);
  }

  //In real world example we will have something like this:
  //
  // public async register({
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  // }): Promise<any> {
  //   return await this.userSchema.insertOne({
  //     firstName,
  //     lastName,
  //     email,
  //     password: await bcrypt.hash(password, 10),
  //   });
  // }
}
