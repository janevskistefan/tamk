package com.stefanjanevski.tamkbackend.repository

import com.stefanjanevski.tamkbackend.model.Product
import com.stefanjanevski.tamkbackend.model.Stock
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface StockRepository : JpaRepository<Stock, Long> {

    @Query("SELECT p FROM Stock s JOIN s.product p WHERE lower(p.name) like :productName")
    fun findAvailableProductsByName(@Param("productName") productName: String): List<Product>

}