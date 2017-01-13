var marked = require('marked'),
    Parse = require('parse/node'),
    Post = Parse.Object.extend('Post');

module.exports = {
  // {
  //   title
  //   summary
  //   author
  //   content
  //   pv not needed
  // }
  create: function(info) {
    var post = new Post();
    post.set('title', info.title);
    post.set('summary', info.summary);
    post.set('author', info.author);
    post.set('content', marked(info.content));
    post.set('origin_content', info.content);
    post.set('pv', 0);
    return post.save();
  },

  get: function(post_id) {
    var query = new Parse.Query(Post);
    query.include('author');
    return query.get(post_id)
            .then(post => {
              post.increment('pv');
              //这里有可能会等pv的写操作比较长时间，可以优化
              return post.save();
            });
  },
 
  get_page: function(page) {
    //TODO hard code limit = 10
    let limit = 10;
    var total = 0;
    var total_page = 0;
    var query = new Parse.Query(Post);
    return query.count()
    .then(count => {
      total = count;
      total_page = Math.ceil(count/limit);
      if (page > total_page) {
        return new Parse.Promise.as([]);
      }
      query.descending('updatedAt');
      query.limit(limit);
      query.skip(limit * (page - 1));
      return query.find()
    })
    .then(posts => {
        return new Parse.Promise.resolve({
          'total_post': total,
          'total_page': Math.ceil(total/limit),
          'page': page,
          'limit': limit,
          'posts': posts
        })
    })
  },

  delete: function(post_id) {
    var query = new Parse.Query(Post);
    return query.get(post_id)
    .then(post => {
      return post.destroy();
    })
    .catch(e => {
      return new Parse.Promise.error(e.message);
    });
  }

}