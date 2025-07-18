import React, { useRef } from 'react';
import '../../assets/styles/login.scss';

interface ParallaxBgProps {
    images: string[]; // 총 8개의 이미지 경로 배열
}

const ParallaxBg: React.FC<ParallaxBgProps> = ({ images }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (offsetX - centerX) / centerX;
        const moveY = (offsetY - centerY) / centerY;

        const layers = container.querySelectorAll('.parallax-layer');
        layers.forEach((layer, index) => {
            const depth = (index + 1) * 2; // 깊이 조절
            const x = -moveX * depth;
            const y = -moveY * depth;
            (layer as HTMLElement).style.transform =
                `translate(${x}px, ${y}px)`;
        });
    };

    const handleMouseLeave = () => {
        const container = containerRef.current;
        if (!container) return;
        const layers = container.querySelectorAll('.parallax-layer');
        layers.forEach((layer) => {
            (layer as HTMLElement).style.transform = 'translate(0px, 0px)';
        });
    };

    return (
        <div
            className="parallax-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`parallax-layer layer-${index + 1}`}
                    style={{ backgroundImage: `url(${src})`, zIndex: index }}
                />
            ))}
        </div>
    );
};

export default ParallaxBg;
