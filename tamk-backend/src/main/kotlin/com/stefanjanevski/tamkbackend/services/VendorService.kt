package com.stefanjanevski.tamkbackend.services

import com.stefanjanevski.tamkbackend.model.Vendor
import com.stefanjanevski.tamkbackend.repository.VendorRepository
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException
import org.springframework.stereotype.Service

@Service
class VendorService(private val vendorRepository: VendorRepository) {

    fun findVendorById(vendorId: Long): Vendor = vendorRepository
        .findById(vendorId)
        .orElseThrow { NotFoundException() }

    fun findAllVendors(): List<Vendor> = vendorRepository.findAll()

    fun findAllVendorsByName(searchQuery: String): List<Vendor> =
        vendorRepository.findAllByNameContainsIgnoreCase(searchQuery)
}