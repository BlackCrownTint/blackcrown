export function vltReference(target: number, minimum: number) {
  if (!Number.isFinite(target) || target < 0 || target > 100) return 'unknown';
  return target < minimum ? 'below' : 'within';
}
export function savingsScenario(annualBill: number, coolingShare: number, reduction: number, cost: number, years: number) {
  const values = [annualBill, coolingShare, reduction, cost, years];
  if (values.some(v => !Number.isFinite(v)) || annualBill < 0 || cost < 0 || coolingShare < 0 || coolingShare > 100 || reduction < 0 || reduction > 100 || years < 1 || years > 30) return null;
  const annual = annualBill * coolingShare / 100 * reduction / 100;
  return { annual, cumulative: annual * years, net: annual * years - cost, payback: annual > 0 ? cost / annual : null };
}
