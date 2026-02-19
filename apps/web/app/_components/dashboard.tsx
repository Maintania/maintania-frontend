

async function getRepos() {
    try {
        const res = await fetch("http://127.0.0.1:8000/github/repos", {
            cache: "no-store"
          })
          return res.json()
    } catch (error) {
        console.log("api fiales to fetch repo")
    }
  }


  export default async function Dashboard() {
    const data = await getRepos()
    const repos = data?.repositories || []
  
    return (
      <div>
        <h1>Select Repository</h1>
  
        {repos.map((repo: any) => (
          <div key={repo.id} className="p-2 border rounded mb-2 text-white">
            <p>{repo.full_name}</p>
          </div>
        ))}
      </div>
    )
  }