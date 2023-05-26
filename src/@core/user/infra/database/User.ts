import {Column, Entity, PrimaryColumn} from 'typeorm';


@Entity('users')
export class User {
  @PrimaryColumn()
    id: string;

  @Column({
    type: 'text'
  })
    name: string;

  @Column({
    type: 'text'
  })
    email: string;

  @Column({
    type: 'text'
  })
    password: string;
}