package com.stefanjanevski.tamkbackend.repository

import com.stefanjanevski.tamkbackend.model.Vendor
import com.stefanjanevski.tamkbackend.model.VendorCategory
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface VendorCategoryRepository: JpaRepository<VendorCategory, Long> {
    fun findAllByVendor(vendor: Vendor): List<VendorCategory>
}