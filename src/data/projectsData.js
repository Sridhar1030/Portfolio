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
		demo: "http://serverless-photo-website.s3-website.ap-south-1.amazonaws.com/",
		image: one,
	},
	{
		id: 2,
		projectName: "FinanceTracker",
		projectDesc:
			"A finance tracker app that scrapes users' messages about daily spending and automatically uploads the data to Firebase. It uses Redis for caching and is hosted on an EC2 instance.",
		tags: ["React", "Node.js", "Firebase", "Redis"],
		code: "https://github.com/Sridhar1030/FinanceTracker/",
		demo: "http://www.pennytracker.tech",
		image: "https://pavanrasal.me/pennytrackerImage.png",
	},
	{
		id: 5,
		projectName: "Hackthon Meals",
		projectDesc:
			"A web app to for the college hackthon to distribute meals without the use of coupons.",
		tags: ["React", "MongoDB", "NodeJS", "Express"],
		code: "https://github.com/Sridhar1030/QR_Hackathon",
		demo: "https://qr-hackathon.vercel.app/",
		image: five,
	},
	{
		id: 3,
		projectName: "Browser and Buy",
		projectDesc:
			"A marketplace for buying and selling second-hand engineering items, built with React, Node, and MongoDB. Users can list items and interact with other buyers and sellers.",
		tags: ["React", "Node.js", "MongoDB"],
		code: "https://github.com/Sridhar1030/browser-and-buy",
		demo: "https://browsenbuy.vercel.app/",
		image: "https://pavanrasal.me/bAndB.png",
	},
	{
		id: 6,
		projectName: "Translator_DiscordBot",
		projectDesc:
			"A discord bot which can be used in channels for translating messages to different languages.",
		tags: ["React","Discord.js", "MongoDB", "NodeJS", "Express"],
		code: "https://github.com/Sridhar1030/Translator_DiscordBot",
		// demo: "",
		image: six,
	},
	{
		id: 4,
		projectName: "Event Scheduler",
		projectDesc:
			"A web app to schedule events and manage participant schedules using a genetic algorithm for optimization and round-robin scheduling. Built with React, Django, and SQL.",
		tags: ["React", "Django", "SQL", "Genetic Algorithm"],
		code: "https://github.com/Sridhar1030/event-scheduler",
		// demo: "https://event-scheduler-genetic-algo.vercel.app/",
		image: three,
	},
	
	

];
