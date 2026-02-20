"use client";

import { useMemo, useState } from "react";
import { Button } from "@repo/ui/button";
import { Space, Tabs, Typography } from "antd";
import DashboardPanel from "./dashboard-panel";
import ActivityLogs from "./activity-logs";
import RepoSelector, { type GitHubRepo } from "./repo-selector";
import RepoSettings from "./repo-settings";

type GitHubDashboardProps = {
  repos: GitHubRepo[];
};

export default function GitHubDashboard({ repos }: GitHubDashboardProps) {
  const [selectedRepoId, setSelectedRepoId] = useState<number | undefined>(
    repos[0]?.id,
  );

  const selectedRepo = useMemo(
    () => repos.find((repo) => repo.id === selectedRepoId),
    [repos, selectedRepoId],
  );

  return (
    <div className="space-y-6">
      <DashboardPanel
        title="GitHub Workspace"
        subtitle="Select a repository to enable logs, sync, and repository settings."
        extra={
          <Button
            type="link"
            href="https://github.com/apps/maintania-app/installations/new"
          >
            Add More Repositories
          </Button>
        }
      >
        <RepoSelector
          repos={repos}
          selectedRepoId={selectedRepoId}
          onRepoChange={setSelectedRepoId}
        />
      </DashboardPanel>

      <Tabs
        items={[
          {
            key: "logs",
            label: "Logs",
            children: (
              <DashboardPanel
                title="Activity Logs"
                subtitle="Recent actions and sync activity for the selected repository."
              >
                <ActivityLogs repoName={selectedRepo?.full_name} />
              </DashboardPanel>
            ),
          },
          {
            key: "settings",
            label: "Settings",
            children: (
              <DashboardPanel
                title="Repository Settings"
                subtitle="Configuration used by Maintania for this repository."
              >
                <RepoSettings repoName={selectedRepo?.full_name} />
              </DashboardPanel>
            ),
          },
        ]}
      />

      <Space direction="vertical" size={2}>
        <Typography.Text type="secondary">
          Active repository:
        </Typography.Text>
        <Typography.Text strong>
          {selectedRepo?.full_name ?? "No repository selected"}
        </Typography.Text>
      </Space>
    </div>
  );
}
