package com.stefanjanevski.tamkbackend.repository

import com.stefanjanevski.tamkbackend.model.Category
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository : PagingAndSortingRepository<Category, Long>