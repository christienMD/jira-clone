"use client";

import ResponsiveModal from "@/components/ResponsiveModal";
import useCreateTaskModal from "../hooks/useCreateTaskModal";
import CreateTaskFormWrapper from "./createTaskFormWrapper";

export const CreateTaskModal = () => {
  const { isOpen, setIsOpen , close} = useCreateTaskModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};
