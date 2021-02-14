import client from "./client";

const endpoint = "/wanted";

const getWantedPosts = () => client.get(endpoint);

const addWantedPost = (post, onUploadProgress) => {
  const data = new FormData();
  data.append("post", post.post);
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addWantedPost,
  getWantedPosts,
};
