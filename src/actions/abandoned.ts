'use server';

import { prisma } from '@/lib/db';

export async function createAbandoned({
  moujaId,
  upazila,
  village,
  dagNo,
  dagLandSize,
  dateOfRegistration,
  dateOfInspection,
  settlementCaseDateBook12,
  comment,
}: {
  moujaId: string;
  upazila: string;
  village: string;
  dagNo: string;
  dagLandSize: string;
  dateOfRegistration: string;
  dateOfInspection: string;
  settlementCaseDateBook12: string;
  comment: string;
}) {
  try {
    const abandoned = await prisma.abandoned.create({
      data: {
        moujaId,
        upazila,
        village,
        dagNo,
        dagLandSize,
        dateOfRegistration,
        dateOfInspection,
        settlementCaseDateBook12,
        comment,
      },
    });
    return {
      success: true,
      data: abandoned,
      message: 'Abandoned property created successfully!',
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: 'Error on creating abandoned property!',
    };
  }
}

export async function updateAbandoned({
  id,
  moujaId,
  upazila,
  village,
  dagNo,
  dagLandSize,
  dateOfRegistration,
  dateOfInspection,
  settlementCaseDateBook12,
  comment,
}: {
  id: string;
  moujaId: string;
  upazila: string;
  village: string;
  dagNo: string;
  dagLandSize: string;
  dateOfRegistration: string;
  dateOfInspection: string;
  settlementCaseDateBook12: string;
  comment: string;
}) {
  return prisma.abandoned.update({
    where: { id },
    data: {
      moujaId,
      upazila,
      village,
      dagNo,
      dagLandSize,
      dateOfRegistration,
      dateOfInspection,
      settlementCaseDateBook12,
      comment,
    },
  });
}

export async function deleteAbandoned(id: string) {
  try {
    await prisma.abandoned.delete({ where: { id } });
    return { success: true, message: 'Abandoned property deleted successfully!' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'Error deleting abandoned property!' };
  }
}

// export async function nothiOwner({
//   nothiId,
//   ownerName,
//   gurdianName,
//   address,
// }: {
//   ownerName: string;
//   gurdianName: string;
//   address: string;
//   nothiId: string;
// }) {
//   try {
//     const mouja = await prisma.nothiOwner.create({
//       data: {
//         nothiId,
//         ownerName,
//         gurdianName,
//         address,
//       },
//     });
//     return {
//       success: true,
//       data: mouja,
//       message: 'Nothi owner created successfully!',
//     };
//   } catch (err) {
//     return {
//       success: false,
//       message: 'Error on creating nothi owner!',
//     };
//   }
// }

// export async function createSurvey({
//   saSurvey,
//   saLine,
//   rsLine,
//   rsSurvey,
//   quantiy,
//   type,
//   nothiId,
// }: {
//   saSurvey: string;
//   saLine: string;
//   rsSurvey: string;
//   rsLine: string;
//   quantiy: string;
//   type: string;
//   nothiId: string;
// }) {
//   try {
//     const mouja = await prisma.landSurvey.create({
//       data: {
//         saLine,
//         saSurvey,
//         rsLine,
//         rsSurvey,
//         quantiy,
//         type,
//         nothiId,
//       },
//     });
//     return {
//       success: true,
//       data: mouja,
//       message: 'Nothi survey created successfully!',
//     };
//   } catch (err) {
//     return {
//       success: false,
//       message: 'Error on creating nothi survey!',
//     };
//   }
// }
