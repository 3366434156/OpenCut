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
			"Modern headless CMS for content management and the blog for OpenCut",
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
