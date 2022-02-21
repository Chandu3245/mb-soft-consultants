export class Profile {
    training: Training;
    intro: Introduction;
    skills: Skills;
    contact: SocialMedia;
}

export class Introduction {
    description: string;
    socialMedia: SocialMedia[];
    selfImage: string;
}

export class SocialMedia {
    icon: string;
    link: string;
}

export class Skills {
    fe: SkillSet;
    be: SkillSet;
    tools: SkillSet;
    other: SkillSet;
}

export class SkillSet {
    desc: string;
    tech: Array<string>;
}

export class Training {
    desc: string;
    trainingImage: string;
}