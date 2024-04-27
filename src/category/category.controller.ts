import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common'
import {CategoryService} from './category.service'
import {Auth} from "../auth/decorators/auth.decorator"
import {CurrentUser} from "../auth/decorators/user.decorator"
import {CategoryDto} from "./dto/category.dto"

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {
    }

    @Get()
    async getAll() {
        return this.categoryService.getAll()
    }

    @Get('by-slug/:slug')
    async getBySlug(@Param('slug') slug: string) {
        return this.categoryService.bySlug(slug)
    }

    @Get(':id')
    @Auth()
    async getById(@Param('id') id: string) {
        return this.categoryService.byId(+id)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Auth()
    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: CategoryDto) {
        return this.categoryService.update(+id, dto)
    }

    @HttpCode(200)
    @Auth()
    @Post()
    async create() {
        return this.categoryService.create()
    }

    @Auth()
    @HttpCode(200)
    @Delete(":id")
    async delete(@Param('id') id: string) {
        return await this.categoryService.delete(+id)
    }
}

// 1:56:28
