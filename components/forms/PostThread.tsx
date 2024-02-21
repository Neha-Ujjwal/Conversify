"use client";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { ThreadValidation } from "@/lib/validations/thread";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

// import { updateUser } from "@/lib/actions/user.actions";


interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };

  btnTitle: string;
}



const PostThread = ({userId}:{userId:string}) => {
    const router = useRouter();
    const pathname = usePathname();
  
    const form = useForm({
      resolver: zodResolver(ThreadValidation),
      defaultValues: {
        thread:"",
        accountId:userId,
      },
    });


    const onSubmit= async () => {
        // await createThead
    }

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >

        <FormField
          control={form.control}
         name="thread"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              {/* w-full means full width of container not screen */}
              <FormLabel className="text-base-semibold text-light-2">
                Name
              </FormLabel>
              <FormControl className=" mt-10 no-focus border border-dark-4 bg-dark-3 text-light-1">
                <textarea
                rows={15}
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit"  className="bg-primary-500">Post Thread</Button>
        </form>
        </Form>
  )
}

export default PostThread