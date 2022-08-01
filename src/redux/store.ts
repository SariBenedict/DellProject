import { configureStore } from '@reduxjs/toolkit'
import scannersReducer from './slices/scannersSlice'


export const store = configureStore({
  reducer: {
  /*
  reducerName:reducer
  reducerName-(this is how you will refer to it in your code for example:state.reducerName.scanners).
  reducer-is the reducer you've imported from your slice.
  as you can see below,l called my reducer in the scannersSlice scannersReducer,
  and so when i export scannersSlice.reducr that is what is implicitly exported.
  ----------------------------------------------------------------
  there can be many reducers, for example:
      posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
    basicly for every slice .
   */
  scannersReducer:scannersReducer,
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch