export function formatPhoneNumberForTel(rawNumber: string): string {
  const digits = rawNumber.replace(/\D/g, "");

  if (digits.startsWith("0")) {
    return `tel:+33${digits.slice(1)}`;
  }

  return `tel:+${digits}`;
}
