import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";
import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";
import seven from "../assets/svg/projects/seven.svg";
import eight from "../assets/svg/projects/eight.svg";

export const projectsData = [
	{
		id: 1,
		projectName: "Image Gallery App with AWS Rekognition",
		projectDesc:
			"This project allows users to upload images for celebrity recognition using AWS Rekognition. It features a dynamic gallery with real-time recognition results and is built using AWS services and React.",
		tags: ["AWS Rekognition", "React", "Node.js", "Express"],
		code: "https://github.com/Sridhar1030/image-gallery-app",
		demo: "https://www.pennytracker.tech/gallery",
		image: one,
	},
	{
		id: 2,
		projectName: "FinanceTracker",
		projectDesc:
			"A finance tracker app that scrapes users' messages about daily spending and automatically uploads the data to Firebase. It uses Redis for caching and is hosted on an EC2 instance.",
		tags: ["React", "Node.js", "Firebase", "Redis"],
		code: "https://github.com/Sridhar1030/finance-tracker",
		demo: "http://www.pennytracker.tech",
		image: two,
	},
	{
		id: 3,
		projectName: "Event Scheduler",
		projectDesc:
			"A web app to schedule events and manage participant schedules using a genetic algorithm for optimization and round-robin scheduling. Built with React, Django, and SQL.",
		tags: ["React", "Django", "SQL", "Genetic Algorithm"],
		code: "https://github.com/Sridhar1030/event-scheduler",
		demo: "https://www.pennytracker.tech/events",
		image: three,
	},
	{
		id: 4,
		projectName: "Browser and Buy",
		projectDesc:
			"A marketplace for buying and selling second-hand engineering items, built with React, Node, and MongoDB. Users can list items and interact with other buyers and sellers.",
		tags: ["React", "Node.js", "MongoDB"],
		code: "https://github.com/Sridhar1030/browser-and-buy",
		demo: "https://www.pennytracker.tech/marketplace",
		image: four,
	},
	{
		id: 5,
		projectName: "Full-Stack MERN Website",
		projectDesc:
			"A full-stack website built during a MERN stack practical exam, featuring login functions, navbar, and MVC structure with React, Node, Express, and MongoDB.",
		tags: ["React", "Node.js", "Express", "MongoDB"],
		code: "https://github.com/Sridhar1030/full-stack-mern",
		demo: "https://www.pennytracker.tech/mern",
		image: five,
	},
];
