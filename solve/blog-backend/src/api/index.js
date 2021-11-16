import Router from 'koa-router';
import posts from './posts';
import auth from './auth';

const api = new Router();

// main에서 호출하면 응답한다.
// 아래 메서드들은 여기에서 직접 구현해도 되지만, 가독성과 유지보수를 위하여 따로 만들었다.
api.use('/posts', posts.routes());
api.use('/auth', auth.routes());

// 라우터를 내보냅니다.
export default api