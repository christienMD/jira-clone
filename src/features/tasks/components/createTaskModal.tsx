"use client";

import ResponsiveModal from "@/components/ResponsiveModal";
import useCreateTaskModal from "../hooks/useCreateTaskModal";

export const CreateTaskModal = () => {
  const { isOpen, setIsOpen } = useCreateTaskModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <div className="">TODO: Task form</div>
    </ResponsiveModal>
  );
};
