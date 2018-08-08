import {Injectable} from '@angular/core';


@Injectable()
export class SectionServiceClient {
  createSection = section => fetch('http://localhost:3000/api/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
    credentials: 'include',
    body: JSON.stringify(section)
    })
  createSectionForCourse = (course, section) => fetch ('http://localhost:3000/api/course/' + course.id + '/section/', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(section)
  })
  editSection = section => fetch('http://localhost:3000/api/section', {
    method: 'put',
  headers: {
    'content-type': 'application/json'
  },
  credentials: 'include',
  body: JSON.stringify(section)
  })
  deleteSection = section => fetch ('http://localhost:3000/api/section', {
    method: 'delete',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(section)
  })
  findSectionsForCourse = cid => fetch('http://localhost:3000/api/course/' + cid + '/section')
      .then( response => response.json())
  findAllSections = () => fetch('http://localhost:3000/api/section/')
      .then(response => response.json())
  enroll = sectionId => fetch('http://localhost:3000/api/section/' + sectionId + '/enroll', {
    method: 'put',
    credentials: 'include'
  })
}
