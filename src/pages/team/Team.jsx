import { GraduationCap, UserStar } from "lucide-react";
import Navbar from "../../layouts/Navbar";
import "./Team.css";

export default function TeamPage() {
  const teamDetails = [
    {
      imgUrl:
        "https://img.freepik.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80",
      name: "Jyoti Prasad",
      position: "Manager",
      education: "BE",
      experience: "15+ years",
    },
    {
      imgUrl:
        "https://img.freepik.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80",
      name: "Subhankar Das",
      position: "Full-Stack Developer",
      education: "MCA",
      experience: "1+ years",
    },
    {
      imgUrl:
        "https://img.freepik.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80",
      name: "Smrutirekha Das",
      position: "Digital Marketing",
      education: "MCA",
      experience: "1+ years",
    },
  ];
  return (
    <div className="team-page">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="team-header">
        <h1>Meet Our Team</h1>
        <p>Our dedicated professionals are here to help you.</p>
      </div>

      {/* Founder Section */}
      <div className="founder-section">
        <h2 className="head-title">Our Founder</h2>
        <div className="founder-container">
          <div className="left-container">
            <img
              src="/Images/legalion.png"
              alt="founder"
            />
          </div>
          <div className="right-container">
            <h2>Sritam Das</h2>
            <h3>Founder & CEO</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              nobis est molestias, quod harum natus aliquam. Atque incidunt
              nihil explicabo, inventore, eaque veritatis nulla obcaecati
              architecto dicta, assumenda iure odit? Iure vero dolor soluta
              fugit enim placeat doloremque aut a nesciunt laborum natus tenetur
              alias, facere explicabo nostrum nemo hic, fuga dolorum mollitia?
              Sit autem eius ut eum libero tempore?
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="all-team-section">
        <h2 className="head-title">Our Team</h2>
        <div className="all-team-grid">
          {teamDetails.map((member, idx) => (
            <div key={idx} className="all-team-card">
              <div className="team-img-container">
                <img src={member.imgUrl} alt="founder" />
              </div>
              <div className="right-container">
                <h2>{member.name}</h2>
                <h3>{member.position}</h3>
                <div className="extra-info">
                  <div className="detail-item">
                    <span className="edu-icon">
                      <GraduationCap />
                    </span>
                    <span>Education: </span>
                    <span>{member.education}</span>
                  </div>
                  <div className="detail-item">
                    <span className="edu-icon">
                      <UserStar />
                    </span>
                    <span>Experience: </span>
                    <span>{member.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
