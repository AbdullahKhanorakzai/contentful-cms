import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "egl0uf2c3zz6",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, img, id };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
