package com.stefanjanevski.tamkbackend.services

import com.stefanjanevski.tamkbackend.model.Category
import com.stefanjanevski.tamkbackend.model.Product
import com.stefanjanevski.tamkbackend.model.Vendor
import com.stefanjanevski.tamkbackend.model.enums.CategoryEnum
import com.stefanjanevski.tamkbackend.repository.CategoryRepository
import com.stefanjanevski.tamkbackend.repository.StockRepository
import com.stefanjanevski.tamkbackend.repository.VendorRepository
import org.springframework.stereotype.Service

@Service
class ProductService(
    private val stockRepository: StockRepository,
    private val vendorRepository: VendorRepository,
    private val categoryRepository: CategoryRepository
) {

    fun getVendors(): List<Vendor> = vendorRepository.findAll()

    fun getCategories(): List<Category> = categoryRepository.findAll()

    fun getProductsForCategory(categoryEnum: CategoryEnum): List<Product> = TODO()

    fun findAvailableProductsByName(productName: String): List<Product> =
        stockRepository.findAvailableProductsByName("%${productName.lowercase()}%")

    // TODO: Return products from a single vendor

}