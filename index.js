export default {
  plugins: [],
  css: ['vuefront/scss/main.scss'],
  pages: {
    '/blog/category/:id': 'vuefront/lib/components/templates/blog/category',
    '/blog/post/:id': 'vuefront/lib/components/templates/blog/post',
    '/search/:slug': 'vuefront/lib/components/templates/common/search',
    '/store/category/:id': 'vuefront/lib/components/templates/store/category',
    '/store/product/:id': 'vuefront/lib/components/templates/store/product',
    '/store/cart': 'vuefront/lib/components/templates/store/cart',
    '/page/:id': 'vuefront/lib/components/templates/common/page',
    '/': 'vuefront/lib/components/templates/common/home'
  },
  store: [
    {
      path: 'vuefront',
      module: 'vuefront/lib/store/vuefront'
    },
    {
      path: 'apollo',
      module: 'vuefront/lib/store/apollo'
    },
    {
      path: 'menu',
      module: 'vuefront/lib/store/menu'
    },
    {
      path: 'notification',
      module: 'vuefront/lib/store/notification'
    },
    {
      path: 'blog'
    },
    {
      path: ['blog', 'category'],
      module: 'vuefront/lib/store/blog/category'
    },
    {
      path: ['blog', 'post'],
      module: 'vuefront/lib/store/blog/post'
    },
    {
      path: ['common']
    },
    {
      path: ['common', 'page'],
      module: 'vuefront/lib/store/common/page'
    },
    {
      path: ['store']
    },
    {
      path: ['store', 'cart'],
      module: 'vuefront/lib/store/store/cart'
    },
    {
      path: ['store', 'category'],
      module: 'vuefront/lib/store/store/category'
    },
    {
      path: ['store', 'product'],
      module: 'vuefront/lib/store/store/product'
    }
  ],
  components: {
    Apollo: 'vuefront/lib/components/elements/common/apollo',
    Loader: 'vuefront/lib/components/elements/common/loader',
    Page: 'vuefront/lib/components/elements/common/page',
    Rating: 'vuefront/lib/components/elements/common/rating',
    Icon: 'vuefront/lib/components/elements/common/icon',
    ProductThumb: 'vuefront/lib/components/elements/store/productThumb',
    Product: 'vuefront/lib/components/elements/store/product',
    ProductImage: 'vuefront/lib/components/elements/store/productImage',
    PostThumb: 'vuefront/lib/components/elements/blog/postThumb',
    Menu: 'vuefront/lib/components/elements/common/header/topMenu',
    Nav: 'vuefront/lib/components/elements/common/header/nav',
    ProductsGrid: 'vuefront/lib/components/elements/store/productsGrid',
    Category: 'vuefront/lib/components/elements/store/category',
    CategoryBlog: 'vuefront/lib/components/elements/blog/category',
    PostsGrid: 'vuefront/lib/components/elements/blog/postsGrid',
    // Notification: 'vuefront/lib/components/elements/common/notification/toast',
    Notification: 'vuefront/lib/components/elements/common/notification/snackBar',
    Cart: 'vuefront/lib/components/elements/store/cart',
    Post: 'vuefront/lib/components/elements/blog/post',
    ProductOption: 'vuefront/lib/components/elements/store/productOption',
    ProductAttribute: 'vuefront/lib/components/elements/store/productAttribute',
    Reviews: 'vuefront/lib/components/elements/common/reviews',
    Pagination: 'vuefront/lib/components/elements/common/pagination',
    Sort: 'vuefront/lib/components/elements/store/productSort',
    NavSearch: 'vuefront/lib/components/elements/common/header/navSearch',
    Search: 'vuefront/lib/components/elements/common/search',
    Empty: 'vuefront/lib/components/elements/common/empty',
    Breadcrumbs: 'vuefront/lib/components/elements/common/breadcrumbs',
    Header: 'vuefront/lib/components/elements/common/header',
    Footer: 'vuefront/lib/components/elements/common/footer'
  },
  positions: {
    Top: 'vuefront/lib/components/positions/top',
    Bottom: 'vuefront/lib/components/positions/bottom',
    Left: 'vuefront/lib/components/positions/left',
    Right: 'vuefront/lib/components/positions/right'
  },
  templates: {
    Header: 'vuefront/lib/components/templates/common/header',
    Footer: 'vuefront/lib/components/templates/common/footer',
    Menu: 'vuefront/lib/components/templates/common/menu',
    Layout: 'vuefront/lib/components/templates/common/layout'
  },
  modules: {
    SearchProduct: 'vuefront/lib/components/modules/store/searchProduct',
    SearchPost: 'vuefront/lib/components/modules/blog/searchPost',
    LatestProduct: 'vuefront/lib/components/modules/store/latestProduct',
    SpecialProduct: 'vuefront/lib/components/modules/store/specialProduct',
    LatestPost: 'vuefront/lib/components/modules/blog/latestPost',
    RelatedProduct: 'vuefront/lib/components/modules/store/relatedProduct',
    FeaturedProduct: 'vuefront/lib/components/modules/store/featuredProduct',
    Slideshow: 'vuefront/lib/components/modules/common/slideshow',
    Pages: 'vuefront/lib/components/modules/common/pages',
    StoreCategory: 'vuefront/lib/components/modules/store/category',
    BlogCategory: 'vuefront/lib/components/modules/blog/category'
  }
}