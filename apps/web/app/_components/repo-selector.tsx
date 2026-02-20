"use client";

import { Alert, Select, Space, Tag, Typography } from "antd";

export type GitHubRepo = {
  id: number;
  full_name: string;
  private?: boolean;
  default_branch?: string;
  html_url?: string;
  language?: string | null;
};

type RepoSelectorProps = {
  repos: GitHubRepo[];
  selectedRepoId?: number;
  onRepoChange: (repoId: number) => void;
};

export default function RepoSelector({
  repos,
  selectedRepoId,
  onRepoChange,
}: RepoSelectorProps) {
  const selectedRepo = repos.find((repo) => repo.id === selectedRepoId);

  if (!repos.length) {
    return (
      <Alert
        type="warning"
        showIcon
        message="No repositories available"
        description="Install the GitHub app on at least one repository and refresh this page."
      />
    );
  }

  return (
    <Space direction="vertical" size={16} className="w-full">
      <Select
        size="large"
        value={selectedRepoId}
        options={repos.map((repo) => ({
          label: repo.full_name,
          value: repo.id,
        }))}
        onChange={(value) => onRepoChange(value)}
        className="w-full"
        placeholder="Select a repository"
      />

      {selectedRepo ? (
        <div className="rounded-lg border border-slate-200 p-4">
          <Space direction="vertical" size={8}>
            <Typography.Text strong>{selectedRepo.full_name}</Typography.Text>
            <Space wrap>
              <Tag color={selectedRepo.private ? "volcano" : "green"}>
                {selectedRepo.private ? "Private" : "Public"}
              </Tag>
              <Tag>Branch: {selectedRepo.default_branch ?? "main"}</Tag>
              {selectedRepo.language ? <Tag>{selectedRepo.language}</Tag> : null}
            </Space>
            {selectedRepo.html_url ? (
              <a
                href={selectedRepo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600"
              >
                Open on GitHub
              </a>
            ) : null}
          </Space>
        </div>
      ) : null}
    </Space>
  );
}
