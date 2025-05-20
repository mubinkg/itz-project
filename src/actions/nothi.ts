'use server';

import { prisma } from '@/lib/db';

export async function createNothi({
    moujaId,
    caseNo,
    caseNoSecondLine,
    banglaYear,
}: {
    moujaId: string;
    caseNo: string;
    caseNoSecondLine: string;
    banglaYear: string;
}) {
    try {
        const mouja = await prisma.nothi.create({
            data: {
                moujaId,
                caseNo,
                caseNoSecondLine,
                banglaYear,
            },
        });
        return {
            success: true,
            data: mouja,
            message: 'Nothi created successfully!',
        };
    } catch (err) {
        return {
            success: false,
            message: 'Error on creating nothi!',
        };
    }
}

export async function nothiOwner({
    nothiId,
    ownerName,
    gurdianName,
    address,
}: {
    ownerName: string;
    gurdianName: string;
    address: string;
    nothiId: string;
}) {
    try {
        const mouja = await prisma.nothiOwner.create({
            data: {
                nothiId,
                ownerName,
                gurdianName,
                address,
            },
        });
        return {
            success: true,
            data: mouja,
            message: 'Nothi owner created successfully!',
        };
    } catch (err) {
        return {
            success: false,
            message: 'Error on creating nothi owner!',
        };
    }
}

export async function createSurvey({
    saSurvey,
    saLine,
    rsLine,
    rsSurvey,
    quantiy,
    type,
    nothiId
}: {
    saSurvey: string
    saLine: string
    rsSurvey: string
    rsLine: string
    quantiy: string
    type: string
    nothiId: string
}) {
    try {
        const mouja = await prisma.landSurvey.create({
            data: {
                saLine,
                saSurvey,
                rsLine,
                rsSurvey,
                quantiy,
                type,
                nothiId
            },
        });
        return {
            success: true,
            data: mouja,
            message: 'Nothi survey created successfully!',
        };
    } catch (err) {
        return {
            success: false,
            message: 'Error on creating nothi survey!',
        };
    }
}
