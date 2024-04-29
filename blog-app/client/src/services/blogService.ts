const URL = "http://localhost:8080/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh0ZXRhdW5nbGluIiwidXNlcklkIjoiNjYyZGZlYzk5ZTA1NjZlNGUyMmU5YWQ3IiwiaWF0IjoxNzE0MjkwNDU2LCJleHAiOjE3MTY4ODI0NTZ9.IjnCWRCEVqr52x0jzkmRYd94JZthnVqoyTLcQ1C5oLY";

export interface BlogInterface {
  _id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  createdBy: string;
  imageUrl?: string;
  createdAt: Date;
}

export interface BlogDetail extends BlogInterface {
  content: string;
}

export async function getBlogs() {
  const res = await fetch(
    `${URL}/blogs?fields=title,author,description,category,_id,imageUrl,createdAt&limit=6&page=2`,
    {
      headers: {
        method: "GET",
        Authorization: `Bearer ${TOKEN}`,
      },
      cache: "no-cache",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.blogs;
}

export async function getRecentBlogs() {
  const res = await fetch(
    `${URL}/blogs?limit=4&fields=title,author,description,category,_id,imageUrl,createdAt`,
    {
      headers: {
        method: "GET",
        Authorization: `Bearer ${TOKEN}`,
      },
      cache: "no-cache",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.blogs;
}

export async function getSingleBlog(id: string) {
  const res = await fetch(`${URL}/blogs/${id}`, {
    headers: {
      method: "GET",
      Authorization: `Bearer ${TOKEN}`,
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.blog;
}

export async function getBlogsByCategoryName(name: string) {
  const res = await fetch(
    `${URL}/blogs?limit=3&fields=title,author,description,category,_id,imageUrl,createdAt&category=${name}`,
    {
      headers: {
        method: "GET",
        Authorization: `Bearer ${TOKEN}`,
      },
      cache: "no-cache",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.blogs;
}
