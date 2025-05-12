import { prisma } from "@/lib/db"
import { cookies } from "next/headers"

export async function POST(request: Request) {
    try {
        const data = await request.json()
        console.log(data)
        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: data.email
                },
                password: {
                    equals: data.password
                }
            }
        })
        if (user) {
            user.password = ""
            const cookieStore = await cookies()
            cookieStore.set('user', user.id)
            return Response.json({ message: "Login success", user })
        }
        return Response.json({ message: "Invalid credentials" }, { status: 401 })
    }
    catch (err) {
        console.log(err)
        return Response.json({ message: "Success" })
    }
}