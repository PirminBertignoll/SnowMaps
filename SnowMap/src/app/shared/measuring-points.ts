export class MeasurementPoint {
  constructor(
    public id: string,
    public lastUpdate: string,
    public shortname: string,
    public snowHeight: number,
    public newSnowHeight: number,
    public temperature: string,
    public lastSnowDate: string,
    public source: string
  ) {}
}
