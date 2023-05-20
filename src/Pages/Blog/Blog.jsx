import { Helmet } from "react-helmet";

const Blog = () => {
  const pageTitle = "Blog";

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} - Toy Groove`}</title>
      </Helmet>
      <h3>FAQ</h3>
    </div>
  );
};

export default Blog;
