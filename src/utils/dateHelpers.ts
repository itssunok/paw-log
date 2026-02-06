// src/utils/dateHelpers.ts

/**
 * Formats a date to 'YYYY-MM-DD HH:MM:SS'
 * @param {Date} date - The date to format
 * @returns {string} - The formatted date string
 */
function formatDate(date) {
    const YYYY = date.getUTCFullYear();
    const MM = String(date.getUTCMonth() + 1).padStart(2, '0');
    const DD = String(date.getUTCDate()).padStart(2, '0');
    const HH = String(date.getUTCHours()).padStart(2, '0');
    const MI = String(date.getUTCMinutes()).padStart(2, '0');
    const SS = String(date.getUTCSeconds()).padStart(2, '0');
    return `${YYYY}-${MM}-${DD} ${HH}:${MI}:${SS}`;
}

/**
 * Add days to a date
 * @param {Date} date - The original date
 * @param {number} days - The number of days to add
 * @returns {Date} - The new date
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setUTCDate(result.getUTCDate() + days);
    return result;
}

/**
 * Subtract days from a date
 * @param {Date} date - The original date
 * @param {number} days - The number of days to subtract
 * @returns {Date} - The new date
 */
function subtractDays(date, days) {
    return addDays(date, -days);
}

/**
 * Get the start of the day in UTC
 * @param {Date} date - The original date
 * @returns {Date} - The start of the day
 */
function startOfDay(date) {
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

/**
 * Get the end of the day in UTC
 * @param {Date} date - The original date
 * @returns {Date} - The end of the day
 */
function endOfDay(date) {
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 23, 59, 59));
}

module.exports = {
    formatDate,
    addDays,
    subtractDays,
    startOfDay,
    endOfDay,
};
