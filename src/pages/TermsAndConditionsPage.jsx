import React from 'react';
import { TerminalLabel } from '../components/motifs/TerminalLabel';

const SECTIONS = [
  {
    "id": "1",
    "title": "1. Definitions",
    "items": [
      [
        "1.1",
        "“AXIS” / “Organizers” means the organizing team of the AXIS fest, including its Campus Ambassador Program team (CA Program Head, Zonal Coordinators, Ops/Data team and Web team)."
      ],
      [
        "1.2",
        "“Campus Ambassador” / “CA” means a student selected by the Organizers to represent AXIS at their college under this Program."
      ],
      [
        "1.3",
        "“Dashboard” means the CA website and its logged-in area where tasks, submissions, referral codes, points and the leaderboard are managed."
      ],
      [
        "1.4",
        "“Referral Code” means the unique code or link auto-generated for each CA and used to attribute fest registrations to that CA."
      ],
      [
        "1.5",
        "“Leaderboard Freeze Date” means 5 March 2027, after which no new points are awarded."
      ]
    ]
  },
  {
    "id": "2",
    "title": "2. Eligibility",
    "items": [
      [
        "2.1",
        "The Program is open to students currently enrolled in a recognised college, university or institute in India, in any year and any discipline."
      ],
      [
        "2.2",
        "Applicants below 18 years of age must have the consent of a parent or guardian. The Organizers may request proof of consent."
      ],
      [
        "2.3",
        "Core team members, Zonal Coordinators and immediate family members of the Program team are not eligible to be ranked for rewards."
      ],
      [
        "2.4",
        "Each person may hold only one CA account. Duplicate applications or accounts may be rejected or merged at the Organizers’ discretion."
      ],
      [
        "2.5",
        "All information in the application must be true and accurate. A false or misleading application may lead to rejection or removal at any stage, including after rewards have been announced."
      ]
    ]
  },
  {
    "id": "3",
    "title": "3. Application & Selection",
    "items": [
      [
        "3.1",
        "Applications open on 1 September 2026 through the official CA website. Applying does not guarantee selection."
      ],
      [
        "3.2",
        "Selection is based on the application form (motivation, a campus promotion idea, and prior leadership or club experience), scored on effort and clarity. The Organizers may also consider the college’s reach and club activity."
      ],
      [
        "3.3",
        "To spread reach, the Organizers may cap the number of selected CAs per college (typically 2–3). Selection decisions are final and no reasons need be given."
      ],
      [
        "3.4",
        "Results are expected around 25 September 2026 and are shown on the application status page. Dashboard access is enabled only for selected CAs."
      ],
      [
        "3.5",
        "Each selected CA is assigned one primary domain (Design, Digital Marketing, Social Media Marketing, Event Management, or Web Development) based on their application. The Organizers may reassign domains or zones where needed."
      ]
    ]
  },
  {
    "id": "4",
    "title": "4. Nature of the Role",
    "items": [
      [
        "4.1",
        "The CA role is a voluntary, student-representation opportunity. It is not employment, an internship with wages, or an agency, and creates no employer–employee, partnership or agency relationship."
      ],
      [
        "4.2",
        "No salary, stipend, commission or fee is payable to a CA. Rewards are limited to those listed in Section 8."
      ],
      [
        "4.3",
        "CAs may represent AXIS only for the purposes of this Program. A CA has no authority to sign agreements, collect money, make financial commitments or speak on behalf of AXIS on any matter outside assigned tasks."
      ],
      [
        "4.4",
        "CAs must not collect registration fees, sponsorship money or any payment in cash or to personal accounts in the name of AXIS. All payments must be made only through the official AXIS registration platform."
      ]
    ]
  },
  {
    "id": "6",
    "title": "6. Referral Code & Registration Attribution",
    "items": [
      [
        "6.1",
        "A registration counts for a CA only if (a) it is completed through that CA’s Referral Code or link, (b) the participant is a real, distinct person, and (c) the registration is confirmed and, where applicable, paid on the official AXIS platform."
      ],
      [
        "6.2",
        "Self-registrations, registrations by family members created only to earn points, bulk or fake registrations, and registrations later refunded, cancelled or found invalid will not be counted. Points already awarded for such registrations may be reversed."
      ],
      [
        "6.3",
        "The system’s tracking records are final. If a technical fault affects attribution, the Ops team may correct records manually based on verifiable proof; the Organizers’ decision is final."
      ],
      [
        "6.4",
        "CAs must not use misleading claims, spam, unsolicited bulk messaging, or paid or deceptive methods to drive registrations, and must follow the rules of each platform (WhatsApp, Telegram, Instagram, LinkedIn, etc.) and of their own college."
      ]
    ]
  },
  {
    "id": "7",
    "title": "7. Leaderboard, Freeze & Disputes",
    "items": [
      [
        "7.1",
        "A public leaderboard shows the top-ranked CAs. By applying, you consent to your name, college, domain, points and rank being displayed publicly."
      ],
      [
        "7.2",
        "No new points are awarded after the Leaderboard Freeze Date (5 March 2027). Submissions after this date are not considered."
      ],
      [
        "7.3",
        "Ties in points are resolved by, in order: higher number of verified registrations, earlier time of reaching the tied score, then the Organizers’ judgement."
      ],
      [
        "7.4",
        "Any query on points must be raised in writing to the Program team within 7 days of the points being updated, or before the freeze date, whichever is earlier. Disputes after the final leaderboard is published will not be entertained."
      ]
    ]
  },
  {
    "id": "9",
    "title": "9. Code of Conduct",
    "items": [
      [
        "9.1",
        "CAs must behave respectfully and professionally towards other CAs, the Organizers, participants, college authorities and the public, both online and offline."
      ],
      [
        "9.2",
        "CAs must not post or share content that is offensive, discriminatory, hateful, defamatory, sexually explicit, politically inflammatory, or that violates any law or third-party rights."
      ],
      [
        "9.3",
        "CAs must not make false statements about AXIS, its events, prizes, speakers, sponsors or fees, and must use only the official information, brand assets and toolkit supplied by the Organizers."
      ],
      [
        "9.4",
        "CAs must not misuse the AXIS name or logo, create unofficial AXIS pages or groups presented as official, or approach sponsors or vendors on behalf of AXIS beyond tasks explicitly assigned."
      ],
      [
        "9.5",
        "CAs must obtain the required permission from their college (for example, faculty or HOD approval) before holding on-campus activities, and must follow all college rules and local laws."
      ],
      [
        "9.6",
        "CAs must not tamper with or attempt to exploit the Dashboard, the referral system or the leaderboard, or access any data or account that is not their own."
      ]
    ]
  },
  {
    "id": "10",
    "title": "10. Intellectual Property & Content",
    "items": [
      [
        "10.1",
        "All AXIS names, logos, designs and toolkit materials remain the property of AXIS. CAs receive a limited, revocable, non-transferable permission to use them only for Program tasks and only in the manner prescribed in the brand guidelines."
      ],
      [
        "10.2",
        "CAs retain ownership of the original work they create. By submitting it, the CA grants AXIS a free, worldwide, perpetual, non-exclusive right to use, reproduce, modify and publish that work (with credit where practicable) for AXIS promotion, the Program and future editions."
      ],
      [
        "10.3",
        "CAs confirm that their submissions do not infringe any copyright, trademark or other right of a third party (including images, music, fonts and templates) and that they have the necessary permissions to submit them."
      ],
      [
        "10.4",
        "For Web Development tasks, code contributed to the CA website is licensed to AXIS on the same terms as 10.2 and may be modified, reused and maintained by AXIS."
      ]
    ]
  },
  {
    "id": "11",
    "title": "11. Privacy & Data Protection",
    "items": [
      [
        "11.1",
        "AXIS collects personal data such as name, college, year, contact details, social profile links, application responses, submissions and activity data. This is used to run the Program, verify tasks, track referrals, display the leaderboard, communicate with CAs, issue rewards and certificates, and plan future editions."
      ],
      [
        "11.2",
        "AXIS processes this data in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023. Data is retained only as long as reasonably needed for these purposes and for record-keeping."
      ],
      [
        "11.3",
        "AXIS may share limited information with service providers (for example, hosting and communication tools) and, where required, with college authorities for verification of activities. AXIS does not sell personal data."
      ],
      [
        "11.4",
        "Photographs and videos taken during Program activities and the fest may be used by AXIS for promotion. A CA who does not wish to be featured should inform the Program team in writing."
      ],
      [
        "11.5",
        "A CA may request access, correction or deletion of their data by writing to the contact address in Section 16. Deletion may result in withdrawal from the Program and loss of pending rewards."
      ]
    ]
  },
  {
    "id": "12",
    "title": "12. On-Ground Activities & Safety",
    "items": [
      [
        "12.1",
        "Activities such as roadshows, info-sessions, booths and contingent coordination are undertaken by the CA voluntarily and at the CA’s own responsibility. CAs must act safely, lawfully and in accordance with college rules."
      ],
      [
        "12.2",
        "CAs organising events on campus are responsible for obtaining permissions and for the conduct of attendees. AXIS does not insure, supervise or take responsibility for such activities unless it has explicitly agreed in writing."
      ],
      [
        "12.3",
        "Where a CA is selected as an on-ground Coordinator at the fest, separate volunteer guidelines may apply, and the CA must follow them."
      ]
    ]
  },
  {
    "id": "13",
    "title": "13. Suspension, Disqualification & Withdrawal",
    "items": [
      [
        "13.1",
        "The Organizers may warn, suspend, remove or disqualify a CA, withhold or reverse points, and cancel rewards or certificates, with or without notice, for violating these Terms, including for fraud, fake submissions, misconduct, misrepresentation, or conduct that harms AXIS or its reputation."
      ],
      [
        "13.2",
        "A CA may withdraw from the Program at any time by informing the Program team in writing. Withdrawal before the Leaderboard Freeze Date forfeits eligibility for rewards."
      ],
      [
        "13.3",
        "CAs who remain inactive for a prolonged period may be marked inactive and removed from reward consideration."
      ],
      [
        "13.4",
        "The Organizers may suspend, modify or end the Program, or any part of it, if required by circumstances beyond their control, legal requirements, or the fest being rescheduled or cancelled."
      ]
    ]
  },
  {
    "id": "14",
    "title": "14. Disclaimers & Limitation of Liability",
    "items": [
      [
        "14.1",
        "The Program, Dashboard and rewards are provided on an “as available” basis. AXIS does not guarantee uninterrupted or error-free operation of the website or that any particular number of points, ranks or rewards will be achieved."
      ],
      [
        "14.2",
        "To the maximum extent permitted by law, AXIS, its organisers, volunteers and associated institution are not liable for any indirect, incidental or consequential loss, loss of opportunity, or any injury, loss or damage arising from a CA’s own activities, travel, or use of third-party platforms."
      ],
      [
        "14.3",
        "Nothing in these Terms excludes any liability that cannot be excluded under applicable law."
      ]
    ]
  },
  {
    "id": "15",
    "title": "15. Changes to these Terms",
    "items": [
      [
        "15.1",
        "The Organizers may update these Terms from time to time. Material changes will be notified on the Dashboard, by email or on the official announcement channel. Continued participation after notice constitutes acceptance of the updated Terms."
      ],
      [
        "15.2",
        "If there is any conflict between these Terms and a specific task or announcement concerning that task, the task-specific instruction will prevail for that task only."
      ]
    ]
  }
];

