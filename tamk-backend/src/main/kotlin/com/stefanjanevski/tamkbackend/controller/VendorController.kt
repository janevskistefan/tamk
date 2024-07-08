package com.stefanjanevski.tamkbackend.controller

import com.stefanjanevski.tamkbackend.model.Vendor
import com.stefanjanevski.tamkbackend.services.VendorService
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:8100"])
@RequestMapping("api/vendors")
class VendorController(private val vendorService: VendorService) {

    @GetMapping
    fun getVendors(@RequestParam searchQuery: String?): List<Vendor> =
        searchQuery?.let { vendorService.findAllVendorsByName(it) }
            ?: vendorService.findAllVendors()

    @GetMapping("{id}")
    fun getSingleVendor(@PathVariable id: Long): Vendor =
        vendorService.findVendorById(id)

}