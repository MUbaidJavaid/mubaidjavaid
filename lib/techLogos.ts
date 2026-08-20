/** Original skill logos from /public/logos — shared across sections */
export const TECH_LOGOS: Record<string, string> = {
  React: '/logos/react.svg',
  'Next.js': '/logos/nextjs.svg',
  TypeScript: '/logos/typescript.svg',
  JavaScript: '/logos/javascript.svg',
  'Tailwind CSS': '/logos/tailwind.svg',
  'Node.js': '/logos/nodejs.svg',
  Express: '/logos/express.svg',
  'Express.js': '/logos/express.svg',
  MongoDB: '/logos/mongodb.svg',
  PostgreSQL: '/logos/postgresql.svg',
  MySQL: '/logos/mysql.svg',
  Git: '/logos/git.svg',
  GitHub: '/logos/github.svg',
  Docker: '/logos/docker.svg',
  Vercel: '/logos/vercel.svg',
  Netlify: '/logos/netlify.svg',
  Redis: '/logos/redis.svg',
  'VS Code': '/logos/vscode.svg',
  Postman: '/logos/postman.svg',
  Render: '/logos/render.svg'
}

export function getTechLogo (name: string): string | undefined {
  return TECH_LOGOS[name]
}
