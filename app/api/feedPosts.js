import client from "./client";

const endpoint = "/posts";

const getFeedPosts = () => client.get(endpoint);

const addFeedPost = (post, onUploadProgress) => {
  const data = new FormData();
  data.append("post", post.post);
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addFeedPost,
  getFeedPosts,
};
