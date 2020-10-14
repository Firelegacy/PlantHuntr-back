import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePlantDto {
  @ApiProperty()
  @IsString() @IsNotEmpty() readonly commonName: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString() readonly scientificName?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString() readonly family?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString() readonly subfamily?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString() readonly genus?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString() readonly firstPicture?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString() readonly secondPicture?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString() readonly thirdPicture?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsBoolean() isVerified?: boolean;
}