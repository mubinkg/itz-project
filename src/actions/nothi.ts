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
  status?: Status;
}) {
  try {
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

export async function updateNothi({
  id,
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
  id: string; // ID of the nothi to update
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
  status?: Status;
}) {
  try {
    const nothi = await prisma.nothi.update({
      where: { id }, // Update the record with the matching ID
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
      message: 'Nothi updated successfully!',
    };
  } catch (err) {
    console.error('Error data ', err); // helpful during debugging
    return {
      success: false,
      message: 'Error on updating nothi!',
    };
  }
}

export async function deleteNothi(id: string) {
  try {
    // Use Prisma to delete the nothi record by its ID
    const nothi = await prisma.nothi.delete({
      where: { id },
    });

    return {
      success: true,
      data: nothi,
      message: 'Nothi deleted successfully!',
    };
  } catch (err) {
    console.error('Error data ', err); // helpful during debugging
    return {
      success: false,
      message: 'Error on deleting nothi!',
    };
  }
}

