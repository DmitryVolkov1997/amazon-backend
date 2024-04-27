import {Body, Controller, Get, HttpCode, Param, Patch, Put, UsePipes, ValidationPipe} from '@nestjs/common'
import {UserService} from './user.service'
import {Auth} from "../auth/decorators/auth.decorator"
import {CurrentUser} from "../auth/decorators/user.decorator"
import {UserDto} from "./dto/user.dto"

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get("profile")
    @Auth()
    async getProfile(@CurrentUser('id') id: number) {
        return await this.userService.byId(id)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Auth()
    @Put("profile")
    async updateProfile(@CurrentUser('id') id: number, @Body() dto: UserDto) {
        return await this.userService.updateProfile(id, dto)
    }

    @Auth()
    @HttpCode(200)
    @Patch("profile/favorites/:productId")
    async toggleFavorite(@Param('productId') productId: string, @CurrentUser('id') id: number) {
        return await this.userService.toggleFavorite(id, +productId)
    }
}

