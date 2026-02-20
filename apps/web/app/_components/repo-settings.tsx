"use client";

import { Input, Space, Switch, Typography } from "antd";

type RepoSettingsProps = {
  repoName?: string;
};

export default function RepoSettings({ repoName }: RepoSettingsProps) {
  return (
    <Space direction="vertical" size={14} className="w-full">
      <div className="flex items-center justify-between gap-3">
        <div>
          <Typography.Text strong>Auto Sync</Typography.Text>
          <p className="text-sm text-slate-500">
            Keep repository metadata synced automatically.
          </p>
        </div>
        <Switch defaultChecked />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div>
          <Typography.Text strong>Alert on Failed Checks</Typography.Text>
          <p className="text-sm text-slate-500">
            Send alerts when checks fail for this repository.
          </p>
        </div>
        <Switch defaultChecked />
      </div>

      <div>
        <Typography.Text strong>Webhook Endpoint</Typography.Text>
        <Input
          className="mt-2"
          value={
            repoName
              ? `https://api.maintania.dev/hooks/${repoName.replace("/", "_")}`
              : "Select a repository to generate endpoint"
          }
          readOnly
        />
      </div>
    </Space>
  );
}
