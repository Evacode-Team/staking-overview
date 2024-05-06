import { ReactNode } from "react"

export type TwoSideLayoutProps = {
    leftSideChildren: ReactNode;
    rightSideChildren: ReactNode;
    variant?: string;
}