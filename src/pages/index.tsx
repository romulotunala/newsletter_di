import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/default.scss"

import ptbr_flag from "../images/pt-br_flag.png"
import en_flag from "../images/en_flag.png"
import paper from "../images/paper.png"
import ciandt_logo from "../images/logo.svg"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="pageStyles">
      <section className="pageStyles_content">
        <img className="wallpaper" src={paper} alt="" />
        <div className="content">
          <h1 className="content_title content">Diversity & Inclusion</h1>
          <h2 className="content_subtitle">Welcome to the D&I Newsletter</h2>
          <div className="content_containerOptions">
            <h3 className="containerOptions_label">Choose your language to continue.</h3>
            
            <a href="#" className="containerOptions_choice">
              <div className="choice_buttons">
                <img src={ptbr_flag} alt="" />
              </div>
              <span>Português</span>
            </a>
            <a href="#" className="containerOptions_choice">
              <div className="choice_buttons">
                <img src={en_flag} alt="" />
              </div>
              <span>English</span>
            </a>
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

export const Head: HeadFC = () => <title>Home Page</title>
