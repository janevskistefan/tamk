package com.stefanjanevski.tamkbackend.repository

import com.stefanjanevski.tamkbackend.model.Product
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProductRepository : JpaRepository<Product, Long>