const Koa = require('koa');

const app = new Koa();

// 미들웨어 1
// app.use((ctx, next) => {
//     console.log(ctx.url);
//     console.log(1);
//     if(ctx.query.authorized !== '1'){
//         ctx.status = 401; // Unauthorized
//         return;
//     }
//     next().then(() => {
//         console.log('END');
//     });
// });

app.use(async(ctx, next) => {
    console.log(ctx.url);
    console.log(1);
    if(ctx.query.authorized !== '1'){
        ctx.status = 401; // Unauthorized
        return;
    }
    await next();
});

// 미들웨어 2
app.use((ctx, next) => {
    console.log(2);
    next();
});

// 미들웨어 3
app.use(ctx => {
    // console.log(3);
    ctx.body = 'hello world';
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
});