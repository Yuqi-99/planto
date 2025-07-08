export function formatAmount(amt: number | bigint) {
	return amt?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatAmountStr(amt: string) {
	const amount = parseFloat(amt);
	return amount?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
