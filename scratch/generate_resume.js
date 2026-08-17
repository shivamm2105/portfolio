import fs from "fs";
import PDFDocument from "pdfkit";

// Ensure public directory exists
if (!fs.existsSync("public")) {
  fs.mkdirSync("public");
}

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 35, bottom: 35, left: 40, right: 40 },
});

const writeStream = fs.createWriteStream("public/resume.pdf");
doc.pipe(writeStream);

// Helper for horizontal line
function drawLine() {
  doc.moveDown(0.3);
  doc.strokeColor("#10B981").lineWidth(0.75).moveTo(doc.x, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.5);
}

// ─── Header ───
doc.font("Helvetica-Bold").fontSize(20).fillColor("#06090E").text("SHIVAM CHAUDHARY", { align: "center" });
doc.moveDown(0.15);
doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#10B981").text("Full Stack Developer  |  Java & Spring Boot Engineer", { align: "center" });
doc.moveDown(0.25);
doc.font("Helvetica").fontSize(8.5).fillColor("#475569").text(
  "+91 6306925215   |   shivamm2105@gmail.com   |   linkedin.com/in/shivamch21   |   github.com/shivamm2105   |   Lucknow, UP",
  { align: "center" }
);
doc.moveDown(0.8);

// ─── Professional Summary ───
doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#06090E").text("PROFESSIONAL SUMMARY");
drawLine();
doc.font("Helvetica").fontSize(8.8).fillColor("#334155").lineGap(2);
doc.text(
  "Full-Stack Developer and Freelance Software Consultant actively seeking full-time Software Engineering roles while preparing for " +
  "Master of Computer Applications (MCA) in top Government Institutions. Specializing in Java, Spring Boot, RESTful APIs, Microservices, " +
  "and React.js. Experienced in designing & deploying commercial web applications with custom admin portals for local businesses. " +
  "Passionate about scalable backend engineering, clean architecture, and algorithmic problem-solving."
);
doc.moveDown(0.8);

// ─── Technical Skills ───
doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#06090E").text("TECHNICAL SKILLS");
drawLine();

const skills = [
  { label: "Languages: ", val: "Java, Core Java, JavaScript (ES6+), C++, SQL, HTML5, CSS3" },
  { label: "Backend Engineering: ", val: "Spring Boot, Spring MVC, REST APIs, Microservices, Hibernate, JDBC, Node.js, Express.js" },
  { label: "Frontend & UI: ", val: "React.js, Tailwind CSS, Redux Toolkit, Framer Motion, Responsive Web Design" },
  { label: "Databases: ", val: "MySQL, MongoDB, Relational Database Design, SQL Queries" },
  { label: "Tools & Ecosystem: ", val: "Git, GitHub, VS Code, Postman, Antigravity, Eclipse, IntelliJ IDEA" }
];

skills.forEach(s => {
  doc.font("Helvetica-Bold").fontSize(8.8).fillColor("#1E293B").text(s.label, { continued: true })
     .font("Helvetica").fillColor("#334155").text(s.val);
  doc.moveDown(0.2);
});
doc.moveDown(0.6);

// ─── Work & Practical Experience ───
doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#06090E").text("EXPERIENCE & PRACTICAL WORK");
drawLine();

// Experience 1: Freelance
doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#06090E").text("Freelance Full Stack Developer ", { continued: true });
doc.font("Helvetica").fillColor("#475569").text("– Independent Clients & Businesses", { continued: true });
doc.font("Helvetica-Bold").fillColor("#10B981").text("   |   Jan 2026 – Present", { align: "right" });
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(8.8).fillColor("#334155");
[
  "Designed and deployed a commercial full-stack Restaurant Web App with a customer menu interface and custom Admin Management Panel for menu items, order status tracking, and stock toggling.",
  "Built an E-Scooty Showroom & Inventory Management Platform for a local EV vehicle dealership, digitizing customer booking and inventory tracking.",
  "Developed a digital Community Library Management Portal for automated book cataloging and lending history."
].forEach(p => doc.text("•  " + p, { paragraphGap: 1.5 }));
doc.moveDown(0.5);

