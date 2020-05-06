import { createSelector } from '@reduxjs/toolkit';

export const getPosts = (state) => state.news.data;
export const getSelectedIds = (state) => state.news.savedPostsIds;

export const getSelectedPosts = createSelector(
  getPosts,
  getSelectedIds,
  (posts, selectedIds) => posts.filter(post => selectedIds.includes(parseInt(post.id)))
)