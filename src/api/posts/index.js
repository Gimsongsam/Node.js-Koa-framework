import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

// (라우트 설정, printInfo 함수 호출)
posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.patch('/:id', postsCtrl.update);

export default posts;