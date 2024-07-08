package com.stefanjanevski.tamkbackend.services

import com.stefanjanevski.tamkbackend.model.Category
import com.stefanjanevski.tamkbackend.repository.CategoryRepository
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.stereotype.Service

@Service
class CategoryService(private val categoryRepository: CategoryRepository) {

    fun findCategoryById(categoryId: Long): Category = categoryRepository
        .findById(categoryId)
        .orElseThrow { NotFoundException() }

    fun findAllCategories(): List<Category> = categoryRepository.findAll()

    fun findAllCategoriesByName(searchQuery: String): List<Category> =
        categoryRepository.findAllByNameContainsIgnoreCase(searchQuery)
}