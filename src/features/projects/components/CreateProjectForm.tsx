"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import DottedSeparator from "@/components/DottedSeparator";

import { useCreateProject } from "../api/useCreateProject";
import { cn } from "@/lib/utils";
import { createProjectSchema } from "../schema";
import useWorkSpaceId from "@/features/workspaces/hooks/useWorkSpaceId";

interface Props {
  onCancel?: () => void;
}

type FormData = z.infer<typeof createProjectSchema>;

const CreateProjectForm = ({ onCancel }: Props) => {
  const workspaceId = useWorkSpaceId()
  const router = useRouter();
  const { mutate, isPending } = useCreateProject();
  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(createProjectSchema.omit({workspaceId: true})),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: FormData) => {
    const finalValues = {
      ...values,
      workspaceId,
      image: values.image instanceof File ? values.image : "",
    };

    mutate(
      { form: finalValues },
      {
        onSuccess: ({ data }) => {
          form.reset();
          // ;
        },
      }
    );
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
    }
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex p-7">
        <CardTitle className="text-xl font-bold">
          Create a new project
        </CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Etnter project name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <div className="flex items-center gap-y-2">
                    <div className="flex items-center gap-x-5">
                      {field.value ? (
                        <div className="size-[72px] relative rounded-md overflow-hidden">
                          <Image
                            alt="Logo"
                            fill
                            className="object-cover"
                            src={
                              field.value instanceof File
                                ? URL.createObjectURL(field.value)
                                : field.value
                            }
                          />
                        </div>
                      ) : (
                        <Avatar className="size-[72px]">
                          <AvatarFallback>
                            <ImageIcon className="size-[36px] text-neutral-400" />
                          </AvatarFallback>
                        </Avatar>
                      )}

                      <div className="flex flex-col">
                        <p className="text-sm">Project Icon</p>
                        <p className="text-sm text-muted-foreground">
                          JPG , PNG , SVG , or JPEG, max 1mb
                        </p>
                        <input
                          className="hidden"
                          accept=".jpg, .png, .jpeg, .svg"
                          ref={inputRef}
                          onChange={handleImageChange}
                          disabled={isPending}
                          type="file"
                        />
                        {field.value ? (
                          <Button
                            type="button"
                            variant="destructive"
                            size="xs"
                            className="w-fit mt-2"
                            onClick={() => {
                              field.onChange(null);
                              if (inputRef.current) {
                                inputRef.current.value = "";
                              }
                            }}
                          >
                            Remove Image
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            variant="teritary"
                            size="xs"
                            className="w-fit mt-2"
                            onClick={() => inputRef.current?.click()}
                          >
                            Upload Image
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
            <DottedSeparator className="py-7" />
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-2 w-full">
              <div className="w-full sm:w-fit">
                <Button
                  type="button"
                  size="lg"
                  variant="secondary"
                  onClick={onCancel}
                  disabled={isPending}
                  className={cn("w-full sm:w-auto", !onCancel && "invisible")}
                >
                  Cancel
                </Button>
              </div>
              <div className="w-full sm:w-fit">
                <Button
                  className="w-full sm:w-auto"
                  disabled={isPending}
                  type="submit"
                  size="lg"
                >
                  Create Project
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CreateProjectForm;
