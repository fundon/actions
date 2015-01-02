
// http://guides.rubyonrails.org/routing.html

module.exports = [
  'index',    // GET        `posts#index`   `/posts`
  'create',   // POST       `posts#create`  `/posts`
  'new',      // GET        `posts#new`     `/posts/new`
  'show',     // GET        `posts#show`    `/posts/:id`
  'update',   // PATCH/PUT  `posts#update`  `/posts/:id`
  'destory',  // DELETE     `posts#destory` `/posts/:id`
  'edit'      // GET        `posts#edit`    `/posts/:id/edit`
];
