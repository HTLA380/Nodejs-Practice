export interface Blog {
  _id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  createdBy: string;
  imageUrl?: { data: Buffer; contentType: string };
  createdAt: Date;
}

export async function getBlogs() {
  const res = await fetch(
    `${process.env.URL}/blogs?fields=title,author,description,category,_id,imageUrl,createdAt`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
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
    `${process.env.URL}/blogs?limit=4&fields=title,author,description,category,_id,imageUrl,createdAt`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data.blogs;
}
