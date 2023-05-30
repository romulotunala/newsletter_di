import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/default.scss"

import paper from "../images/paper.png"
import ciandt_logo from "../images/logo.svg"
import favicon from "../images/favicon/favicon-16x16.png";

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
            
            <a href="#" className="containerOptions_uniqueChoice">Click aqui</a>
          </div>
        </div>
      </section>
      <footer className="pageStyles_footer">
        <img src={ciandt_logo} alt="" />
        <p>© 2023 CI&T. All Rights Reserved.</p>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="pt-BR" />
      <title>Newsletter D&I</title>
      <meta name="image" content='./src/images/seo_image.png' />
      <link rel="icon" href={favicon} />
    </>
  )
}
