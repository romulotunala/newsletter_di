import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/default.scss"

import paper from "../images/paper.png"
import ciandt_logo from "../images/logo.svg"
import favicon from "../images/favicon/favicon-16x16.png";
import seo_image from "../images/seo_image.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="pageStyles">
      <section className="pageStyles_content">
        <img className="wallpaper" src={paper} alt="" />
        <div className="content">
          <h1 className="content_title content">Diversity & Inclusion</h1>
          <h2 className="content_subtitle">Boas-vindas à Newsletter D&I</h2>
          <div className="content_containerOptions">
            <h3 className="containerOptions_label">Acesse a newsletter:</h3>
            
            <a
              className="containerOptions_uniqueChoice"
              href="https://drive.google.com/file/d/1_fTTZz9jeL9p2_l8sWa95ZSm57sY0U7O/view?usp=sharing"
            >
              Click aqui
            </a>
          </div>
        </div>
      </section>
      <footer className="pageStyles_footer">
        <img src={ciandt_logo} alt="Logo da CI&T" />
        <p>© 2023 CI&T. All Rights Reserved.</p>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  // TODO: Choose and add a plugin to manage SEO.
  return (
    <>
      <html lang="pt-BR" />
      <title>Newsletter D&I</title>
      <link rel="icon" href={favicon} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://romulotunala.github.io/newsletter_di/" />
      <meta property="og:title" content="Newsletter D&I" />
      <meta property="og:description" content="Newsletter sobre diversidade e inclusão" />
      <meta property="og:image" content={seo_image} />
    </>
  )
}
