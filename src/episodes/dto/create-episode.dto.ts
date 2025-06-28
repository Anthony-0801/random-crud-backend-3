import { Type } from 'class-transformer';
import { IsBoolean, isDate, IsOptional, IsString } from 'class-validator';

export class CreateEpisodeDTO {
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  featured?: boolean;

  @isDate()
  @Type(() => Date)
  @IsOptional()
  createdAt?: Date;
}
