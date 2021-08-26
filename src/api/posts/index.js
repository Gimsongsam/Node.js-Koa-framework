import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

// (라우트 설정, printInfo 함수 호출)
posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

const post = new Router(); // /api/posts/:id
posts.get('/', postsCtrl.read);
posts.delete('/', postsCtrl.remove);
posts.patch('/', postsCtrl.update);

// 리팩토링
posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;