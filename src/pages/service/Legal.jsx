import React from "react";
import { Link } from "react-router-dom";
import "./Legal.css";
import Navbar from "../../layouts/Navbar";

const Legal = () => {
  return (
    <div className="legal-services">
      <Navbar />
      <div className="legal-service-container">
        <div className="legal-service-head">
          <h1>Legal Services We Provide</h1>
        </div>

        <div className="legal-all-services">
          <div className="legal-service" id="legal">
            <h1 className="legal-main-title">
              👉 <span>LEGAL</span> 🏢
            </h1>
            <h2 className="legal-subtitle">
              Professional Legal Services You Can Trust
            </h2>

            <div className="legal-img-info">
              <div className="legal-info">
                <p className="legal-intro">
                  At Legalion, we provide comprehensive legal services tailored
                  to meet the unique needs of individuals, families, and
                  businesses. Our experienced attorneys are committed to
                  delivering practical solutions with integrity, discretion, and
                  unmatched professionalism.
                </p>

                <p className="legal-intro">
                  Whether you're facing a complex legal dispute, need guidance
                  through a business transaction, or require personal legal
                  advice, we're here to protect your interests every step of the
                  way. Our practice areas include:
                </p>

                <div className="legal-services-list">
                  {/* NCLT - IBC Section */}
                  <div className="legal-service-section">
                    <div className="service-info">
                      <h3 className="service-section-title">
                        NCLT - Stress Assets - IBC Related
                      </h3>
                      <p className="service-section-description">
                        Our IBC Advisory Services cover the full spectrum of
                        support required under the Insolvency and Bankruptcy
                        Code. We specialize in formulating legal strategies and
                        defending applications under IBC to protect client
                        interests. Our expert legal advisory services and legal
                        due diligence ensure compliance and risk mitigation. We
                        provide advisory on resolution plans, offer skilled
                        representation in liquidation proceedings, and conduct
                        in-depth forensic investigations to detect financial
                        irregularities. Additionally, we assist in scouting
                        acquisition targets to help businesses identify and
                        secure strategic growth opportunities.
                      </p>

                      <div className="ibc-services">
                        <div className="ibc-service-item">
                          <h4>1. Formulation of Legal Strategies</h4>
                          <p>
                            We craft tailored legal strategies that address each
                            client's unique IBC challenges. Our process includes
                            a detailed assessment of legal and financial
                            circumstances, evaluating risks, and identifying the
                            most effective path forward. We ensure that all
                            actions comply with IBC provisions while
                            safeguarding client interests. By combining legal
                            expertise with business understanding, our
                            strategies are practical, result-driven, and
                            commercially sound. This ensures clients are
                            well-prepared for every stage of the insolvency
                            process.
                          </p>
                        </div>

                        <div className="ibc-service-item">
                          <h4>2. Defending Applications under IBC</h4>
                          <p>
                            We represent clients in defending applications filed
                            against them under the Insolvency and Bankruptcy
                            Code. Our team analyzes the merits of the case,
                            prepares strong legal arguments, and advocates
                            effectively before the appropriate authorities. We
                            focus on protecting the rights and reputation of our
                            clients while minimizing legal and financial
                            exposure. Through timely action and strategic
                            defense, we work to achieve the best possible
                            outcome. Our experience ensures a comprehensive
                            defense strategy at every stage of proceedings.
                          </p>
                        </div>

                        <div className="ibc-service-item">
                          <h4>3. Legal Advisory Services</h4>
                          <p>
                            Our legal advisory services provide expert guidance
                            on all matters relating to the Insolvency and
                            Bankruptcy Code. We assist businesses, creditors,
                            and stakeholders in understanding their legal
                            position and rights. Our team delivers clear,
                            actionable advice that simplifies complex IBC
                            procedures. We help clients make informed decisions
                            that align with both legal obligations and
                            commercial objectives. This ensures smooth
                            navigation through every legal challenge under IBC.
                          </p>
                        </div>

                        <div className="ibc-service-item">
                          <h4>4. Legal Due Diligence</h4>
                          <p>
                            We conduct in-depth legal due diligence to assess
                            compliance, uncover potential risks, and verify
                            critical information. Our process includes reviewing
                            contracts, financial statements, and operational
                            records to ensure transparency and accuracy. We
                            identify legal pitfalls before they become
                            liabilities, enabling informed decision-making. This
                            service is essential for insolvency cases, mergers,
                            acquisitions, or restructuring activities. With our
                            due diligence, clients can move forward with
                            confidence and clarity.
                          </p>
                        </div>

                        <div className="ibc-service-item">
                          <h4>5. Advisory on Resolution Plans</h4>
                          <p>
                            We provide end-to-end advisory services for
                            creating, reviewing, and implementing resolution
                            plans under IBC. Our team ensures that plans are
                            compliant with all regulatory requirements and
                            tailored to maximize recovery. We work closely with
                            stakeholders to design feasible, practical solutions
                            that align with business objectives. Our expertise
                            ensures that every resolution plan is both legally
                            robust and commercially sound. This leads to
                            smoother approval and implementation by the
                            authorities.
                          </p>
                        </div>

                        <div className="ibc-service-item">
                          <h4>6. Representation in Liquidation Proceedings</h4>
                          <p>
                            We offer skilled representation in liquidation
                            proceedings to protect client interests and ensure
                            compliance with IBC processes. Our team manages all
                            aspects of the liquidation, from documentation to
                            coordination with liquidators and stakeholders. We
                            aim to maximize asset value while minimizing
                            potential disputes or delays. Through strategic
                            representation, we ensure an efficient and
                            transparent liquidation process. Our approach
                            safeguards both legal rights and financial
                            interests.
                          </p>
                        </div>

                        <div className="ibc-service-item">
                          <h4>7. Conducting Forensic Investigations</h4>
                          <p>
                            Our forensic investigation services help uncover
                            fraud, financial mismanagement, or irregularities
                            during insolvency proceedings. We use detailed
                            analysis of financial transactions, documentation,
                            and operational processes to identify discrepancies.
                            Our findings provide clear evidence that can support
                            legal action or corrective measures. This service is
                            crucial for protecting creditors, investors, and
                            other stakeholders. We ensure all investigations are
                            thorough, accurate, and in line with legal
                            standards.
                          </p>
                        </div>

                        <div className="ibc-service-item">
                          <h4>8. Scouting for Acquisition Target</h4>
                          <p>
                            We assist clients in identifying and evaluating
                            potential acquisition opportunities arising during
                            insolvency processes. Our team conducts legal and
                            financial assessments to ensure each target aligns
                            with the client's strategic goals. We provide
                            insights into risks, compliance, and potential
                            benefits before finalizing deals. By combining legal
                            due diligence with market understanding, we help
                            clients secure valuable assets or businesses. This
                            service enables strategic growth while ensuring
                            regulatory compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="service-info-video vid-1">
                      <div className="legal-video">
                        <iframe
                          width="90%"
                          height="95%"
                          src="https://www.youtube.com/embed/K4FIEKLh7h4?autoplay=1&mute=1"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Dispute Resolution Section */}
                  <div className="legal-service-section">
                    <div className="service-info">
                      <h3 className="service-section-title">
                        Alternative Dispute Resolution
                      </h3>
                      <p className="service-section-description">
                        At Legalion, we understand that going to court isn't
                        always the best option. That's why we offer Alternative
                        Dispute Resolution (ADR) services — a range of effective
                        methods designed to help you resolve legal conflicts
                        efficiently, privately, and often without the time and
                        cost associated with litigation.
                      </p>

                      <div className="adr-subsection">
                        <h4>What Is ADR?</h4>
                        <p>
                          Alternative Dispute Resolution (ADR) refers to a set
                          of processes used to settle disputes outside the
                          courtroom. It provides a less adversarial, more
                          collaborative approach, allowing parties to reach
                          mutually agreeable outcomes with the help of neutral
                          third parties.
                        </p>
                      </div>

                      <div className="adr-subsection">
                        <h4>Our ADR Services Include:</h4>
                        <div className="adr-services">
                          <div className="adr-service-item">
                            <h5>Mediation:</h5>
                            <p>
                              A neutral mediator helps both parties communicate,
                              understand each other's positions, and work toward
                              a voluntary, mutually acceptable resolution. Ideal
                              for family matters, workplace issues, and business
                              disputes.
                            </p>
                          </div>

                          <div className="adr-service-item">
                            <h5>Arbitration:</h5>
                            <p>
                              A private and more flexible alternative to court,
                              where an arbitrator (or panel) hears both sides
                              and makes a decision, which can be binding or
                              non-binding based on your agreement.
                            </p>
                          </div>

                          <div className="adr-service-item">
                            <h5>Negotiation Support:</h5>
                            <p>
                              We assist clients in direct settlement
                              negotiations, ensuring that your rights and
                              interests are protected throughout the process.
                            </p>
                          </div>

                          <div className="adr-service-item">
                            <h5>Conciliation:</h5>
                            <p>
                              Similar to mediation, but the conciliator may take
                              a more active role in suggesting terms of
                              settlement.
                            </p>
                          </div>

                          <div className="adr-service-item">
                            <h5>Early Neutral Evaluation:</h5>
                            <p>
                              An impartial legal expert assesses your case early
                              and gives a non-binding opinion, which can help
                              guide settlement discussions or clarify legal
                              strengths and weaknesses.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="service-info-video vid-2">
                      <div className="legal-video">
                        <iframe
                          width="90%"
                          height="95%"
                          src="https://www.youtube.com/embed/K4FIEKLh7h4?autoplay=1&mute=1"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  {/* Value Added Consulting Section */}
                  <div className="legal-service-section">
                    <div className="service-info">
                      <h3 className="service-section-title">
                        Value Added Consulting
                      </h3>
                      <p className="service-section-description">
                        At Legalion, we believe legal support should do more
                        than just solve problems — it should help you grow,
                        protect, and optimize your business or personal
                        interests. That's why we offer Value Added Consulting as
                        part of our legal services — a strategic approach that
                        integrates legal expertise with business insight to
                        deliver measurable, long-term value.
                      </p>

                      <div className="vac-subsection">
                        <h4>What Is Value Added Legal Consulting?</h4>
                        <p>
                          Value Added Consulting goes beyond traditional legal
                          advice. It combines legal knowledge with
                          industry-specific insight, risk management, and
                          strategic planning to help clients:
                        </p>
                        <ul className="vac-benefits">
                          <li>Make smarter decisions</li>
                          <li>Anticipate and prevent legal issues</li>
                          <li>Improve operational efficiency</li>
                          <li>Strengthen compliance and governance</li>
                          <li>Align legal strategies with business goals</li>
                        </ul>
                        <p>
                          This service is ideal for clients who need more than
                          just reactive legal solutions — it's for those who
                          want proactive, forward-thinking guidance.
                        </p>
                      </div>

                      <div className="vac-subsection">
                        <h4>What We Offer Through Value Added Consulting:</h4>
                        <div className="vac-services">
                          <div className="vac-service-item">
                            <h5>Legal Risk Assessment & Prevention:</h5>
                            <p>
                              Identify potential legal risks early and implement
                              strategies to avoid costly disputes or regulatory
                              issues.
                            </p>
                          </div>

                          <div className="vac-service-item">
                            <h5>Compliance & Regulatory Strategy:</h5>
                            <p>
                              Stay ahead of changing laws and industry standards
                              with ongoing compliance support and advisory.
                            </p>
                          </div>

                          <div className="vac-service-item">
                            <h5>
                              Business Structuring & Transactional Strategy:
                            </h5>
                            <p>
                              Ensure that your business deals, partnerships, and
                              internal structures are legally sound and aligned
                              with your long-term goals.
                            </p>
                          </div>

                          <div className="vac-service-item">
                            <h5>Contract Optimization:</h5>
                            <p>
                              Review and tailor your contracts to maximize
                              protection and flexibility while minimizing
                              exposure.
                            </p>
                          </div>

                          <div className="vac-service-item">
                            <h5>Industry-Specific Legal Insight:</h5>
                            <p>
                              Our consultants offer tailored advice based on
                              deep experience in your sector — whether it's
                              finance, tech, manufacturing, healthcare, or
                              others.
                            </p>
                          </div>

                          <div className="vac-service-item">
                            <h5>Policy Development & Corporate Governance:</h5>
                            <p>
                              Establish effective internal policies and
                              governance practices to ensure ethical, legal, and
                              operational excellence.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="service-info-video vid-3">
                      <div className="legal-video">
                        <iframe
                          width="90%"
                          height="95%"
                          src="https://www.youtube.com/embed/K4FIEKLh7h4?autoplay=1&mute=1"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="legal-footer">
                  <p>
                    With a client-first approach, we combine in-depth legal
                    knowledge with personalized service to help you make
                    informed decisions and achieve the best possible outcomes.
                  </p>
                  <p>
                    <Link to="/contact-us" className="contact-link">
                      Contact us
                    </Link>{" "}
                    today for a confidential consultation. Your legal peace of
                    mind starts here.
                  </p>
                </div>
              </div>

              {/* <div className="legal-videos">
                <div className="legal-video vid-4">
                  <iframe
                    width="90%"
                    height="95%"
                    src="https://www.youtube.com/embed/K4FIEKLh7h4?autoplay=1&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div> */}

              <Link to="/contact-us" className="quote-btn">
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
