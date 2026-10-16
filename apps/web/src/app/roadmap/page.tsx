import type { Metadata } from "next";
import { BasePage } from "@/app/base-page";
import { GitHubContributeSection } from "@/components/gitHub-contribute-section";
import { Badge } from "@/components/ui/badge";
import { ReactMarkdownWrapper } from "@/components/ui/react-markdown-wrapper";
import { cn } from "@/utils/ui";

const LAST_UPDATED = "2026年2月25日";

type StatusType = "complete" | "pending" | "default" | "info";

interface Status {
	text: string;
	type: StatusType;
}

interface RoadmapItem {
	title: string;
	description: string;
	status: Status;
}

const roadmapItems: RoadmapItem[] = [
	{
		title: "起点",
		description:
			"一切从这里开始：创建仓库、搭出最初的项目结构，以及做一个免费开源视频剪辑器的构想。[看看第一条推文](https://x.com/mazeincoding/status/1936706642512388188)，了解它的起点。",
		status: {
			text: "已完成",
			type: "complete",
		},
	},
	{
		title: "核心界面",
		description:
			"打好基础：主布局、顶部栏、侧边栏、时间线容器和基础组件结构。此时功能还不完整，但这是后续一切所依赖的界面框架。",
		status: {
			text: "已完成",
			type: "complete",
		},
	},
	{
		title: "核心功能",
		description:
			"让视频剪辑器真正**好用**的一切：时间线交互、存储、特效、转场等等。",
		status: {
			text: "进行中",
			type: "pending",
		},
	},
	{
		title: "原生应用（移动端/桌面端）",
		description:
			"Mac、Windows、Linux 与 iOS/Android 平台的原生 OpenCut 应用。",
		status: {
			text: "未开始",
			type: "default",
		},
	},
];

export const metadata: Metadata = {
	title: "路线图 - OpenCut",
	description:
		"看看 OpenCut 接下来会带来什么 —— 一款尊重你隐私的免费开源视频剪辑器。",
	openGraph: {
		title: "OpenCut 路线图 - 接下来会做什么",
		description:
			"看看 OpenCut 接下来会带来什么 —— 一款尊重你隐私的免费开源视频剪辑器。",
		type: "website",
		images: [
			{
				url: "/open-graph/roadmap.jpg",
				width: 1200,
				height: 630,
				alt: "OpenCut 路线图",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "OpenCut 路线图 - 接下来会做什么",
		description:
			"看看 OpenCut 接下来会带来什么 —— 一款尊重你隐私的免费开源视频剪辑器。",
		images: ["/open-graph/roadmap.jpg"],
	},
};

export default function RoadmapPage() {
	return (
		<BasePage
			title="路线图"
			description={`OpenCut 接下来会带来什么（最后更新：${LAST_UPDATED}）`}
		>
			<div className="mx-auto flex max-w-4xl flex-col gap-16">
				<div className="flex flex-col gap-6">
					{roadmapItems.map((item, index) => (
						<RoadmapItem key={item.title} item={item} index={index} />
					))}
				</div>
				<GitHubContributeSection
					title="想参与贡献？"
					description="OpenCut 是开源的，由社区共同构建。每一份贡献，无论多小，
          都在帮我们做出最好的免费视频剪辑器。"
				/>
			</div>
		</BasePage>
	);
}

function RoadmapItem({ item, index }: { item: RoadmapItem; index: number }) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg font-medium">
				<span className="leading-normal select-none">{index + 1}</span>
				<h3>{item.title}</h3>
				<StatusBadge status={item.status} className="ml-1" />
			</div>
			<div className="text-foreground/70 leading-relaxed">
				<ReactMarkdownWrapper>{item.description}</ReactMarkdownWrapper>
			</div>
		</div>
	);
}

function StatusBadge({
	status,
	className,
}: {
	status: Status;
	className?: string;
}) {
	return (
		<Badge
			className={cn("shadow-none", className, {
				"bg-green-500! text-white": status.type === "complete",
				"bg-yellow-500! text-white": status.type === "pending",
				"bg-blue-500! text-white": status.type === "info",
				"bg-foreground/10! text-accent-foreground": status.type === "default",
			})}
		>
			{status.text}
		</Badge>
	);
}
