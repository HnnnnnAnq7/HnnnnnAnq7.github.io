var posts=["2024/07/17/hello-world/","2024/07/17/my-paly/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };