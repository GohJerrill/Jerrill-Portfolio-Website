import React from "react";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
            {/* match your site layout padding */}
            <div className="w-full !px-5 sm:!px-8 lg:!px-25 !py-6">
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <p className="text-white/70 text-sm">
                        © 2026 Goh Jerrill. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/60">
                        <span>Built with</span>
                        <span className="text-white/70">React</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/70">Tailwind</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/70">Framer Motion</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/70">❤️</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;