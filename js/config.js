const CONFIG = {
    about: {
        name: "Jayant Patel",
        title: "Research & Development Engineer",
        location: "Korba, Chhattisgarh 495452",
        profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQE4MMe5kMBHoA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693370193686?e=1744848000&v=beta&t=MalMpmQvaR_WVLrr0YVGIduTnAFIQDnthhJonbukT9U",
        contact: {
            email: "jayant.07124@gmail.com",
            phone: "+91 9358957326",
            linkedin: "linkedin.com/in/jayantpatel71",
            github: "github.com/Jayant71"
        }
    },
    education: [
        {
            institution: "University Teaching Department (CSVTU)",
            degree: "B.Tech (Honors) in Computer Science Engineering (Artificial Intelligence)",
            location: "Bhilai, Chhattisgarh",
            period: "July 2025 (Expected)",
            grade: "CGPA: 8.16/10"
        },
        {
            institution: "Sarvodaya Sr. Secondary School Ranpur",
            degree: "12th Grade",
            location: "Kota, Rajasthan",
            period: "March 2020",
            grade: "Percentage: 75%"
        },
        {
            institution: "St. Thomas Public School Dipka",
            degree: "10th Grade",
            location: "Korba, Chhattisgarh",
            period: "March 2018",
            grade: "Percentage: 86.66%"
        }
    ],
    experience: [
        {
            role: "Research Intern",
            company: "Indian Institute of Technology (IIT) Jammu",
            location: "Jammu, Jammu & Kashmir - Hybrid",
            period: "February 2024 – July 2024",
            highlights: [
                "Researched and evaluated object detection models, specifically YOLO versions 3 to 8 for Personal Protective Equipment (PPE) detection, findings guided future model selection processes while improving overall understanding of performance metrics within the team.",
                "Developed a comprehensive comparison report focusing on six variations of YOLO models; findings provided clarity for team discussions about the best fit solutions for specific PPE scenarios within operational constraints.",
                "Developed a lightweight model optimized for efficient detection, reducing model size by 80.95% and improving inference speed by 50%."
            ]
        }
    ],
    projects: [
        {
            title: "Model Comparison and Compression",
            period: "February 2024 – July 2024",
            tags: ["Machine Learning", "Computer Vision", "YOLO"],
            highlights: [
                "Analyzed 6 YOLO object detection models for PPE detection on the CHV Dataset.",
                "Optimized YOLOv8n models, achieving an 80.95% reduction in model size and an 83.75% reduction in parameters, with minimal drop in precision and recall compared with YOLOv8n.",
                "Executed rigorous testing protocols to evaluate YOLOv8 effectiveness against real-world ppe datasets, identifying critical areas for improvement which led to more accurate PPE identification within operational environments."
            ]
        },
        {
            title: "Plant Disease Recognition Using Machine Learning",
            period: "September 2023 – December 2023",
            tags: ["Python", "Machine Learning", "Flutter"],
            link: "#",
            highlights: [
                "Fine-tuned a pre-trained MobileNetV3 CNN model, achieving 98.45% training accuracy and 97.69% validation accuracy for plant disease recognition.",
                "Engineered an intuitive Android application leveraging Flutter, designed specifically for farmers; integrated a plant-specific chatbot, resulting in over 100 unique queries answered during testing."
            ]
        }
    ],
    publications: [
        {
            title: "Development of Mobile Application for Sickle Cell Anemia Treatment Support System",
            journal: "YMER",
            volume: "Volume 23, Issue 06",
            date: "June 2024",
            link: "#"
        }
    ],
    skills: {
        "Programming Languages": {
            icon: "fas fa-code",
            items: [
                { name: "Python", icon: "fab fa-python" },
                { name: "C/C++", icon: "fas fa-terminal" },
                { name: "Kotlin", icon: "fas fa-terminal" }
            ]
        },
        "Frameworks and Libraries": {
            icon: "fas fa-layer-group",
            items: [
                { name: "TensorFlow", icon: "fas fa-brain" },
                { name: "PyTorch", icon: "fas fa-fire" },
                { name: "OpenCV", icon: "fas fa-camera" }
            ]
        },
        "Technologies": {
            icon: "fas fa-microchip",
            items: [
                { name: "Machine Learning", icon: "fas fa-robot" },
                { name: "Deep Learning", icon: "fas fa-network-wired" },
                { name: "Computer Vision", icon: "fas fa-eye" },
                { name: "Android", icon: "fab fa-android" },
                { name: "Data Analysis", icon: "fas fa-chart-bar" }
            ]
        },
        "Tools": {
            icon: "fas fa-tools",
            items: [
                { name: "Git", icon: "fab fa-git-alt" },
                { name: "Linux", icon: "fab fa-linux" },
                { name: "Jupyter Notebooks", icon: "fas fa-book-open" },
                { name: "VS Code", icon: "fas fa-code" },
                { name: "Android Studio", icon: "fas fa-mobile-alt" },
                { name: "Firebase", icon: "fas fa-fire" },
                { name: "Docker", icon: "fab fa-docker" }
            ]
        }
    },
    certifications: [
        {
            title: "Introduction to Machine Learning",
            issuer: "NPTEL",
            date: "December 2023",
            link: "#"
        },
        {
            title: "Flutter Development Bootcamp with Dart",
            issuer: "Udemy",
            date: "October 2023",
            link: "#"
        }
    ],
    // Background configuration
    background: {
        color: "#0a0a0a",
        particleCount: 1000,
        particleSize: 2,
        particleSpeed: 0.5,
        connectionRadius: 100
    }
};