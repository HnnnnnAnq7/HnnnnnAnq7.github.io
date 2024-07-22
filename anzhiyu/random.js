var posts=["2024/07/22/Front-matter 的基本认识/","2024/06/23/cehsi/","2024/07/17/hello-world/","2024/07/22/测试标签/","2024/07/22/Untitled/","2024/07/22/学习写md文件/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };