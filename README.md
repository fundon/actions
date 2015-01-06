# Actions

Actions for a resourceful controller, CURD.    
___Rails-like actions.___

## Source code

```js
// http://guides.rubyonrails.org/routing.html

// Resource
exports.ACTIONS = [
  'index',    // GET        `posts#index`   `/posts`
  'create',   // POST       `posts#create`  `/posts`
  'new',      // GET        `posts#new`     `/posts/new`
  'show',     // GET        `posts#show`    `/posts/:id`
  'update',   // PATCH/PUT  `posts#update`  `/posts/:id`
  'destory',  // DELETE     `posts#destory` `/posts/:id`
  'edit'      // GET        `posts#edit`    `/posts/:id/edit`
];

// SingletonResource
exports.SINGLETON_ACTIONS = [
  'show',     // GET        `post#show`    `/post/:id`
  'create',   // POST       `post#create`  `/post`
  'update',   // PATCH/PUT  `post#update`  `/post/:id`
  'destory',  // DELETE     `post#destory` `/post/:id`
  'new',      // GET        `post#new`     `/post/new`
  'edit'      // GET        `post#edit`    `/post/:id/edit`
];
```
