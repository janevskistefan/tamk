package com.stefanjanevski.tamkbackend.repository

import com.stefanjanevski.tamkbackend.model.Product
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface ProductRepository : PagingAndSortingRepository<Product, Long> {
    fun findProductById(productId: Long): Product
}