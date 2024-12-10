import { Injectable } from '@nestjs/common';
import { Client, PlaceInputType } from '@googlemaps/google-maps-services-js';

@Injectable()
export class PlacesService {
  constructor(private googleMapsClient: Client) {}

  async findPlaces(text: string) {
    const { data } = await this.googleMapsClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['place_id', 'formatted_address', 'geometry', 'name'],
        key: 'AIzaSyDz-tuExMDgoZybvLu8s4oEkcnrHI5iwFw',
      },
    });

    return data;
  }
}
