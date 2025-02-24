import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Bot, ArrowRight, LineChart, Briefcase, Wallet, Shield, Puzzle } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import discordIcon from "./assets/discord.svg";
import githubIcon from "./assets/github-dark.svg";
import telegramIcon from "./assets/telegram.svg";
import x_dark from "./assets/x_dark.svg";
import logo from "./assets/logo.svg";
import hero from "./assets/hero.svg";
import "./App.css";

type Agent = {
    id: string;
    name: string;
};

function Agents() {
    const navigate = useNavigate();
    const { data: agents, isLoading } = useQuery({
        queryKey: ["agents"],
        queryFn: async () => {
            const res = await fetch("/api/agents");
            const data = await res.json();
            return data.agents as Agent[];
        },
    });

    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/80">
                <div className="container flex h-14 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <a href="/" className="flex items-center gap-2 text-lg font-semibold">
                            <img src={logo} alt="CoDAS Logo" className="h-6 w-6" />
                            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">CoDAS</span>
                        </a>
                        <nav className="hidden md:flex items-center gap-6">
                            <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
                            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
                            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                            <a href="#opensource" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contribute</a>
                        </nav>
                    </div>
                    <Button onClick={() => navigate('/app/chat/default')} className="bg-sky-400 text-black hover:bg-sky-400/90 flex items-center gap-2">
                        <span>Launch App</span>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section id="home" className="container py-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center mb-8">
                            <img
                                src="/hero.svg"
                                alt="CoDAS Hero"
                                className="w-[700px] h-auto max-w-full"
                                style={{
                                    filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.2))',
                                    animation: 'float 6s ease-in-out infinite'
                                }}
                            />
                        </div>
                        <style>
                            {`
                                @keyframes float {
                                    0%, 100% { transform: translateY(0px); }
                                    50% { transform: translateY(-10px); }
                                }
                            `}
                        </style>
                        <div className="space-y-8">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent" style={{ lineHeight: '1.2' }}>
                                Revolutionizing DeFi with AI-Powered Agent Swarms on Conflux Network
                            </h1>
                            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Simplify your DeFi experience with the power of Multi-Agent Systems (MAS) on Conflux Network
                            </p>
                            <div className="flex items-center gap-4 justify-center">
                                <Button size="lg" onClick={() => navigate('/app/chat/default')} className="bg-sky-400 text-black hover:bg-sky-400/90 flex items-center gap-2">
                                    <span>Try for Free</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                                <Button size="lg" variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="border-white/10 hover:bg-white/5">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="features" className="py-24 bg-background-secondary">
                    <div className="container space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Why Multi-Agent Systems?</h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Multi-Agent Systems (MAS) are the future of decentralized finance automation, enabling unparalleled scalability, efficiency, and specialization. Here's how MAS outperforms single-agent systems:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Scalability",
                                    description: "Handles 3x the workload by distributing tasks across agents",
                                    icon: LineChart,
                                    href: "#scalability"
                                },
                                {
                                    title: "Efficiency",
                                    description: "Reduces processing time by 60% through parallel execution",
                                    icon: Bot,
                                    href: "#efficiency"
                                },
                                {
                                    title: "Specialization",
                                    description: "Agents optimized for specific tasks improve performance by 40%",
                                    icon: Briefcase,
                                    href: "#specialization"
                                },
                                {
                                    title: "Robustness",
                                    description: "Maintains 95% functionality even if one agent fails",
                                    icon: Shield,
                                    href: "#robustness"
                                },
                                {
                                    title: "Adaptability",
                                    description: "Integrates with new protocols and APIs 30% faster",
                                    icon: Wallet,
                                    href: "#adaptability"
                                },
                                {
                                    title: "Modularity",
                                    description: "Plug-and-play architecture allows easy addition of new agents and capabilities",
                                    icon: Puzzle,
                                    href: "#modularity"
                                }
                            ].map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <a
                                        key={index}
                                        href={feature.href}
                                        className="block group"
                                    >
                                        <Card className="bg-background border-white/[0.08] hover:bg-background-secondary transition-colors h-full">
                                            <div className="p-6 flex flex-col items-center text-center space-y-6">
                                                <div className="h-16 w-16 rounded-2xl bg-sky-400/10 text-sky-400 flex items-center justify-center group-hover:scale-110 transition-transform ring-1 ring-white/10">
                                                    <Icon className="h-8 w-8" />
                                                </div>
                                                <div className="space-y-3">
                                                    <h3 className="text-xl font-semibold group-hover:text-sky-400 transition-colors">{feature.title}</h3>
                                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Architecture Section */}
                <section className="py-24 bg-background">
                    <div className="container space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Our Architecture</h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                A sophisticated multi-agent system designed to revolutionize DeFi operations through specialized agents and intelligent coordination.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                            <Card className="bg-background border-white/[0.08]">
                                <CardHeader>
                                    <CardTitle className="text-sky-400">User Interface</CardTitle>
                                    <CardDescription>
                                        Seamless interaction through Web App, Discord, and Telegram interfaces, providing flexible access points for users.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="bg-background border-white/[0.08]">
                                <CardHeader>
                                    <CardTitle className="text-sky-400">Coordinator Agent</CardTitle>
                                    <CardDescription>
                                        Central orchestrator managing task distribution and communication between specialized agents for optimal performance.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card className="bg-background border-white/[0.08]">
                                <CardHeader>
                                    <CardTitle className="text-sky-400">Specialized Agents</CardTitle>
                                    <CardDescription>
                                        Purpose-built agents for DeFi, Trading, NFTs, Analytics, and more, each optimized for specific tasks.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className="flex flex-col items-center space-y-8">
                            <div className="w-full max-w-5xl bg-background rounded-lg p-8 border border-white/[0.08]">
                                <img
                                    src="/architecture.jpg"
                                    alt="CoDAS Architecture Diagram"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="container py-24 space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Flexible Plans for Every User</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Free Tier",
                                price: "$0",
                                description: "Basic features: Metrics, limited API calls",
                                buttonText: "Choose Free Plan",
                                href: "https://t.me/CoDASSalesAgent_bot"
                            },
                            {
                                title: "Pro Tier",
                                price: "$19.99",
                                description: "Full access: Portfolio tools, trading, and agents",
                                buttonText: "Upgrade to Pro",
                                featured: true,
                                href: "https://t.me/CoDASSalesAgent_bot"
                            },
                            {
                                title: "Enterprise",
                                price: "Custom",
                                description: "Custom workflows, dedicated support",
                                buttonText: "Contact Us",
                                href: "https://t.me/CoDASSalesAgent_bot"
                            }
                        ].map((plan, index) => (
                            <Card key={index} className={`bg-background border-white/[0.08] hover:bg-background-secondary transition-colors ${plan.featured ? 'ring-2 ring-sky-400' : ''}`}>
                                <CardHeader>
                                    <CardTitle>{plan.title}</CardTitle>
                                    <div className="text-4xl font-bold my-4">{plan.price}</div>
                                    <CardDescription>{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button
                                        className={`w-full ${plan.featured ? 'bg-sky-400 text-black hover:bg-sky-400/90' : 'border-white/10 hover:bg-white/5'}`}
                                        variant={plan.featured ? 'default' : 'outline'}
                                        onClick={() => window.location.href = plan.href}
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 bg-background-secondary">
                    <div className="container space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Talk to Our AI Sales Agent</h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Have questions? Our dedicated Sales AI Agent is available 24/7 on Telegram to assist you with any inquiries about our platform and services.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://t.me/CoDASSalesAgent_bot" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-sky-400 text-black hover:bg-sky-400/90">
                                    <img src={telegramIcon} alt="Telegram" className="mr-2 h-5 w-5" />
                                    Chat with Sales Agent
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Social Media Section */}
                <section className="container py-24 space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Stay Updated with Our Meme Agent</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Follow our AI Meme Agent for the latest DeFi trends, market insights, and community updates. Get real-time news and engaging content across social platforms.
                        </p>
                    </div>
                    <div className="flex justify-center gap-8">
                        <a href="https://x.com/CoDasAgent" target="_blank" rel="noopener noreferrer" className="group">
                            <Card className="bg-background border-white/[0.08] hover:bg-background-secondary transition-colors p-6">
                                <div className="flex flex-col items-center space-y-4">
                                    <img src={x_dark} alt="X (Twitter)" className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    <div className="text-center">
                                        <h3 className="font-semibold">Follow on X</h3>
                                        <p className="text-sm text-muted-foreground">Daily market insights & memes</p>
                                    </div>
                                </div>
                            </Card>
                        </a>
                    </div>
                </section>

                {/* Open Source Section */}
                <section id="opensource" className="py-24 bg-background-secondary">
                    <div className="container space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Open Source and Built for Collaboration</h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Conflux DeFi Agent Swarm is an open-source initiative. We invite developers and contributors to help us expand the MAS ecosystem and redefine DeFi automation together.
                            </p>
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/10 hover:bg-sky-400/10 hover:border-sky-400/50 hover:text-sky-400 transition-all duration-300"
                                onClick={() => window.location.href = 'https://github.com/BerEst12/codas'}
                            >
                                <img src={githubIcon} alt="GitHub" className="mr-2 h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                                Contribute on GitHub
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/10 hover:bg-sky-400/10 hover:border-sky-400/50 hover:text-sky-400 transition-all duration-300"
                                onClick={() => window.location.href = 'https://discord.gg/nu6gkDwEQy'}
                            >
                                <img src={discordIcon} alt="Discord" className="mr-2 h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                                Join Our Discord
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/[0.08] bg-background">
                <div className="container py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="space-y-4">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex items-center gap-2">
                                    <img src={logo} alt="CoDAS Logo" className="h-6 w-6" />
                                    <h3 className="text-lg font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">CoDAS</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mt-4">
                                    Built as part of the AI Workforce Suite
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-foreground">Links</h4>
                            <nav className="flex flex-col gap-2">
                                <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
                                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
                                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                                <a href="#opensource" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Open Source</a>
                            </nav>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-foreground text-center">Social</h4>
                            <div className="flex flex-col items-center gap-4 mt-4">
                                <a
                                    href="https://t.me/CoDASSalesAgent_bot"
                                    className="w-6 h-6 flex items-center justify-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={telegramIcon} alt="Telegram" className="w-full h-full opacity-60 hover:opacity-100 transition-opacity" />
                                </a>
                                <a
                                    href="https://discord.gg/nu6gkDwEQy"
                                    className="w-6 h-6 flex items-center justify-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={discordIcon} alt="Discord" className="w-full h-full opacity-60 hover:opacity-100 transition-opacity" />
                                </a>
                                <a
                                    href="https://github.com/BerEst12/codas"
                                    className="w-6 h-6 flex items-center justify-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={githubIcon} alt="GitHub" className="w-full h-full opacity-60 hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
                            <nav className="flex flex-col gap-2">
                                <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
                                <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
                            </nav>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/[0.08] text-center text-sm text-muted-foreground">
                        © 2024 Conflux DeFi Agent Swarm. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Agents;
