import React from 'react'
import * as Blog from "../../features/blog/components/index"

const  BlogPage = () => {
  return (
    <div>
        <Blog.BlogCard />
        <Blog.BlogList />
        <Blog.BlogImage />
    </div>
  )
}

export default  BlogPage