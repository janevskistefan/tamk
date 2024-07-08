package com.stefanjanevski.tamkbackend.controller

import com.stefanjanevski.tamkbackend.model.Product
import com.stefanjanevski.tamkbackend.repository.ProductRepository
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:8100"])
@RequestMapping("api/products")
class ProductController(private val productRepository: ProductRepository) {
    @GetMapping("{id}")
    fun findProductById(@PathVariable id: Long): Product = productRepository
        .findById(id)
        .orElseThrow { NotFoundException() }
}