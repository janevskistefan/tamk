package com.stefanjanevski.tamkbackend.model

import jakarta.persistence.*

@Entity
@Table(schema = "tamk", name = "vendor_category")
class VendorCategory(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vendor_id")
    val vendor: Vendor,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    val category: Category
)