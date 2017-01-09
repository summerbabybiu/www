module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: `mongodb://${process.env.MONGODB_1_PORT_27017_TCP_ADDR || 'localhost'}:27017/myblog`
};
