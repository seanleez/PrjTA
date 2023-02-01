import { FeatureContainer, ProductSection } from "@components/home";
import { useGetPostQuery, useGetPostsQuery } from "@services/posts";
import { useGetCurrentUserQuery, useRefreshTokenQuery } from "@services/auth";
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

  const { data: token } = useRefreshTokenQuery("");
  console.log("🚀 ~ file: Home.tsx:21 ~ token", token);
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
