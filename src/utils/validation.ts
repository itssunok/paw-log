// validation.ts

/**
 * Validate email format.
 * @param email - The email address to validate.
 * @returns True if valid, otherwise false.
 */
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
};

/**
 * Validate phone number format.
 * @param phone - The phone number to validate.
 * @returns True if valid, otherwise false.
 */
export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return phoneRegex.test(phone);
};

/**
 * Validate EU passport number format.
 * @param passport - The passport number to validate.
 * @returns True if valid, otherwise false.
 */
export const validateEUPassport = (passport: string): boolean => {
    const passportRegex = /^[A-Z]{2}\d{7}$/;
    return passportRegex.test(passport);
};
