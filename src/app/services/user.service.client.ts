
import {Injectable} from "@angular/core";

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch(' https://quiet-bastion-67126.herokuapp.com/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  currentUser = () => fetch(' https://quiet-bastion-67126.herokuapp.com/currentUser', {
      credentials: 'include'
    }).then(res => res.json())

  createUser = user => fetch(' https://quiet-bastion-67126.herokuapp.com/register', {
    credentials: 'include',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  logout = () => fetch(' https://quiet-bastion-67126.herokuapp.com/logout',  {
    credentials: 'include',
    method: 'post',
  })
  updateUser = user => fetch(' https://quiet-bastion-67126.herokuapp.com/profile',  {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
  deleteUser = user => fetch(' https://quiet-bastion-67126.herokuapp.com/profile', {
    method: 'delete',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  })
}
