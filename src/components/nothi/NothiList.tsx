'use client';

import React, { useState } from 'react';
import CreateOwner from './CreateOwner';
import CreateSurvey from './CreateSurvey';

const NothiList = ({ nothiList }: { nothiList: Record<string, any>[] }) => {


    return (
        <tbody>
            {nothiList.map(nothi => (
                <tr key={nothi.id} className="border-b">
                    <td className="p-3 whitespace-nowrap">{nothi.caseNo}</td>
                    <td className="p-3 whitespace-nowrap">{nothi.banglaYear}</td>
                    <td className="p-3">
                        <CreateOwner nothiId={nothi.id} previousOwners={nothi.nothiOwner} />
                    </td>
                    <CreateSurvey nothiId={nothi.id} landSurvey={nothi.landSurvey} />
                </tr>
            ))}
        </tbody>
    );
};

export default NothiList;
