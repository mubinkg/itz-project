import { LoginForm } from "@/components/login-form"
import { prisma } from "@/lib/db"

export default async function Page() {
  const users = await prisma.user.findMany()
  console.log(users)

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
