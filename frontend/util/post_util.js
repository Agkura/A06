export const requestAllPosts = () => {
  return (
    $.ajax({
      url: "api/posts"
    })
  );
}

export const createPost = ( post ) => {
  return (
    $.ajax({
      url: "api/posts",
      data: { post },
      method: "POST"
    })
  );
}

export const requestPost = ( id ) => {
  return (
    $.ajax({
      url: `api/posts/${id}`,
    })
  );
}

export const deletePost = ( id ) => {
  return (
    $.ajax({
      url: `api/posts/${id}`,
      method: "DELETE"
    })
  );
}

export const  editPost = ( post ) => {
  return (
    $.ajax({
      url: `api/posts/${post.id}`,
      data: { post },
      method: "PATCH"
    })
  );
}
