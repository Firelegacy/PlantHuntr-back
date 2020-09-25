import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePlantDTO {
  @ApiProperty()
  @IsString() @IsNotEmpty() readonly commonName: string;

  @ApiProperty()
  @IsOptional() @IsString() readonly scientificName?: string;

  @ApiProperty()
  @IsOptional() @IsString() readonly family?: string;

  @ApiProperty()
  @IsOptional() @IsString() readonly subfamily?: string;

  @ApiProperty()
  @IsOptional() @IsString() readonly genus?: string;

  @ApiProperty()
  @IsOptional() @IsString() readonly firstPicture?: string;

  @ApiProperty()
  @IsOptional() @IsString() readonly secondPicture?: string;

  @ApiProperty()
  @IsOptional() @IsString() readonly thirdPicture?: string;

  @ApiProperty()
  @IsOptional() @IsBoolean() isVerified?: boolean;
}