// Experience 2: GSSoC
doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#06090E").text("Open Source Contributor / Mentee ", { continued: true });
doc.font("Helvetica").fillColor("#475569").text("– GirlScript Summer of Code (GSSoC 2026)", { continued: true });
doc.font("Helvetica-Bold").fillColor("#10B981").text("   |   May 2026 – Present", { align: "right" });
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(8.8).fillColor("#334155");
[
  "Selected as Contributor & Mentee for GSSoC 2026, collaborating globally to resolve bugs, build features, and refine project documentation.",
  "Mastering professional Git & GitHub workflows, pull requests, and peer code reviews across distributed teams."
].forEach(p => doc.text("•  " + p, { paragraphGap: 1.5 }));
doc.moveDown(0.5);

// Experience 3: QSpiders
doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#06090E").text("Java Full Stack Development Trainee ", { continued: true });
doc.font("Helvetica").fillColor("#475569").text("– QSpiders Pune", { continued: true });
doc.font("Helvetica-Bold").fillColor("#10B981").text("   |   July 2025 – Present", { align: "right" });
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(8.8).fillColor("#334155");
[
  "Intensive training in Core Java, Advanced Java, Spring Boot, REST APIs, Microservices, Hibernate, React.js, and MySQL full-stack integrations."
].forEach(p => doc.text("•  " + p, { paragraphGap: 1.5 }));
doc.moveDown(0.8);

// ─── Key Projects ───
doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#06090E").text("KEY PROJECTS");
drawLine();

// Project 1
doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#06090E").text("Full-Stack Restaurant Web App & Admin Panel");
doc.font("Helvetica-Oblique").fontSize(8).fillColor("#475569").text("Commercial Client Project  |  React, Node.js, Express, MongoDB, Tailwind CSS");
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(8.8).fillColor("#334155");
doc.text("•  Deployed customer ordering interface with category filters and real-time Admin Panel for order status and menu inventory control.", { paragraphGap: 1.5 });
doc.moveDown(0.4);

// Project 2
doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#06090E").text("E-Scooty Showroom & Inventory Management Platform");
doc.font("Helvetica-Oblique").fontSize(8).fillColor("#475569").text("Commercial Client Project  |  React, Node.js, Relational DB, Tailwind CSS");
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(8.8).fillColor("#334155");
doc.text("•  Built EV showroom buyer catalog with battery/mileage specs, test ride booking inquiries, and admin stock management.", { paragraphGap: 1.5 });
doc.moveDown(0.4);

// Project 3
doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#06090E").text("Community Library Management System");
doc.font("Helvetica-Oblique").fontSize(8).fillColor("#475569").text("GitHub: github.com/shivamm2105/library-management-system  |  Java, Spring Boot, MySQL, JDBC");
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(8.8).fillColor("#334155");
doc.text("•  Automated book inventory, member registration, borrowing/return logs, and search queries with JDBC relational persistence.", { paragraphGap: 1.5 });
doc.moveDown(0.8);

// ─── Education ───
doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#06090E").text("EDUCATION");
drawLine();

doc.font("Helvetica-Bold").fontSize(9).fillColor("#06090E").text("MCA Prep – Master of Computer Applications (Govt Institutions Entrance)", { continued: true });
doc.font("Helvetica").fillColor("#475569").text("   |   2026 – Present", { align: "right" });
doc.moveDown(0.2);
doc.font("Helvetica-Bold").fontSize(9).fillColor("#06090E").text("BCA – Bachelor of Computer Applications, Babu Banarasi Das University", { continued: true });
doc.font("Helvetica").fillColor("#475569").text("   |   2022 – 2025", { align: "right" });
doc.moveDown(0.8);

// ─── Certifications & Competitive Programming ───
doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#06090E").text("CERTIFICATIONS & ACHIEVEMENTS");
drawLine();

doc.font("Helvetica").fontSize(8.8).fillColor("#334155");
[
  "21+ Verified Domain Certifications in Java, Spring Boot, React.js, Web Development, and Database Systems.",
  "100+ Solved on LeetCode (@Shivamm21) & GeeksforGeeks (@shivamm21).",
  "CodeChef 3★ Division 2 Competitor (@shivamm21 | Peak Rating 2113)."
].forEach(c => doc.text("•  " + c, { paragraphGap: 2 }));

doc.end();

writeStream.on("finish", () => {
  console.log("PDF Generation completed: public/resume.pdf");
});
