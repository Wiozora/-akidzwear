import { CartItem } from '@/types';

export const formatWhatsAppMessage = (cartItems: CartItem[]): string => {
    if (cartItems.length === 0) return '';

    const phoneNumber = '923000000000'; // Replace with actual WhatsApp number

    let message = `*New Order - AkidZ Wear*%0A%0A`;

    let total = 0;
    cartItems.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const size = item.selectedSize ? ` - Size: ${item.selectedSize}` : '';
        message += `${index + 1}. ${item.name}${size} (x${item.quantity}) - PKR ${itemTotal.toLocaleString()}%0A`;
    });

    message += `%0A*Total Amount:* PKR ${total.toLocaleString()}%0A%0A`;
    message += `Please process my order.`;

    return `https://wa.me/${phoneNumber}?text=${message}`;
};
