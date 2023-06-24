const Koa = require('koa');
const Router = require('koa-router');
const port = process.env.PORT || 8888;
const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
    ctx.type = 'html';
    ctx.body = '<h1>hello world!</h1>';
})

app.use(router.routes());
app.use(router.allowedMethods({

}));

app.listen(port, () => {
    console.log(`应用已经启动，http://localhost:${port}`);
})