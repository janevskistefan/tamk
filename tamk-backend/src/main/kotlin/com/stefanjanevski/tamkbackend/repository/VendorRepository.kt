package com.stefanjanevski.tamkbackend.repository

import com.stefanjanevski.tamkbackend.model.Vendor
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface VendorRepository : PagingAndSortingRepository<Vendor, Long>