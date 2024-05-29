import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { InputError } from './error.js';;

import dotenv from 'dotenv';
dotenv.config();

import { getData, setData } from './datastore.js'

/* -------------------------------------------------------------------------- */
/*                               Auth Functions                               */
/* -------------------------------------------------------------------------- */

const authRegister = async (email, password, name) => {
    const data = getData();

    if (email === '') {
      throw new InputError('Invalid email');
    }
  
    if (password.length < 5) {
      throw new InputError('Password must be at least 5 characters long');
    }
  
    if (name.length < 3 || name.length > 20) {
      throw new InputError('Name must between 3 to 20 characters long');
    }
  
    const emailCheck = data.find(user => user.email = email);
    if (emailCheck) {
      throw InputError('This email is already in use');
    }
  
    const nameCheck = data.find(user => user.username = name);
    if (nameCheck) {
      throw InputError('This username is already in use');
    }
  
    console.log(password);
    const passwordHash = bcrypt.hashSync(password, 10);
    const user = { email: email, password: passwordHash, username: name, friend_list: [], to_do_list: [] };
    data.push(user);
    setData(data);
    const token = jwt.sign({ email }, JWT_SECRET, { algorithm: 'HS256' });
    return token;
};

const authLogin = async (email, password) => {
    const user = data.find(user => user.email = email);
    if (user) {
      const passwordsMatch = bcrypt.compareSync(password, user.password);
      if (!passwordsMatch) {
        throw new InputError('Passwords do not match');
      } else {
        const token = jwt.sign({ email }, JWT_SECRET, { algorithm: 'HS256' });
        return token;
      }
    } else {
      throw new InputError('Invalid email');
    }
};

export { authRegister, authLogin };