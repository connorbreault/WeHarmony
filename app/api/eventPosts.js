import client from "./client";

const endpoint = "/events";

const getEventPosts = () => client.get(endpoint);

const addEventPost = (post, onUploadProgress) => {
  const data = new FormData();
  data.append("post", post.post);
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addEventPost,
  getEventPosts,
};
