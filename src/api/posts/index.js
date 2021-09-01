// 핵심
import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedin';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
// 로그인이 되었는지 검사 -> 포스트 id와 유저 id값 비교
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

// 리팩토링 - 아이디 값을 검사 후 다음 기능을 실행하겠다.
posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;