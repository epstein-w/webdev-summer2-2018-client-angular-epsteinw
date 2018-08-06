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
  findSectionsForCourse = cid => fetch('http://localhost:3000/api/course/' + cid + '/section')
      .then( response => response.json())
}