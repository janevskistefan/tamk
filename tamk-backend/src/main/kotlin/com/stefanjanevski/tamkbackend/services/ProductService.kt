package com.stefanjanevski.tamkbackend.services

import com.stefanjanevski.tamkbackend.model.Category
import com.stefanjanevski.tamkbackend.model.Product
import com.stefanjanevski.tamkbackend.model.Vendor
import com.stefanjanevski.tamkbackend.model.VendorCategory
import com.stefanjanevski.tamkbackend.repository.*
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class ProductService(
    private val stockRepository: StockRepository,
    private val vendorRepository: VendorRepository,
    private val categoryRepository: CategoryRepository,
    private val productRepository: ProductRepository,
    private val vendorCategoryRepository: VendorCategoryRepository
) {
    fun getVendors(pageable: Pageable): Page<Vendor> = vendorRepository.findAll(pageable)

    fun getCategories(pageable: Pageable): Page<Category> = categoryRepository.findAll(pageable)

    fun getAvailableProductsByCategory(categoryId: Long, pageable: Pageable): Page<Product> =
        stockRepository.findAvailableProductsByCategory(categoryId, pageable)

    fun getAvailableProductsByName(productName: String, pageable: Pageable): Page<Product> =
        stockRepository.findAvailableProductsByName("%${productName.lowercase()}%", pageable)

    fun getAvailableProductsByVendor(
        vendorId: Long,
        categoryId: Long?,
        productName: String?,
        pageable: Pageable
    ): Page<Product> = stockRepository
        .findAvailableProductsByVendor(vendorId, categoryId, "%${productName?.lowercase()}%", pageable)

    fun getProductById(
        productId: Long
    ): Product = productRepository.findProductById(productId)

    fun getAvailableCategoriesForVendor(
        vendorId: Long
    ): List<VendorCategory> = vendorCategoryRepository.findAllByVendor(
        vendorRepository
            .findById(vendorId)
            .orElseThrow { NotFoundException() }
    )
}