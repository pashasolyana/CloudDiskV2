import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: 'pashasolyana@mail.ru'
    })
    email: string;

    @ApiProperty({
        default: 'Pasha Solyana'
    })
    fullName: string;

    @ApiProperty({
        default: 'jbgfhff75Gj'
    })
    password: string;
}
