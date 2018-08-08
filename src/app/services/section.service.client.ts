import {Injectable} from '@angular/core';


@Injectable()
export class SectionServiceClient {
  createSection = section => fetch(' https://quiet-bastion-67126.herokuapp.com/api/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
    credentials: 'include',
    body: JSON.stringify(section)
    })
  createSectionForCourse = (course, section) => fetch (' https://quiet-bastion-67126.herokuapp.com/api/course/' + course.id + '/section/', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(section)
  })
  editSection = section => fetch(' https://quiet-bastion-67126.herokuapp.com/api/section', {
    method: 'put',
  headers: {
    'content-type': 'application/json'
  },
  credentials: 'include',
  body: JSON.stringify(section)
  })
  deleteSection = section => fetch (' https://quiet-bastion-67126.herokuapp.com/api/section', {
    method: 'delete',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(section)
  })
  findSectionsForCourse = cid => fetch(' https://quiet-bastion-67126.herokuapp.com/api/course/' + cid + '/section')
      .then( response => response.json())
  findAllSections = () => fetch(' https://quiet-bastion-67126.herokuapp.com/api/section/')
      .then(response => response.json())
  enroll = sectionId => fetch(' https://quiet-bastion-67126.herokuapp.com/api/section/' + sectionId + '/enroll', {
    method: 'put',
    credentials: 'include'
  })
}
