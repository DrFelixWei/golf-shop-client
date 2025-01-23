"use client";

import { ReactNode, useTransition } from "react";
import { useRouter } from "@/navigation";

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
}

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label
} : Props) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();