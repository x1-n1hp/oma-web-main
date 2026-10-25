"use client";

// src/app/registration/Register.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
	{
		title: "Recitation",
		description: "Showcase your recitation skills and compete with the best.",
		image: "/images/storyteller.png",
		link: "/registration/register/recitation",
	},
	{
		title: "Words Often Mispronounced",
		description: "Demonstrate your mastery of commonly mispronounced words.",
		image: "/images/talk.png",
		link: "/registration/register/mispronounced",
	},
];

const Register = () => {
	return (
		<main className="flex flex-col min-h-screen bg-white overflow-hidden">
			<div className="flex flex-col items-center justify-center flex-1 py-16 px-6">
				<motion.h1
					className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center drop-shadow-xl"
					initial={{ opacity: 0, y: 25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Registration Form
				</motion.h1>
				<motion.p
					className="text-lg text-gray-700 mb-10 text-center max-w-2xl leading-relaxed"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.15 }}
				>
					To register, pick a category below and showcase your talent in the 2024
					OMA Diction Awards Competition!
				</motion.p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
					{categories.map((cat, idx) => (
						<motion.div
							key={cat.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.6, delay: 0.2 + idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
							whileHover={{ y: -6 }}
							className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(49,46,129,0.25),0_2px_8px_rgba(49,46,129,0.10)] hover:shadow-[0_16px_60px_rgba(49,46,129,0.35),0_4px_16px_rgba(49,46,129,0.15)] p-10 flex flex-col items-center h-full transition-shadow duration-300 border-2 border-indigo-100"
						>
							<div className="rounded-full bg-indigo-100 p-5 mb-6 shadow-xl border-4 border-red-500">
								<Image
									src={cat.image}
									alt={cat.title}
									width={110}
									height={110}
									className="object-contain"
								/>
							</div>
							<h2 className="text-2xl font-bold text-blue-900 mb-2 text-center drop-shadow">
								{cat.title}
							</h2>
							<p className="text-gray-700 text-center mb-6 text-base">
								{cat.description}
							</p>
							{cat.link ? (
								<Link href={cat.link} className="w-full flex justify-center mt-auto">
									<motion.button
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.97 }}
										className="text-sm bg-gradient-to-r from-blue-900 to-indigo-700 text-white w-64 px-6 py-3 rounded-lg shadow-2xl hover:from-indigo-800 hover:to-blue-900 transition-all duration-200 text-center whitespace-nowrap font-semibold tracking-wide border-2 border-indigo-200"
									>
										{cat.title}
									</motion.button>
								</Link>
							) : (
								<button className="text-sm bg-gradient-to-r from-blue-900 to-indigo-700 text-white w-64 px-6 py-3 rounded-lg shadow-2xl hover:from-indigo-800 hover:to-blue-900 transition-all duration-200 mt-auto text-center whitespace-nowrap font-semibold tracking-wide border-2 border-indigo-200" disabled>
									{cat.title}
								</button>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Register;
