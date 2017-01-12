var app = new Vue({
    el: "#app",
    data: {
        post_loaded: false,
        post_load_error: false,
        posts: [],
        total_page: 0,
        current_page: 0,
        post_count: 0
    }
})

function get_page(page) {
  Vue.http.get('/api/post/list').then((response) => {
      //TODO
      console.log(response);
      var body = response.body;
      app.post_loaded = true;
      app.posts = body.posts;
      app.total_page = body.total_page;
      app.current_page = body.page || 1;
      app.post_count = body.total_post;
  }, (response) => {
      app.post_load_error = true;
  });
}

get_page(1);