package com.stefanjanevski.tamkbackend.controller

import com.stefanjanevski.tamkbackend.model.Category
import com.stefanjanevski.tamkbackend.model.Vendor
import com.stefanjanevski.tamkbackend.model.enums.CategoryEnum
import com.stefanjanevski.tamkbackend.services.ProductService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class TamkController(
    private val productService: ProductService
) {

    @GetMapping("/get-vendors")
    fun getVendors(): List<Vendor> = productService.getVendors()

    @GetMapping("/get-categories")
    fun getCategories(): List<Category> = productService.getCategories()

    @GetMapping("/get-products")
    fun getProductsForCategory(@RequestParam categoryEnum: CategoryEnum) =
        productService.getProductsForCategory(categoryEnum)


}