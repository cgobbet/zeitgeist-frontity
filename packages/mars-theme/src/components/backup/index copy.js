import { Global, Head, connect, css, styled } from "frontity";

import Header from "./header";
import List from "./list";
import Loading from "./loading";
import PageError from "./page-error";
import Post from "./post";
import React from "react";
import Switch from "@frontity/components/switch";
import Title from "./title";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${'' /* background-color: rgba(255, 255, 255, 0.1); */}
  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 3em;
  }
  h4 {
    font-family: "Roboto", sans-serif;
    font-size: 1.2em;
    color: "white";
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  ${'' /* background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1),
    rgba(66, 174, 228, 0)
  ); */}
`;
