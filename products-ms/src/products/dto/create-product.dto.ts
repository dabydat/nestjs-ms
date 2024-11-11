import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    public name: string;

    @IsString()
    @IsOptional()
    public description?: string;

    @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
    @Min(0)
    @Type(() => Number)
    public price: number;

    @IsNumber({ allowInfinity: false, allowNaN: false })
    @Min(0)
    @IsOptional()
    public stock?: number;

    @IsOptional()
    @IsBoolean()
    public status?: boolean = true;
}
