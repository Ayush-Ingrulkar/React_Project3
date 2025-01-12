// githubApi.js
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: 'YOUR-TOKEN' // Replace with your GitHub token
});

export const getGitHubIssues = async () => {
  try {
    const response = await octokit.request('GET /issues', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub issues:', error);
    throw error;
  }
};
