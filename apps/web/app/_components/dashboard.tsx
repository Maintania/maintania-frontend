"use client"
import { useEffect, useState } from "react";
import GitHubDashboard from "./github-dashboard";
import type { GitHubRepo } from "./repo-selector";
 

export default  function Dashboard() {
  const [repoData,setRepoData]=useState<GitHubRepo[]>([])
  const [installations, setInstallations] = useState([])
  const [selectedInstallation, setSelectedInstallation] = useState(null)

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/github/installations`, {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        setInstallations(data)
        if (data.length > 0) {
          setSelectedInstallation(data[0].installation_id)
        }
      })
  }, [])

  useEffect(() => {
    if (!selectedInstallation) return

    fetch(
      `${process.env.BACKEND_URL}/github/repos/${selectedInstallation}`,
      { credentials: "include" }
    )
      .then(res => res.json())
      .then(data => setRepoData(data.repositories ?? []))

  }, [selectedInstallation])


  return <GitHubDashboard repos={repoData} />;
}
