import { Fragment } from 'react';
import "./BlogContainer.css";

const BlogContainer = () => {
    return (
        <Fragment>
            <div className="blog-outer-container">
                <div className="heading-blog-container">
                    ALL BLOG POSTS
                </div>
                <div className="all-blogs-container">
                    <div className="blog">
                        <img src="/event.png" alt="" />
                        <div className="text-blog">
                            <div className="time-name">Alec Whitten • 17 Jan 2022</div>
                            <div className="blog-heading">Bill Walsh leadership lessons</div>
                            <div className="blog-para">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
                            <button className="blog-button">Read More</button>
                        </div>
                        
                    </div>
                    <div className="blog">
                        <img src="/event.png" alt="" />
                        <div className="text-blog">
                            <div className="time-name">Alec Whitten • 17 Jan 2022</div>
                            <div className="blog-heading">Bill Walsh leadership lessons</div>
                            <div className="blog-para">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
                            <button className="blog-button">Read More</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default BlogContainer
