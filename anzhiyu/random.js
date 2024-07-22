var posts=["2024/07/17/hello-world/","2024/07/22/学习写md文件/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };