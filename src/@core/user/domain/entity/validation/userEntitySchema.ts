import * as yup from 'yup';
import {UserEntity} from '../UserEntity';



export const userEntitySchema: yup.ObjectSchema<Omit<UserEntity, 'validation'>> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required().min(3),
});