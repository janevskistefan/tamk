package com.stefanjanevski.tamkbackend.controller

import com.stefanjanevski.tamkbackend.model.Product
import com.stefanjanevski.tamkbackend.repository.StockRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:8100"])
@RequestMapping("api/stock")
class StockController(
    private val stockRepository: StockRepository,
) {
    @GetMapping
    fun findAllAvailableProducts(
        @RequestParam vendorId: Long?,
        @RequestParam categoryId: Long?,
        @RequestParam productName: String?,
        @RequestParam(defaultValue = "0") pageNumber: Int,
        @RequestParam(defaultValue = "5") pageSize: Int,
    ): Page<Product> = stockRepository
        .findAllAvailableProducts(
            vendorId = vendorId,
            categoryId = categoryId,
            productName = productName,
            pageable = PageRequest.of(pageNumber, pageSize)
        )
}