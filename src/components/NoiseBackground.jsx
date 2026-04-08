/**
 * ParticleOrb Component
 * A 3D particle orb fixed to the bottom-right of the viewport.
 * Inspired by natewiley's "Particle Orb CSS" on CodePen.
 * Each dot orbits on its own tilted plane, creating a soft sphere effect.
 */
const ParticleOrb = () => {
    const COUNT  = 60;
    const RADIUS = 100; // translateZ distance — orb radius

    // Distribute orbital plane angles evenly using the golden angle
    // so dots are spread uniformly across the sphere surface
    const rings = Array.from({ length: COUNT }, (_, i) => {
        const goldenAngle = 137.508;
        const rotX = (i / COUNT) * 180;       // elevation spread 0–180°
        const rotY = i * goldenAngle;          // azimuth — golden ratio spacing

        // Vary orbit speed slightly per ring; negative delay staggers start positions
        const duration = 5 + (i % 9) * 0.6;
        const delay    = -((i / COUNT) * duration);
        return { rotX, rotY, duration, delay };
    });

    return (
        <div className="particle-orb-wrap">
            <div className="particle-orb">
                {rings.map((r, i) => (
                    <div
                        key={i}
                        className="orb-ring"
                        style={{ transform: `rotateX(${r.rotX}deg) rotateY(${r.rotY}deg)` }}
                    >
                        <div
                            className="orb-dot"
                            style={{
                                '--orbit-r': `${RADIUS}px`,
                                animationDuration: `${r.duration}s`,
                                animationDelay: `${r.delay}s`,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

window.ParticleOrb = ParticleOrb;
