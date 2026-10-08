/* ==========================================
            GITHUB LIVE API
   Fetches real-time stats from GitHub API
   Username: SwayamRitirajDash
========================================== */

const GITHUB_USERNAME = "SwayamRitirajDash";
const GITHUB_API_URL  = `https://api.github.com/users/${GITHUB_USERNAME}`;
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`;

/* ── Animate numbers counting up ─────────────────────────── */
function animateCount(element, target, duration = 1200) {

    if (isNaN(target)) {
        element.textContent = target; // non-numeric values (e.g. "Coming soon")
        return;
    }

    let start     = 0;
    const step    = Math.ceil(target / (duration / 16));
    const counter = setInterval(() => {

        start += step;

        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = start;
        }

    }, 16);

}

/* ── Update the GitHub stats card ───────────────────────── */
function updateGithubStats(user, repos) {

    // ── Selectors (works on index.html's inline card) ──────
    const statEls = document.querySelectorAll(".github-stats .stat h2");

    if (!statEls.length) return;

    // Compute totals from repo list
    const totalStars  = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
    const totalForks  = repos.reduce((sum, r) => sum + r.forks_count, 0);

    // Map stats in order: Repos | Stars | Forks | Followers
    const stats = [
        user.public_repos,
        totalStars,
        totalForks,
        user.followers,
    ];

    // Update label text to match the new values
    const labelEls = document.querySelectorAll(".github-stats .stat p");
    const labels   = ["Repositories", "Stars", "Forks", "Followers"];

    statEls.forEach((el, i) => {
        animateCount(el, stats[i] ?? 0);
    });

    labelEls.forEach((el, i) => {
        if (labels[i]) el.textContent = labels[i];
    });

}

/* ── Show error state gracefully ────────────────────────── */
function showGithubError() {

    const statEls = document.querySelectorAll(".github-stats .stat h2");
    statEls.forEach(el => { el.textContent = "—"; });

}

/* ── Main fetch ─────────────────────────────────────────── */
async function fetchGithubStats() {

    try {

        const [userRes, reposRes] = await Promise.all([
            fetch(GITHUB_API_URL),
            fetch(GITHUB_REPOS_URL),
        ]);

        if (!userRes.ok || !reposRes.ok) {
            throw new Error("GitHub API request failed");
        }

        const user  = await userRes.json();
        const repos = await reposRes.json();

        updateGithubStats(user, repos);

        // ── Also update the "Visit GitHub" button href if present ──
        const githubBtn = document.querySelector(".github a.btn-primary");
        if (githubBtn) githubBtn.href = user.html_url;

    } catch (err) {

        console.warn("GitHub API:", err.message);
        showGithubError();

    }

}

/* ── Run on DOM ready ───────────────────────────────────── */
document.addEventListener("DOMContentLoaded", fetchGithubStats);
