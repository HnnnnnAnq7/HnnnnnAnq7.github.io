var posts=["2024/07/17/hello-world/","2024/07/17/my-paly/","2024/07/22/hello/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };