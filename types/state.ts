import {Product, Post, MenuItem, Pagination, Category, Cart} from "~/types";

export interface Dictionary<T> {
  [key: string]: T
}

export interface RootState {
  error: boolean | string
}

export interface NotificationState {
  message: string
}

export interface CartState {
  cart: Dictionary<Cart>
}

export interface CategoryState {
  menuItems: MenuItem[]
  category: Dictionary<Category>
}

export interface CategoryBlogState {
  menuItems: MenuItem[]
}

export interface MenuState {
  entities: Array<MenuItem>
}

export interface ProductState {
  entities: Dictionary<Pagination<Product>>
  product: Dictionary<Product>
}

export interface PostState {
  entities: Dictionary<Pagination<Post>>
  post: Dictionary<Post>
}