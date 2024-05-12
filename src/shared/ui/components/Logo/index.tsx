import Image from "next/image";

import { logo } from '../../../../../public/images';

export const Logo = () => <Image src={logo} width={154} height={44} alt="logo" />;