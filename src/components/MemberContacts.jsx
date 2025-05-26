import Link from 'next/link';
import React from 'react';

const MemberContacts = ({memberData}) => {
  console.log(memberData);
  const acceptedMembers = Array.isArray(memberData?.data)
    ? memberData.data.filter(member => member.status === "Accepted")
    : [];

  return (
    <div className="bg-[rgba(131,130,130,0.13)] rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Member Contacts</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-[#ee2e2e] text-white">
            <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Phone</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Residence Mobile</th>
                <th scope="col" className="px-6 py-3">Business Phone</th>
                <th scope="col" className="px-6 py-3">Blood Group</th>
            </tr>
          </thead>
          <tbody>
            {acceptedMembers.map((member) => (
              <tr key={member.id} className="border-b border-gray-700 hover:bg-[rgba(131,130,130,0.23)]">
                <td className="px-6 py-4">{member.fullName}</td>
                <td className="px-6 py-4">
                  <Link 
                    href={`https://wa.me/88${member.mobile?.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-50 hover:text-red-500 underline"
                  >
                    {member.mobile}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link 
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-50 hover:text-red-500 underline"
                  >
                    {member.email}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link 
                    href={`https://wa.me/88${member.residencePhone?.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-50 hover:text-red-500 underline"
                  >
                    {member.residencePhone}
                  </Link>
                </td>
                <td className="px-6 py-4">
                    <Link 
                        href={`https://wa.me/88${member.businessPhone?.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-50 hover:text-red-500 underline"
                    >
                        {member.businessPhone}
                    </Link>
                </td>
                <td className="px-6 py-4">{member.bloodGroup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberContacts;