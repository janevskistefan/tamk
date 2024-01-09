package com.stefanjanevski.tamkbackend.repository

import com.stefanjanevski.tamkbackend.model.Vendor
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface VendorRepository : JpaRepository<Vendor, Long>