
import { ReactComponent as  MathsIcon} from "assets/svgs/mathsIcon.svg";
import { ReactComponent as  PhysicsIcon} from "assets/svgs/physicsIcon.svg";
import { ReactComponent as  ChemistryIcon} from "assets/svgs/chemistryIcon.svg";
import { ReactComponent as  BiologyIcon} from "assets/svgs/biologyIcon.svg";
import { ReactComponent as  EnglishIcon} from "assets/svgs/englishIcon.svg";

import { ReactComponent as  MathsBlob} from "assets/svgs/mathsBlob.svg";
import { ReactComponent as  PhysicsBlob} from "assets/svgs/physicsBlob.svg";
import { ReactComponent as  ChemistryBlob} from "assets/svgs/chemistryBlob.svg";
import { ReactComponent as  BiologyBlob} from "assets/svgs/biologyBlob.svg";
import { ReactComponent as  EnglishBlob} from "assets/svgs/englishBlob.svg";

export const requiredSubjectsList = [
    {
        id: 1,
        subject: "Mathematics",
        key: "mathematics",
        isMath: true,
        symbol: MathsIcon,
        abstractSvg: MathsBlob,
    },
    {
        id: 2,
        subject: "Physics",
        key: "physics",
        isPhy: true,
        symbol: PhysicsIcon,
        abstractSvg: PhysicsBlob,
    },
    {
        id: 3,
        subject: "Chemistry",
        key: "chemistry",
        isChem: true,
        symbol: ChemistryIcon,
        abstractSvg: ChemistryBlob,
    },
    {
        id: 4,
        subject: "Biology",
        key: "biology",
        isBio: true,
        symbol: BiologyIcon,
        abstractSvg: BiologyBlob,
    },
    {
        id: 5,
        subject: "English Language",
        key: "english",
        isEng: true,
        symbol: EnglishIcon,
        abstractSvg: EnglishBlob,
    },
]
