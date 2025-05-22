'use server';

import { Status } from '@/generated/prisma';
import { prisma } from '@/lib/db';

export async function createNothi({
  moujaId,
  caseNo,
  khotianNo,
  lineNo,
  quantity,
  landType,
  comment,
  caseInfo,
  name,
  parentName,
  address,
  mobile,
  renewalDate,
  status,
}: {
  moujaId: string;
  caseNo: string;
  khotianNo: string;
  lineNo: string;
  quantity: string;
  landType: string;
  comment: string;
  caseInfo: string;
  name: string;
  parentName: string;
  address: string;
  mobile: string;
  renewalDate: string;
  status?: Status
}) {
  try {
    console.log('hello')
    const nothi = await prisma.nothi.create({
      data: {
        moujaId,
        caseNo,
        khotianNo,
        lineNo,
        quantity,
        landType,
        comment,
        caseInfo,
        name,
        parentName,
        address,
        mobile,
        renewalDate,
        status: status || 'ACTIVE',
      },
    });

    return {
      success: true,
      data: nothi,
      message: 'Nothi created successfully!',
    };
  } catch (err) {
    console.error('Error data ', err); // helpful during debugging
    return {
      success: false,
      message: 'Error on creating nothi!',
    };
  }
}