package com.stefanjanevski.tamkbackend.controllers

import com.stefanjanevski.tamkbackend.enums.EShop
import com.stefanjanevski.tamkbackend.enums.TechProductCategory
import com.stefanjanevski.tamkbackend.responses.TechProductResponse
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import java.util.*

@Controller
@RequestMapping("/api")
class Controller {
    @GetMapping("/products")
    fun getProducts(
        @RequestParam(name = "query", required = false) query: String,
        @RequestParam(name = "category", required = false) category: TechProductCategory,
        @RequestParam(name = "shop", required = false) requestedEShop: EShop
    ): List<TechProductResponse> {
        // TODO - implement logic
        return ArrayList<TechProductResponse>()
    }
}