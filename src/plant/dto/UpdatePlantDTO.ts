import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class UpdatePlantDTO {
  @ApiProperty()
  @IsString() readonly commonName?: string;

  @ApiProperty()
  @IsString() readonly scientificName?: string;

  @ApiProperty()
  @IsString() readonly family?: string;

  @ApiProperty()
  @IsString() readonly subfamily?: string;

  @ApiProperty()
  @IsString() readonly genus?: string;

  @ApiProperty()
  @IsString() readonly firstPicture?: string;

  @ApiProperty()
  @IsString() readonly secondPicture?: string;

  @ApiProperty()
  @IsString() readonly thirdPicture?: string;

  @ApiProperty()
  @IsBoolean() readonly isVerified?: boolean;
}