"use client";

import ResponsiveModal from "@/components/ResponsiveModal";
import CreateWorkSpaceForm from "./CreateWorkSpaceForm";
import useCreateWorkspaceModal from "../hooks/useCreateWorkspaceModal";

const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen , close} = useCreateWorkspaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkSpaceForm onCancel={close} />
    </ResponsiveModal>
  );
};

export default CreateWorkspaceModal;
