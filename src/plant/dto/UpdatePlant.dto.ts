import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class UpdatePlantDto {
  @ApiPropertyOptional()
  @IsString() readonly commonName: string;

  @ApiPropertyOptional()
  @IsString() readonly scientificName?: string;

  @ApiPropertyOptional()
  @IsString() readonly family?: string;

  @ApiPropertyOptional()
  @IsString() readonly subfamily?: string;

  @ApiPropertyOptional()
  @IsString() readonly genus?: string;

  @ApiPropertyOptional()
  @IsString() readonly firstPicture?: string;

  @ApiPropertyOptional()
  @IsString() readonly secondPicture?: string;

  @ApiPropertyOptional()
  @IsString() readonly thirdPicture?: string;

  @ApiPropertyOptional()
  @IsBoolean() readonly isVerified?: boolean;
}