function TermsAndConditionsPage() {
    return (
        <div className="bg-void min-h-screen pb-20 pt-20 relative text-sandstone">
            {/* Background Grid */}
            <div className="absolute inset-0 axis-grid-bg opacity-30 pointer-events-none fixed"></div>

            {/* Header Banner */}
            <div className="relative border-b border-border bg-obsidian-soft/80 backdrop-blur-md pb-12 pt-12 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
                    <TerminalLabel prefix=">">AXIS'27 Terms & Conditions</TerminalLabel>
                    <h1 className="text-4xl sm:text-5xl font-display font-black text-white tracking-widest uppercase mt-4">
                        AXIS
                    </h1>
                    <p className="mt-3 text-amber font-mono text-sm sm:text-base max-w-2xl mx-auto uppercase tracking-widest font-semibold">
                        Campus Ambassador Program 2026–27
                    </p>
                    <h2 className="mt-2 text-xl sm:text-2xl font-display font-bold text-white tracking-wider uppercase">
                        TERMS & CONDITIONS
                    </h2>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 relative z-10 animate-fade-in">
                {/* Document Metadata */}
                <div className="mb-6 p-4 sm:p-5 bg-obsidian/70 border border-border border-l-4 border-l-amber font-mono text-xs sm:text-sm text-sandstone-dim leading-relaxed">
                    <p>
                        Effective from: 1 September 2026 | Program period: 28 September 2026 – 5 March 2027 (leaderboard freeze), with rewards closing within 2 weeks after the fest | Fest: AXIS, March 2027 (dates to be confirmed)
                    </p>
                </div>

                {/* Agreement Preamble */}
                <div className="mb-10 p-5 sm:p-6 bg-obsidian-soft border border-border font-mono text-xs sm:text-sm text-sandstone leading-relaxed">
                    <p>
                        By submitting an application to the AXIS Campus Ambassador (“CA”) Program, you confirm that you have read, understood and agreed to these Terms & Conditions (“Terms”). If you do not agree, please do not apply.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {SECTIONS.map((section) => (
                        <section 
                            key={section.id} 
                            id={`section-${section.id}`} 
                            className="bg-obsidian/40 border border-border/80 p-5 sm:p-7 transition-colors hover:border-border"
                        >
                            <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-border/60">
                                {section.title}
                            </h3>
                            <div className="space-y-3.5">
                                {section.items.map(([num, text]) => (
                                    <div key={num} className="flex items-start gap-3 sm:gap-4 font-mono text-xs sm:text-sm leading-relaxed text-sandstone">
                                        <span className="text-amber font-bold font-mono shrink-0 select-all pt-0.5">
                                            {num}
                                        </span>
                                        <span className="flex-1">
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditionsPage;
