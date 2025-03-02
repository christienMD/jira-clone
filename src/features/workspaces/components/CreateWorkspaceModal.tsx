"use client";

import ResponsiveModal from "@/components/ResponsiveModal";
import useCreateWorkspaceModal from "../hooks/useCreateWorkspaceModal";
import CreateWorkSpaceForm from "./CreateWorkSpaceForm";

const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen , close} = useCreateWorkspaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkSpaceForm onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateWorkspaceModal;
