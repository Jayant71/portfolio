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
        <div class="section-content about-container">
            <div class="about-profile">
                <div class="profile-image">
                    <img src="assets/profile.jpg" alt="${CONFIG.about.name}" />
                </div>
            </div>
            <div class="about-content">
                <div class="about-header">
                    <h2 class="about-name">${CONFIG.about.name}</h2>
                    <h3 class="about-title">${CONFIG.about.title}</h3>
                    <p class="about-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${CONFIG.about.location}
                    </p>
                </div>
                <div class="about-description">
                    <p>I am a passionate Research & Development Engineer specializing in Machine Learning and Computer Vision. With a strong foundation in AI technologies, I focus on developing innovative solutions that bridge theoretical concepts with practical applications.</p>
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
                <p class="cert-intro">Professional certifications and achievements in the field</p>
                <div class="cert-grid">
                    ${CONFIG.certifications.map(cert => `
                        <div class="cert-card">
                            <div class="cert-icon">
                                <i class="fas fa-certificate"></i>
                            </div>
                            <div class="cert-content">
                                <h3>${cert.title}</h3>
                                <p class="issuer">
                                    <i class="fas fa-building"></i>
                                    ${cert.issuer}
                                </p>
                                ${cert.date ? `
                                    <p class="date">
                                        <i class="fas fa-calendar-alt"></i>
                                        ${cert.date}
                                    </p>
                                ` : ''}
                                ${cert.link ? `
                                    <a href="${cert.link}" target="_blank" class="cert-link">
                                        <i class="fas fa-external-link-alt"></i>
                                        View Certificate
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        this.contentContainer.appendChild(section);
    }

    renderContactSection() {
        const section = this.createSection('contact', 'Get In Touch');
        const { email, phone, linkedin, github } = CONFIG.about.contact;

        section.innerHTML += `
            <div class="contact-container">
                <p class="contact-intro">Feel free to reach out for collaborations, opportunities, or just to say hello!</p>
                <div class="contact-grid">
                    <a href="mailto:${email}" class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-envelope-open-text"></i>
                        </div>
                        <div class="contact-info">
                            <h3>Email</h3>
                            <p>${email}</p>
                        </div>
                        <div class="contact-hover">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </a>
                    <a href="tel:${phone}" class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="contact-info">
                            <h3>Phone</h3>
                            <p>${phone}</p>
                        </div>
                        <div class="contact-hover">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </a>
                    <a href="https://${linkedin}" target="_blank" class="contact-card">
                        <div class="contact-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        <div class="contact-info">
                            <h3>LinkedIn</h3>
                            <p>Connect Professionally</p>
                        </div>
                        <div class="contact-hover">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </a>
                    <a href="https://${github}" target="_blank" class="contact-card">
                        <div class="contact-icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <div class="contact-info">
                            <h3>GitHub</h3>
                            <p>View My Work</p>
                        </div>
                        <div class="contact-hover">
                            <i class="fas fa-arrow-right"></i>
                        </div>
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