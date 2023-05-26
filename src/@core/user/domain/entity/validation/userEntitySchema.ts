import * as yup from 'yup';
import {UserEntity} from '../UserEntity';



export const userEntitySchema: yup.ObjectSchema<Omit<UserEntity, 'validation'>> = yup.object().shape({
  id: yup.string().required('id is required').uuid('id is invalid'),
  name: yup.string().required('name is required'),
  email: yup.string().required('email is required'),
  password: yup.string().required('password is required').min(3, 'password minimum length of 3'),
});