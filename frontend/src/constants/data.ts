import type { Stat, Feature, Benefit, Integration } from "../utils/types";

export const stats: Stat[] = [
  { value: "10K+", label: "Active Developers" },
  { value: "50K+", label: "Tasks Tracked" },
  { value: "98%", label: "Satisfaction Rate" },
];

export const features: Feature[] = [
  {
    icon: "🎯",
    title: "Smart Task Planning",
    description:
      "Plan daily and weekly tasks with AI-powered suggestions and intelligent prioritization. Our system learns your workflow patterns and helps you focus on what matters most.",
  },
  {
    icon: "⏱️",
    title: "Intelligent Time Tracking",
    description:
      "Automatically log time spent on each task with accurate worklogs and productivity insights. See exactly where your time goes and optimize your schedule accordingly.",
  },
  {
    icon: "📊",
    title: "AI-Generated Reports",
    description:
      "Get polished daily and weekly summaries delivered via WhatsApp, email, Slack, or Discord. No manual writing required—let AI handle your status updates professionally.",
  },
  {
    icon: "🔍",
    title: "Pattern Analysis",
    description:
      "Agentic AI analyzes your work patterns, identifies blockers, and provides actionable insights. Understand your productivity trends and continuously improve your workflow.",
  },
  {
    icon: "🔗",
    title: "Commit Integration",
    description:
      "Attach commits and screenshots to tasks for complete visibility. Link your Git workflow seamlessly and maintain a clear connection between code and tasks.",
  },
  {
    icon: "🚀",
    title: "Team Transparency",
    description:
      "Perfect for remote teams and open-source contributors. Improve accountability, visibility, and collaboration without micromanagement or overhead.",
  },
];

export const benefits: Benefit[] = [
  {
    icon: "⚡",
    title: "Save Hours Weekly",
    description:
      "Automate reporting and tracking, freeing up time for actual development work.",
  },
  {
    icon: "📈",
    title: "Data-Driven Insights",
    description:
      "Make better decisions with AI-powered analytics and productivity metrics.",
  },
  {
    icon: "🤝",
    title: "Better Collaboration",
    description:
      "Keep everyone aligned with automatic updates and transparent progress tracking.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description:
      "Your data is encrypted and secure. We prioritize privacy and data protection.",
  },
  {
    icon: "🎨",
    title: "Customizable Workflows",
    description:
      "Adapt DevPulse to your team's unique processes and methodologies.",
  },
  {
    icon: "💡",
    title: "Smart Estimations",
    description:
      "AI learns from your history to provide accurate time and effort estimates.",
  },
];

export const integrations: Integration[] = [
  { icon: "💬", name: "Slack" },
  { icon: "📱", name: "WhatsApp" },
  { icon: "🎮", name: "Discord" },
  { icon: "📧", name: "Email" },
  { icon: "🔧", name: "GitHub" },
];
