import React from 'react';

const teamMembers = [
    { name: 'Ritam Rana' },
    { name: 'Jonathan Maynard' },
    { name: 'Ritvik Varada' },
    { name: 'Arjun Talati' },
];

function MeetTheTeam() {
    return (
        <section className="pt-0 pb-20 bg-gray-900 text-gray-200">  {/* Updated class */}
        <div className="py-12 md:py-10 border-t border-gray-800"></div> 
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
                <p className="text-xl text-gray-400 mb-10">The dedicated team behind Knowlify.</p>
                <div className="flex justify-center space-x-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center ">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
                            <div className="text-lg font-semibold">{member.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MeetTheTeam;
