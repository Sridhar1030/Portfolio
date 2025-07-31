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
		projectName: "FinanceTracker",
		projectDesc:
			"A finance tracker app that scrapes users' messages about daily spending and automatically uploads the data to Firebase. It uses Redis for caching and is hosted on an EC2 instance.",
		tags: ["React", "Node.js", "Firebase", "Redis"],
		code: "https://github.com/Sridhar1030/FinanceTracker/",
		demo: "http://www.pennytracker.tech",
		image: "https://pavanrasal.me/pennytrackerImage.png",
	},
	{
		id:2,
		projectName: "Satyadarshi",
		projectDesc:
			"This multilingual legal assistant app empowers low-income users to navigate issues like evictions and wage theft through guided support, AI-driven legal document generation, and voice-based consultations. It features OCR-enabled document uploads, chatbot assistance, real-time legal updates, and lawyer discovery via Google Maps, with secure payments for premium services.",
		tags: ["React", "Node.js", "MongoDB", "GoogleMaps","Elevenlabs"],
		code: "https://github.com/Sridhar1030/pleaseGod",
		demo: "https://satyadarshi.vercel.app/",
		image: "https://res.cloudinary.com/sridhar1/image/upload/v1753953230/f4009489-2d0e-41c7-a3b3-c473c0d86754.png",
	},
	{
		id: 3,
		projectName: "AgroLynk",
		projectDesc:
			"AgroLynk is a platform that connects farmers with buyers, providing a seamless and efficient way to buy and sell agricultural products. It features a dynamic gallery with real-time recognition results and is built using AWS services and React.",
		tags: [ "React", "Node.js", "Express","AWS" , "Google Cloud"],
		code: "https://github.com/Sridhar1030/Agro-Lynk",
		demo: "https://agro-lynk.vercel.app",
		image: "https://res.cloudinary.com/sridhar1/image/upload/v1753954355/5bc10442-fd61-42e7-8b79-78fe94525f0e.png",
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
