class ContentManager {
    constructor() {
        this.contentContainer = document.getElementById('dynamic-content');
        this.init();
    }

    init() {
        this.renderAboutSection();
        this.renderEducationSection();
        this.renderExperienceSection();
        this.renderProjectsSection();
        this.renderPublicationsSection();
        this.renderSkillsSection();
        this.renderCertificationsSection();
        this.renderContactSection();
    }

    createSection(id, title) {
        const section = document.createElement('section');
        section.id = id;
        section.className = 'section';
        section.innerHTML = `<h2 class="section-title">${title}</h2>`;
        return section;
    }

    renderAboutSection() {
        const section = this.createSection('about', 'About Me');
        section.innerHTML += `
        <div class="section-content">
            <div class="card">
                <h2 class="card-title">${CONFIG.about.name}</h2>
                <h3 class="card-subtitle">${CONFIG.about.title}</h3>
                <p>${CONFIG.about.location}</p>
                <div class="card-details">
                    <span>Email: <a href="mailto:${CONFIG.about.contact.email}">${CONFIG.about.contact.email}</a></span>
                    <span>Phone: <a href="tel:${CONFIG.about.contact.phone}">${CONFIG.about.contact.phone}</a></span>
                    <span>LinkedIn: <a href="${CONFIG.about.contact.linkedin}" target="_blank">linkedin.com/in/jayantpatel71</a></span>
                    <span>GitHub: <a href="${CONFIG.about.contact.github}" target="_blank">github.com/Jayant71</a></span>
                </div>
            </div>
        </div>
        `;
        this.contentContainer.appendChild(section);
    }

    renderEducationSection() {
        const section = this.createSection('education', 'Education');
        section.innerHTML += `
        <div class="section-content">
        ${CONFIG.education.map(edu => `
            <div class="card">
                <h3 class="card-title">${edu.institution}</h3>
                <h4 class="card-subtitle">${edu.degree}</h4>
                <p>${edu.location}</p>
                <p>${edu.period} | ${edu.grade}</p>
            </div>
        `).join('')}
        </div>
        `;
        this.contentContainer.appendChild(section);
    }

    renderExperienceSection() {
        const section = this.createSection('experience', 'Experience');
        section.innerHTML += `
        <div class="section-content">
        ${CONFIG.experience.map(exp => `
            <div class="card">
                <h3 class="card-title">${exp.role}</h3>
                <h4 class="card-subtitle">${exp.company}</h4>
                <p>${exp.location}</p>
                <p>${exp.period}</p>
                <ul class="highlights-list">
                    ${exp.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
        `).join('')}
        </div>
        `;
        this.contentContainer.appendChild(section);
    }

    renderProjectsSection() {
        const section = this.createSection('projects', 'Projects');
        section.innerHTML += `
        <div class="section-content">
        ${CONFIG.projects.map(project => `
            <div class="card">
                <h3 class="card-title">${project.title}</h3>
                <h4 class="card-subtitle">${project.period}</h4>
                ${project.tags ? `<div class="card-details">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>` : ''}
                <ul class="highlights-list">
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
                ${project.link ? `<div class="card-details"><a href="${project.link}" target="_blank">Link</a></div>` : ''}
            </div>
        `).join('')}
        </div>
        `;
        this.contentContainer.appendChild(section);
    }

    renderPublicationsSection() {
        const section = this.createSection('publications', 'Publications');
        section.innerHTML += `
        <div class="section-content">
        ${CONFIG.publications.map(pub => `
            <div class="card">
                <h3 class="card-title">${pub.title}</h3>
                <h4 class="card-subtitle">${pub.journal}, ${pub.volume}, ${pub.date}</h4>
                ${pub.link ? `<div class="card-details"><a href="${pub.link}" target="_blank">Link</a></div>` : ''}
            </div>
        `).join('')}
        </div>
        `;
        this.contentContainer.appendChild(section);
    }

    renderSkillsSection() {
        const section = this.createSection('skills', 'Skills');
        section.innerHTML += `
        <div class="section-content">
        ${Object.entries(CONFIG.skills).map(([category, data]) => `
            <div class="skill-category">
                <h3 class="category-title">
                    <i class="${data.icon}"></i>
                    ${category}
                </h3>
                <div class="skills-items">
                    ${data.items.map(skill => `
                        <div class="skill-item">
                            <i class="${skill.icon}"></i>
                            <span class="skill-name">${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}
        </div>
        `;
        this.contentContainer.appendChild(section);
    }

    renderCertificationsSection() {
        const section = this.createSection('certifications', 'Certifications');
        section.innerHTML += `
        <div class="section-content">
        ${CONFIG.certifications.map(cert => `
            <div class="card">
                <h3 class="card-title">${cert.title}</h3>
                <h4 class="card-subtitle">${cert.issuer}</h4>
            </div>
        `).join('')}
        </div>
        `;
        this.contentContainer.appendChild(section);
    }

    renderContactSection() {
        const section = this.createSection('contact', 'Get In Touch');
        const { email, phone, linkedin, github } = CONFIG.about.contact;

        section.innerHTML += `
            <div class="contact-container">
                <div class="contact-methods">
                    <a href="mailto:${email}" class="contact-method email">
                        <i class="fas fa-envelope"></i>
                        <span>Email</span>
                        <p>${email}</p>
                    </a>
                    <a href="tel:${phone}" class="contact-method phone">
                        <i class="fas fa-phone"></i>
                        <span>Phone</span>
                        <p>${phone}</p>
                    </a>
                    <a href="https://${linkedin}" target="_blank" class="contact-method linkedin">
                        <i class="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                        <p>Connect with me</p>
                    </a>
                    <a href="https://${github}" target="_blank" class="contact-method github">
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                        <p>View my repositories</p>
                    </a>
                </div>
            </div>
        `;

        this.contentContainer.appendChild(section);
    }
}

// Initialize CMS when page loads
window.addEventListener('load', () => {
    new ContentManager();
});