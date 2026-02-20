import { Card } from "antd";
import type { ReactNode } from "react";

type DashboardPanelProps = {
  title: string;
  subtitle?: string;
  extra?: ReactNode;
  children: ReactNode;
};

export default function DashboardPanel({
  title,
  subtitle,
  extra,
  children,
}: DashboardPanelProps) {
  return (
    <Card
      title={
        <div>
          <p className="text-base font-semibold text-slate-900">{title}</p>
          {subtitle ? (
            <p className="mt-0.5 text-xs font-normal text-slate-500">{subtitle}</p>
          ) : null}
        </div>
      }
      extra={extra}
      className="h-full border-slate-200"
    >
      {children}
    </Card>
  );
}
