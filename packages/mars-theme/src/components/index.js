import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

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
    font-family: "Roboto", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
h1 {
    font-family: 'Oswald', sans-serif;
    color: rgb(120,24,32);
    ${'' /* text-shadow: 0.5px 0.5px 0.5px black; */}
    font-size: 2em;
   }
  h1.css-1oh9oce-Title {
    font-family: 'Oswald', sans-serif;
    color: rgb(120,24,32);      
    text-shadow: 0.5px 0.5px 0.5px black;
    font-size: 2em;
    padding-top: 0.7rem;
    padding-bottom: 0.5rem;
   }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;

  h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 5em;
    text-shadow: 1px 1px 1px black;
    color: rgb(120,24,32);
    margin-bottom: 8px;
    padding-right: 0px;
  }
  h4 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.2em;
    ${'' /* text-shadow: 1px 1px 1px black; */}
    color: #4C4B4D;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;

${'' /* spacing excerpt */}
  .css-10tbvjy-Excerpt {
  line-height: 1.4em;
  color: rgba(12,17,43,0.8);
}
`;
