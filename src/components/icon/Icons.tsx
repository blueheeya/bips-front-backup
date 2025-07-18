import React from 'react';
import allServer from '../../assets/images/icons/nav_icon1.svg';
import internetServer from '../../assets/images/icons/nav_icon2.svg';
import forexServer from '../../assets/images/icons/nav_icon3.svg';
import dataServer from '../../assets/images/icons/nav_icon4.svg';
import kafka from '../../assets/images/icons/nav_iconkafka.svg';
import allServerActive from '../../assets/images/icons/nav_icon1_active.svg';
import internetServerActive from '../../assets/images/icons/nav_icon2_active.svg';
import forexServerActive from '../../assets/images/icons/nav_icon3_active.svg';
import dataServerActive from '../../assets/images/icons/nav_icon4_active.svg';

export type IconType =
    | 'allServer'
    | 'internetServer'
    | 'dataServer'
    | 'forexServer'
    | 'kafka';

const iconMap: Record<IconType, { default: string; active: string }> = {
    allServer: {
        default: allServer,
        active: allServerActive,
    },
    internetServer: {
        default: internetServer,
        active: internetServerActive,
    },
    forexServer: {
        default: forexServer,
        active: forexServerActive,
    },
    dataServer: {
        default: dataServer,
        active: dataServerActive,
    },
    kafka: {
        default: kafka,
        active: kafka,
    },
};

interface IconProps {
    name: IconType;
    isActive?: boolean;
    size?: number;
    className?: string;
    alt?: string;
}

const Icons: React.FC<IconProps> = ({
    name,
    isActive = false,
    size = 24,
    className,
    alt,
}) => {
    const icon = iconMap[name];
    const src = isActive ? icon.active : icon.default;
    return (
        <img
            src={src}
            alt={alt || name}
            className={`icon ${className}`}
            style={{ width: size, height: size }}
        />
    );
};

export default Icons;
