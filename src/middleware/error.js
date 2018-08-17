import compose from 'koa-compose';

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.log.error(error);

    if (error.isBoom) {
      ctx.body = error.output.payload;
      ctx.status = error.output.statusCode;

      return;
    }
    
    if (error instanceof Error) {
      ctx.body = error.message;
      ctx.status = error.statusCode || 500;

      return;
    }
    
    throw error;
  }
};

export default () => compose([
  handler,
]);
