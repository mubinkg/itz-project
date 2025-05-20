'use server'

import { prisma } from "@/lib/db"

export async function createNothi({ moujaId, caseNo, caseNoSecondLine, banglaYear }: { moujaId: string, caseNo: string, caseNoSecondLine: string, banglaYear: string }) {
    try {
        const mouja = await prisma.nothi.create({
            data: {
                moujaId,
                caseNo,
                caseNoSecondLine,
                banglaYear
            }
        })
        return {
            success: true,
            data: mouja,
            message: "Nothi created successfully!"
        }
    }
    catch (err) {
        return {
            success: false,
            message: "Error on creating nothi!"
        }
    }
}