import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

// NOTE:
// Type casted to a number as string inputs from params
// IsNumber not necessary but as simple example put in here
// so we don't get this error: https://stackoverflow.com/questions/55491137/no-metadata-found-for-class-validator

export class GetProductByIdRequestDto {
    @ApiProperty({
        description: 'Product id to be queried with.'
    })
    @IsNumber()
    @Type(() => Number)
    id: number
}