import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor() { }

  getPosts = async () :Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json()) ?? [];
  }
}
