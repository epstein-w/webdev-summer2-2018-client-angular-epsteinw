
import {Injectable} from "@angular/core";

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch('http://localhost:3000/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  currentUser = () => fetch('http://localhost:3000/currentUser', {
      credentials: 'include'
    }).then(res => res.json())

  createUser = user => fetch('http://localhost:3000/register', {
    credentials: 'include',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  logout = () => fetch('http://localhost:3000/logout',  {
    credentials: 'include',
    method: 'post',
  })
  updateUser = user => fetch('http://localhost:3000/profile',  {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
  deleteUser = user => fetch('http://localhost:3000/profile', {
    method: 'delete',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  })
}
