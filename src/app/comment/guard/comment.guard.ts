import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Comments } from '../Comments';
import { CommentService } from '../comment.service';
import { Observable } from 'rxjs';

// export const commentGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export class CommentGuard implements Resolve<Comments[]>{

  constructor(private commentService: CommentService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comments[]> | Promise<Comments[]> {
    return this.commentService.getComments();
  }
  
}