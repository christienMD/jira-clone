# Jira Clone - By Mesueh Christien

A lightweight Jira-inspired task management app built with modern web technologies. Manage your projects, track tasks, and collaborate with your team - all in one place. The system features real-time synchronization, responsive layouts, and optimized drag-and-drop functionality built on custom React hooks. The integration with Appwrite's backend services demonstrates proficiency in modern authentication flows and database design. With performance-optimized rendering and careful attention to accessibility standards, This Jira-Clon represents a comprehensive showcase of full-stack development capabilities focused on delivering exceptional user experiences.

## Tech Stack

- **Next.js**: 14.2.14
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Accessible UI components
- **Appwrite**: Backend as a service for database and authentication
- **Hono**: Lightweight, ultrafast web framework for building API routes and server-side functions with minimal overhead, improving application performance
- **Zod**: TypeScript-first schema validation
- **React Hook Form**: Form validation and handling
- **React Query**: Data fetching and state management

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/christienMD/jira-clone.git
cd jira-clone
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables by creating a `.env.local` file based on `.env.example`

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=your_workspaces_collection_id
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=your_members_collection_id
NEXT_PUBLIC_APPWRITE_PROJECTS_ID=your_projects_collection_id
NEXT_PUBLIC_APPWRITE_TASKS_ID=your_tasks_collection_id
NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID=your_images_bucket_id

NEXT_APPWRITE_KEY=your_appwrite_api_key
```

## License
