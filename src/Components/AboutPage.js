import React from "react";

function AboutPage() {

  const aboutStyle = {
    paddingTop: "100px",
  }

  return (
    <div style={aboutStyle}>
      <h1 style={{ paddingBottom: "30px" }}>Welcome to Westwind Equestrian</h1>

      <h2>Our Mission</h2>
      <p>
        At Westwind Equestrian, our mission is to provide exceptional care,
        training, and experiences for horses and riders of all levels. We are
        dedicated to fostering a supportive and welcoming community where
        equestrians can pursue their passion and achieve their goals.
      </p>

      <h2>About Us</h2>
      <p>
        Westwind Equestrian was founded in [Year] by [Founder's Name], a
        lifelong equestrian with a passion for horses and a vision for creating
        a positive and inclusive equestrian environment. What started as a small
        boarding facility has grown into a thriving community of riders,
        trainers, and horse enthusiasts.
      </p>

      <h2>Our Services</h2>
      <ul>
        <li>
          <strong>Boarding:</strong> We offer full-care and partial-care
          boarding options tailored to meet the needs of both horse and rider.
        </li>
        <li>
          <strong>Training:</strong> Our experienced trainers provide
          personalized training programs for riders of all disciplines, from
          beginner to advanced.
        </li>
        <li>
          <strong>Lessons:</strong> We offer riding lessons for riders of all
          ages and skill levels, from introductory lessons for beginners to
          advanced training for competitive riders.
        </li>
        <li>
          <strong>Clinics and Workshops:</strong> We host a variety of clinics
          and workshops throughout the year, covering topics such as
          horsemanship, riding skills, and horse care.
        </li>
        <li>
          <strong>Sales and Consignment:</strong> We occasionally have horses
          available for sale or consignment. Please inquire for current
          availability.
        </li>
      </ul>

      <h2>Meet Our Team</h2>
      <img src="team-photo.jpg" alt="Team" />
      <ul>
        <li>
          <strong>[Founder's Name]:</strong> Founder and Head Trainer
        </li>
        <li>
          <strong>[Trainer's Name]:</strong> Assistant Trainer
        </li>
        <li>
          <strong>[Barn Manager's Name]:</strong> Barn Manager
        </li>
      </ul>

      <h2>Testimonials</h2>
      <blockquote>
        <p>
          "I've been boarding my horse at [Your Equestrian Business Name] for
          over two years now, and I couldn't be happier with the care and
          attention he receives. The staff are knowledgeable, friendly, and
          truly care about the well-being of the horses." - [Client Name]
        </p>
      </blockquote>
      <blockquote>
        <p>
          "The trainers at [Your Equestrian Business Name] have helped me
          progress so much as a rider. Their expertise and guidance have been
          invaluable on my journey as an equestrian." - [Client Name]
        </p>
      </blockquote>

      <h2>Contact Us</h2>
      <p>
        <strong>Location:</strong> [Your Address]
      </p>
      <p>
        <strong>Phone:</strong> [Your Phone Number]
      </p>
      <p>
        <strong>Email:</strong> [Your Email Address]
      </p>
      <p>
        <strong>Social Media:</strong> [Links to Social Media Profiles]
      </p>

      <h2>Visit Us</h2>
      <p>
        We invite you to visit [Your Equestrian Business Name] and experience
        the magic of the equestrian world firsthand. Whether you're a seasoned
        rider or new to the horse world, we look forward to welcoming you to our
        community.
      </p>
    </div>
  );
};

export default AboutPage;