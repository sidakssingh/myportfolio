export interface LeadershipRole {
  title: string;
  organization: string;
  bullet: string;
  url?: string;
}

export const leadershipRoles: LeadershipRole[] = [
  {
    title: "director",
    organization: "tigers in product",
    bullet: "outreach pipeline under princeton's 550+ member E-Club, connecting students with startup SWE/PM roles",
  },
  {
    title: "director",
    organization: "envision AI",
    bullet: "student-led AI conference: 6 industry speakers, 100+ attendees, weekly RL/NLP/CV seminars",
  },
  {
    title: "finance lead",
    organization: "princeton autonomous vehicle engineering",
    bullet: "managing financial operations for princeton's self-driving systems team",
  },
  {
    title: "vice president",
    organization: "sikhs of princeton",
    bullet: "building community and cultural awareness through campus programming",
  },
];

export const volunteeringBullet =
  "facilitated hands-on science labs and reading groups for underserved elementary classrooms; organized food drives and academic outreach campaigns";
