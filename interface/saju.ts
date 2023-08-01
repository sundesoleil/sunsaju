export interface Feature {
  id: number
  name: string
  ggMonth: string
}

export interface Saju {
  id: number
  sgi: number
  sy: number
  sm: string
  sd: string
  ly: number
  lm: string
  ld: string
  hyGanJee: string
  kyGanJee: string
  hmGanJee: string
  kmGanJee: string
  hdGanJee: string
  kdGanJee: string
  hweek: string
  kweek: string
  starts: string
  leapMonth: number
  monthSize: number
  ddi: string
  holidy: number
  chunganTime: string
  chunganDay: string
  chunganMonth: string
  chunganYear: string
  chunganTimeId: number
  chunganDayId: number
  chunganMonthId: number
  chunganYearId: number
  ggTime: string
  ggDay: string
  ggMonth: string
  ggYear: string
  ggTimeId: number
  ggDayId: number
  feature: Feature
  ggYearId: number
}
