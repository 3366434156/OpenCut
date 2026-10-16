import { OcDataBuddyIcon, OcMarbleIcon } from "@/components/icons";

export type ExternalTool = {
	name: string;
	description: string;
	url: string;
	icon: React.ElementType;
};

export const EXTERNAL_TOOLS: ExternalTool[] = [
	{
		name: "Marble",
		description:
			"现代化的无头 CMS，用于内容管理，同时也是 OpenCut 的博客平台。",
		url: "https://marblecms.com?utm_source=opencut",
		icon: OcMarbleIcon,
	},
	{
		name: "Databuddy",
		description: "符合 GDPR 的分析与用户洞察服务，为 OpenCut 而设。",
		url: "https://databuddy.cc?utm_source=opencut",
		icon: OcDataBuddyIcon,
	},
];
