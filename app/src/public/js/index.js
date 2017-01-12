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

console.log('%c看代码？来帮我写啊', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:3em;');