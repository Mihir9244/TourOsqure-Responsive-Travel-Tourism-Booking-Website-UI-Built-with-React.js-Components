import React from "react";
import Blog01 from "../Assets/Blog1.jpg";
import Blog02 from "../Assets/Blog2.jpg";
import Blog03 from "../Assets/Blog3.jpg";


const Blog = () => {
  const blogPosts = [
    {
      title: "Top 10 Travel Destinations for 2024",
      date: "November 15, 2024",
      description: "Discover the top 10 must-visit travel destinations for 2024. Plan your perfect getaway with our expert recommendations on the best places to explore this year.",
      image: Blog01,
    },
    {
      title: "Smart Travel: Tips for Budget-Friendly Trips",
      date: "October 30, 2024",
      description: "Looking to travel without breaking the bank? Discover expert tips and tricks for planning affordable trips without compromising on adventure.",
      image: Blog02,
    },
    {
      title: "Top Travel Gadgets You Can't Travel Without",
      date: "November 10, 2024",
      description: "Explore the essential travel gadgets you need for a seamless and enjoyable trip. Discover innovative tools that make your journey easier and more fun.",
      image: Blog03,
    },
  ];

  return (
    <section id="blog" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center" data-aos="zoom-out">Travel Blog</h2>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-md-4 my-3" data-aos="zoom-in-down" data-aos-duration="5000" key={index}>
              <div className="card hover-effect">
                <img src={post.image} className="card-img-top" data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" alt={post.title} />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <small className="text-muted">{post.date}</small>
                  <p className="card-text">{post.description}</p>
                  <button className="btn btn-primary"data-aos="zoom-in">Read More <i class="fa-solid fa-eye"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
