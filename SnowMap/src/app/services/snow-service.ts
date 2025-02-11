import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkiResort} from '../shared/ski-resort';
import { MeasurementPoint } from '../shared/measuring-points';

@Injectable({
  providedIn: 'root',
})
export class SkiResortService {
  private apiUrl = 'https://tourism.api.opendatahub.com/v1/Weather/SnowReport';

  constructor(private http: HttpClient) {}

  getSkiResorts(): Observable<SkiResort[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) =>
          new SkiResort(
            item.Id,
            item.RID,
            item.Skiregion,
            item.Areaname,
            item.LastUpdate,
            item.lang,
            Number(item.SkiAreaSlopeKm),
            item.SkiMapUrl,
            item.Measuringpoints.map((mp) =>
              new MeasurementPoint(
                mp.Id,
                mp.LastUpdate,
                mp.Shortname,
                Number(mp.SnowHeight),
                Number(mp.newSnowHeight),
                mp.Temperature,
                mp.LastSnowDate,
                mp.Source
              )
            ),
            item.WebcamUrl || [],
            Number(item.totalskilift),
            Number(item.openskilift),
            Number(item.totalskiliftkm),
            Number(item.openskiliftkm),
            Number(item.totalskislopes),
            Number(item.openskislopes),
            Number(item.totalskislopeskm),
            Number(item.openskislopeskm),
            Number(item.totaltracks),
            Number(item.opentracks),
            Number(item.totaltrackskm),
            Number(item.opentrackskm),
            Number(item.totalslides),
            Number(item.opentslides),
            Number(item.totalslideskm),
            Number(item.opentslideskm),
            item.totaliceskating ? Number(item.totaliceskating) : null,
            item.openiceskating ? Number(item.openiceskating) : null,
            item.contactadress,
            item.contacttel,
            item.contactcap,
            item.contactcity,
            item.contactfax || null,
            item.contactweburl,
            item.contactmail,
            item.contactlogo,
            Number(item.contactgpsnorth),
            Number(item.contactgpseast)
          )
        )
      )
    );
  }
}
