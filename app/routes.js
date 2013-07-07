module.exports = function(match) {
  match('',                   'home#index');
  match('/demo',			  'demo#index');
	match('/contact',			'contact#index');
	match('/about',			'about#index');
};
