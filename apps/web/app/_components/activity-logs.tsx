import { List, Tag, Typography } from "antd";

type ActivityLogsProps = {
  repoName?: string;
};

export default function ActivityLogs({ repoName }: ActivityLogsProps) {
  const logs = repoName
    ? [
        {
          id: "1",
          event: "Repository selected",
          details: `${repoName} connected to Maintania workspace`,
          status: "green",
        },
        {
          id: "2",
          event: "Sync scheduled",
          details: "Maintania will pull metadata every 30 minutes",
          status: "blue",
        },
        {
          id: "3",
          event: "Policy check",
          details: "No critical policy issues detected in the latest scan",
          status: "default",
        },
      ]
    : [
        {
          id: "1",
          event: "Waiting for repository",
          details: "Select a repository to see activity logs",
          status: "default",
        },
      ];

  return (
    <List
      dataSource={logs}
      renderItem={(log) => (
        <List.Item key={log.id}>
          <div className="w-full">
            <div className="flex items-center justify-between gap-3">
              <Typography.Text strong>{log.event}</Typography.Text>
              <Tag color={log.status}>{log.status}</Tag>
            </div>
            <Typography.Text type="secondary">{log.details}</Typography.Text>
          </div>
        </List.Item>
      )}
    />
  );
}
