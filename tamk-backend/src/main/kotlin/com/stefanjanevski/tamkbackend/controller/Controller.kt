package com.stefanjanevski.tamkbackend.controller

import com.stefanjanevski.tamkbackend.model.Category
import com.stefanjanevski.tamkbackend.model.Product
import com.stefanjanevski.tamkbackend.model.Vendor
import com.stefanjanevski.tamkbackend.services.ProductService
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ["http://localhost:8100"])
class Controller(
    private val productService: ProductService
) {

    @GetMapping("/vendors")
    fun getVendors(
        @RequestParam(defaultValue = "0") pageNumber: Int,
        @RequestParam(defaultValue = "5") size: Int
    ): Page<Vendor> = productService.getVendors(PageRequest.of(pageNumber, size))

    @GetMapping("/categories")
    fun getCategories(
        @RequestParam(defaultValue = "0") pageNumber: Int,
        @RequestParam(defaultValue = "5") size: Int
    ): Page<Category> = productService.getCategories(PageRequest.of(pageNumber, size))

    @GetMapping("/filter-by-name")
    fun getAvailableProductsByName(
        @RequestParam productName: String,
        @RequestParam(defaultValue = "0") pageNumber: Int,
        @RequestParam(defaultValue = "5") size: Int
    ): Page<Product> = productService
        .getAvailableProductsByName(
            productName,
            PageRequest.of(pageNumber, size)
        )

    @GetMapping("/filter-by-category")
    fun getAvailableProductsByCategory(
        @RequestParam categoryId: Long,
        @RequestParam(defaultValue = "0") pageNumber: Int,
        @RequestParam(defaultValue = "5") size: Int
    ): Page<Product> = productService
        .getAvailableProductsByCategory(
            categoryId,
            PageRequest.of(pageNumber, size)
        )

    @GetMapping("/filter-by-vendor")
    fun getAvailableProductsByVendor(
        @RequestParam(required = true) vendorId: Long,
        @RequestParam(required = false) categoryId: Long?,
        @RequestParam(required = false) productName: String?,
        @RequestParam(defaultValue = "0") pageNumber: Int,
        @RequestParam(defaultValue = "5") size: Int
    ): Page<Product> = productService
        .getAvailableProductsByVendor(
            vendorId,
            categoryId,
            productName,
            PageRequest.of(pageNumber, size)
        )

    @GetMapping("{productId}")
    fun getProductById(@PathVariable productId: Long): Product = productService.getProductById(productId)

}