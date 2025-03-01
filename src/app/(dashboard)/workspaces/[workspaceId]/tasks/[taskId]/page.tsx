import { getCurrent } from '@/features/auth/queries';
import { redirect } from 'next/navigation';
import React from 'react'
import TaskIdCliet from './Client';

const TaskIdPage = async () => {
      const user = await getCurrent();
      if (!user) redirect("/sign-in");

  return (
    <TaskIdCliet />
  )
}

export default TaskIdPage