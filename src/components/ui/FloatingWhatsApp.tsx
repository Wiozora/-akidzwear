'use client';

import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/923000000000?text=Hi!%20I%20have%20a%20question%20about%20AkidZ%20Wear."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        </a>
    );
};
