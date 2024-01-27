
import instance from "./instance";

export const getPosts = () =>
    instance.get('/posts')

export const getPost = (postSlug) => 
    instance.get(`posts/${postSlug}`)

export const getCategories = () =>
    instance.get('/categories')

export const getCategory = (categoryId) =>
    instance.get(`/categories/${categoryId}`)

export const getUser = (userId) => 
    instance.get(`/users/${userId}`)

