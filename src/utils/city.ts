import cities from '../../data/cities.json';

export interface City {
  density: number;
  lat: number;
  lng: number;
  name: string;
  population: number;
  provinceId: string;
  provinceName: string;
  timezone: string;
}

/**
 * Sort by population, and transform data from JSON to match typing
 */
export const fetchCityList = (max: number): City[] =>
  cities
    .sort((a, b) => b.population - a.population)
    .slice(0, max)
    .map(
      ({
        city,
        density,
        lat,
        lng,
        population,
        province_id,
        province_name,
        timezone,
      }) => ({
        density,
        lat,
        lng,
        name: city,
        population,
        provinceId: province_id,
        provinceName: province_name,
        timezone,
      }),
    );
