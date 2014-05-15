
// http://guides.rubyonrails.org/routing.html

module.exports = [
  'index',    // GET        `posts#index`   `/posts`
  'new',      // GET        `posts#new`     `/posts/new`
  'create',   // POST       `posts#create`  `/posts`
  'show',     // GET        `posts#show`    `/posts/:id`
  'edit',     // GET        `posts#edit`    `/posts/:id/edit`
  'update',   // PATCH/PUT  `posts#update`  `/posts/:id`
  'destory'   // DELETE     `posts#destory` `/posts/:id`
];
