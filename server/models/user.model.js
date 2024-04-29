import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACUCAMAAACp1UvlAAAAM1BMVEXk5ueutLepsLPr7O3n6eq1ur2xt7rT1tjQ09W+w8Xh4+TKztDc3+DZ3N2nrbG4vcDEyMvYjOEBAAADk0lEQVR4nO2by3bjIAxAAcu8bAz//7UDaXqSTJMahCW64K7aru6RhRCgCjGZTCaTyWQymUwmk8lkMiEEFhB7CGEXS/7pbwDCm7TKO9rZXcB4t8VvTir5hFLrFgZHDUSSb1mNGGdWrNR7L3lEs4zSMvqT1Y00KGTp+M0qJ5reB4j534P1hWXX2vW5Vc6yjTlie41V+Za8YnXR4o9YtVbGsImBq0j5x6fkWpVgW7Ry7fc8WnubllSJJWAQ27TKl+TQMo3hykSOgK3nHj+gX5NgTnbF9wGj1kJkV+GgzjAIGC2pHHEzBlt71hc0dQ3DZH2BOPM9Lly5tpJqtW5BD2g3o8UhtaQi9YKWBufVK1B6ebwXaX8Y0F6SsoKBQWvJSOll8V4r4Xfs8dKkXtjyRe31V+OF9yLNrz+6HgWu+7pB2oHVn///h7bed+yPhlBLLNi2UB60/QSyjc5lglIrJxjmlFZwtF5NN0zPWNr+HhLyQxIfIJHnR9qqegP1IQ/yCwpcS7ESWxUQWhy30piAcYQLkWH02VWA0Bowx3Mh3XZNLslr14Om3VuxPSxAyy7JdEv+JVZf9RVTct3FbGXEFE+JeBKrjBavVmW14NfKYj6emTE/in6Lid97MbWGQSMUsK8fzZQeEqy7GBj9dmEqmfzgSZjg9H9DJ0rGbeAUzLcYeLNFdShVRoaOQzsbxlvdgCIXjLU27OWX0T7fACzPDPcq42d+D2ZLzsVVZ9Y1urTlsHk/aDgNFrHb5KJWhZe0v/0h+9kdeGMHOUrb6ftokY3b7rnybRHWaVXZsiq1OuvJD7U5Z0z7Q7KKhjRqACHVTH395NCJbBQyhwp9K1eIJKOQABYXqgdqtVfXjhwr/EvaE9peGjMInxuaNtSF46O5M71G6svMXdQBLduFVkXskjtN8Oin9s9msTtk+QR7UWa9iOnOLIOLv+HDrK/7Pxs17hDruB+A0xNilxjai1KrlH9cxOCqWvpRDDdF13oriBFrj1jzZSVKrDnHYCNbiS9ijZeJPQ/sbWJNl6+AHYtD0HJZDdfviR9pqa8d4xvNqIbuglGrYYR0wb7J4qhek57TqojVaeFnEbBeqa4Z47WSlRnWM3uGpWZJ4gbZ+6jZv/EjS3gqhoF7RuLwXhX/X8dbvO5UjH0MSK+qoUiWvuuH12lXgR6k6uO0DRtQvQpnFSz3z2oA5/8l+fp0wcbwN5LJZDKZTJ74B5OfLETR09/BAAAAAElFTkSuQmCC",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
