"use client";

import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { SOCIAL_LINKS } from "@/site/social";
import { useLocalStorage } from "@/services/storage/use-local-storage";
import { Button } from "../ui/button";
import { Dialog, DialogBody, DialogContent, DialogTitle } from "../ui/dialog";

export function Onboarding() {
	const [step, setStep] = useState(0);
	const [hasSeenOnboarding, setHasSeenOnboarding] = useLocalStorage({
		key: "hasSeenOnboarding",
		defaultValue: false,
	});

	const isOpen = !hasSeenOnboarding;

	const handleNext = () => {
		setStep(step + 1);
	};

	const handleClose = () => {
		setHasSeenOnboarding({ value: true });
	};

	const getStepTitle = () => {
		switch (step) {
			case 0:
				return "Welcome to OpenCut Beta! 🎉";
			case 1:
				return "⚠️ This is a super early beta!";
			case 2:
				return "🦋 Have fun testing!";
			default:
				return "OpenCut 新手引导";
		}
	};

	const renderStepContent = () => {
		switch (step) {
			case 0:
				return (
					<div className="space-y-5">
						<div className="space-y-3">
							<Title title="欢迎使用 OpenCut Beta！🎉" />
							<Description description="你是最早一批体验 OpenCut 的用户之一 —— 完全开源的 CapCut 替代品。" />
						</div>
						<NextButton onClick={handleNext}>下一步</NextButton>
					</div>
				);
			case 1:
				return (
					<div className="space-y-5">
						<div className="space-y-3">
							<Title title={getStepTitle()} />
							<Description description="要把这个编辑器做到足够好用，还有很多事情要做。" />
							<Description description="还有不少功能尚未完成，我们正在努力把它们做出来！" />
							<Description description="想了解更多的话，可以看看我们的[路线图](https://opencut.app/roadmap)" />
						</div>
						<NextButton onClick={handleNext}>下一步</NextButton>
					</div>
				);
			case 2:
				return (
					<div className="space-y-5">
						<div className="space-y-3">
							<Title title={getStepTitle()} />
							<Description
								description={`加入我们的 [Discord](${SOCIAL_LINKS.discord})，和有趣的人聊聊，分享你的反馈，一起把 OpenCut 做成最好的编辑器。`}
							/>
						</div>
						<NextButton onClick={handleClose}>完成</NextButton>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogTitle>
					<span className="sr-only">{getStepTitle()}</span>
				</DialogTitle>
				<DialogBody>{renderStepContent()}</DialogBody>
			</DialogContent>
		</Dialog>
	);
}

function Title({ title }: { title: string }) {
	return <h2 className="text-lg font-bold md:text-xl">{title}</h2>;
}

function Description({ description }: { description: string }) {
	return (
		<div className="text-muted-foreground">
			<ReactMarkdown
				components={{
					p: ({ children }) => <p className="mb-0">{children}</p>,
					a: ({ href, children }) => (
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground hover:text-foreground/80 underline"
						>
							{children}
						</a>
					),
				}}
			>
				{description}
			</ReactMarkdown>
		</div>
	);
}

function NextButton({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick: () => void;
}) {
	return (
		<Button onClick={onClick} variant="default" className="w-full">
			{children}
			<ArrowRightIcon className="size-4" />
		</Button>
	);
}
