module.exports = {
  port: 3000,
  session: {
    secret: 'project2017',
    key: 'project2017',
    maxAge: 2592000000
  },
  //MONGODB_1_PORT_27017_TCP_ADDR is docker link env
  //in test env, we only use localhost automaticly
  mongodb: `mongodb://${process.env.MONGODB_1_PORT_27017_TCP_ADDR || 'localhost'}:27017/myblog`
};
