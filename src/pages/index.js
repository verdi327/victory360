import React from 'react'
import Layout from '../components/layout/layout'
import Vimeo from '@u-wave/react-vimeo';
import Calendly from '../components/calendly'
import Navbar from '../components/navbar/navbar'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Blockquote from '../components/blockquote/blockquote'
import SEO from '../components/seo'

export default ({data}) => (
  <>
    <SEO
      title='Victory360 Home Page'
      description='Learn why Victory360 is the go to marketing agency for Democratics in Maryland'
    />
    <Navbar/>
    <Layout>
      <div className='header'>
        <Img style={{marginBottom: '10px', borderRadius: '50%'}} fixed={data.file.childImageSharp.fixed} />
        <h2 style={{marginTop: 0}}>
          <span role='img' aria-label='hand-waving' style={{fontSize: '2rem', marginRight: '15px'}}>👋</span>
          I'm Michael DeMos
        </h2>
      </div>
      
      <p>
        I’m a veteran and a small business owner.  I’m also a Maryland native.  I grew up in Baltimore County.  I went to school at McDaniel College and for the last 25 years I’ve been running marketing campaigns for businesses - focusing on direct mail and non profit fundraising. 
      </p>

      <p>I like it here.</p>

      <p>
        I like my neighbors, my employees and the clients I get to work with.  But, like most Marylanders, I think we can do better.  While I believe each individual should be the change they wish to see, I think some problems have to be addressed at the political level.
      </p>

      <p>
        I’m no politician and I’m not well versed in politics, but what I do know is marketing.  I know that to connect with someone, you actually need to know something about them.
      </p>

      <Blockquote>
        Marketing campaigns fail when companies sound too generic; trying to be everything to everyone.  To a consumer, it seems inauthenticate.
      </Blockquote>

      <p>
        What I'm saying isn’t news to you.  You know this, but up until now, you didn’t know it possible to connect with your constituents in a personalized way that is both cost effective and scalable.  Leading brands tailor their marketing based off hundreds of data points on a given individual, political campaigns should be doing the same. 
      </p>

      <p>
        Unfortunately, many are not and we’re still stuck in the age of the one-size-fits-all, spray and pray campaigns that hope if you can just get your name in front of someone enough times they might remember you at the polls. 
      </p>

      <p>
        I know we can do better and I started Victory360 specifically to help the right candidate win.
      </p>

      <Blockquote>
        We focus on connection by using hundreds of data points to target constituents through personalized print and digital campaigns.
      </Blockquote>

      <h3>Interested?</h3>
      <p>The video below outlines are approach in more detail.</p>

      <Vimeo video='365230864' responsive/>

      <h3>What’s the value of a single vote?</h3>

      <p>
        Consider the recent Democratic primary for Baltimore County Executive.  Johnny Olszewski won the bid by 17 votes, a margin of less than 0.1 percent.  As races become closer, it will be candidates that are able to connect with their voters that win, not those with the largest budgets.
      </p>

      <h3>Let's Meet</h3>
      
      <p>
        If you’re ready to connect with your constituents in ways that matter to them, then let’s talk.  Use the following tool below to book time directly on my calendar.
      </p>

      <Calendly/>
    </Layout>
  </>
)

export const query = graphql`
  query {
    file(relativePath: {regex: "/mike-demos/"}) {
      id
      childImageSharp {
        fixed(width: 200, height: 200) {
          base64
          tracedSVG
          aspectRatio
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
          originalName
        }
      }
    }
  }
`