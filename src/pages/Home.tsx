import { FeatureContainer, ProductSection } from "@components/home";
import { useGetPostQuery, useGetPostsQuery } from "@services/postServices";
import React, { useEffect } from "react";

const Home: React.FC = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery("");
  const {
    data: post,
    isFetching,
    isSuccess: isSinglePostSuccess,
  } = useGetPostQuery(5);

  useEffect(() => {
    console.log("posts", posts, isLoading, isSuccess, isError, error);
  }, [posts, isLoading, isSuccess, isError, error]);

  useEffect(() => {
    console.log("post", post, isFetching, isSinglePostSuccess);
  }, [post, isFetching, isSinglePostSuccess]);

  return (
    <>
      <FeatureContainer />
      <ProductSection />
    </>
  );
};

export default Home;
