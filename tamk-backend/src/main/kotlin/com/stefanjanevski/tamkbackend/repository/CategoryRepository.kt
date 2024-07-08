package com.stefanjanevski.tamkbackend.repository

import com.stefanjanevski.tamkbackend.model.Category
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository : JpaRepository<Category, Long> {
    fun findAllByNameContainsIgnoreCase(name: String): List<Category>
}