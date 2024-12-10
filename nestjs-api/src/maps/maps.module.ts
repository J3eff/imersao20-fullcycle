import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { Client } from '@googlemaps/google-maps-services-js';

@Module({
  controllers: [PlacesController],
  providers: [
    PlacesService,
    {
      provide: Client,
      useValue: new Client({}),
    },
  ],
})
export class MapsModule {}
