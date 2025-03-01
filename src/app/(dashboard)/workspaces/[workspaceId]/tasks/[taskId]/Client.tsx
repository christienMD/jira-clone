'use client'

import DottedSeparator from "@/components/DottedSeparator";
import PageError from "@/components/PageError";
import PageLoader from "@/components/PageLoader";
import TaskDescription from "@/components/TaskDescription";
import { useGetTask } from "@/features/tasks/api/useGetTask";
import TaskBreadcrumbs from "@/features/tasks/components/TaskBreadcrumbs";
import TaskOverview from "@/features/tasks/components/TaskOverview";
import { useTaskId } from "@/features/tasks/hooks/useTaskId"

const TaskIdCliet = () => {
  const taskId = useTaskId();
  const {data , isLoading} = useGetTask({taskId})

  if (isLoading) {
    return <PageLoader />
  }

  if (!data) {
     return <PageError message="Task not found" />
  }

  return (
    <div className="flex flex-col">
        <TaskBreadcrumbs project={data.project} task={data} />
        <DottedSeparator className="my-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <TaskOverview task={data} />
            <TaskDescription task={data} />
        </div>
    </div>
  )
}

export default TaskIdCliet