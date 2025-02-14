import React from "react";
import "./Testi.css";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione dolore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione dolore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione dolore.",
    name: "Gladis Lennon",
    role: "Head of SEO"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione dolore.",
    name: "Gladis Lennon",
    role: "Head of SEO"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a voluptatem quidem nulla quisquam natus velit provident earum esse.",
    name: "Gladis Lennon",
    role: "Head of SEO"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
    name: "Gladis Lennon",
    role: "Head of SEO"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora.",
    name: "Gladis Lennon",
    role: "Head of SEO"
  }
];

const Testi = () => {
  return (
    <div className="container1">
      <div className="header1">
      </div>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-user">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
                className="user-image"
              />
              <div>
                <p className="user-name">{testimonial.name}</p>
                <p className="user-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testi;
