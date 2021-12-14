import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const Homepage = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>Sorin's Blog! I modified it now for testing purposes!</title>
        <meta
          name="description"
          content="I post about programming and web development!"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return { props: { posts: featuredPosts }, revalidate: 1800 };
}

export default Homepage;
