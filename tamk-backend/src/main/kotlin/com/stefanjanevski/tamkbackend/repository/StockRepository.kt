package com.stefanjanevski.tamkbackend.repository

import com.stefanjanevski.tamkbackend.model.Product
import com.stefanjanevski.tamkbackend.model.Stock
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface StockRepository : PagingAndSortingRepository<Stock, Long> {

    @Query("SELECT p FROM Stock s JOIN s.product p WHERE lower(p.name) like :productName")
    fun findAvailableProductsByName(@Param("productName") productName: String, pageable: Pageable): Page<Product>

    @Query("SELECT p FROM Stock s JOIN s.product p WHERE p.category.id = :categoryId")
    fun findAvailableProductsByCategory(@Param("categoryId") categoryId: Long, pageable: Pageable): Page<Product>

    @Query(
        """
        SELECT p FROM Stock s JOIN s.product p WHERE
        s.vendor.id = :vendorId AND 
        (:categoryId IS NULL OR p.category.id = :categoryId) AND
        (:productName = '%null%' OR lower(p.name) LIKE :productName)
    """
    )
    fun findAvailableProductsByVendor(
        @Param("vendorId") vendorId: Long,
        @Param("categoryId") categoryId: Long?,
        @Param("productName") productName: String?,
        pageable: Pageable
    ): Page<Product>
}