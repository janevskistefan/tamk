package com.stefanjanevski.tamkbackend.controller

import com.stefanjanevski.tamkbackend.model.Category
import com.stefanjanevski.tamkbackend.services.CategoryService
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:8100"])
@RequestMapping("api/categories")
class CategoryController(private val categoryService: CategoryService) {

    @GetMapping
    fun findAllCategories(@RequestParam searchQuery: String?): List<Category> =
        searchQuery?.let { categoryService.findAllCategoriesByName(it) }
            ?: categoryService.findAllCategories()

    @GetMapping("{id}")
    fun findById(@PathVariable id: Long): Category = categoryService
        .findCategoryById(id)
}