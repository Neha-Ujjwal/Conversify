import Image from "next/image";
import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const page = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) {
    redirect("/onboarding");
  }

  //fetch user
  const result = await fetchUsers({
    userId:user.id,
    searchString:"",
    pageNumber:1,
    pageSize:25
  });
  return (
    <section>
        <h1 className="head-text mb-10">search</h1>
    </section>
  )
}

export default page