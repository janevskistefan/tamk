package com.stefanjanevski.tamkbackend.model

import jakarta.persistence.*

@Entity
@Table(schema = "tamk", name = "stock")
class Stock(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    val product: Product,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vendor_id")
    val vendor: Vendor,

    @Column(name = "price")
    val price: Int,

    @Column(name = "listing_url")
    val listingUrl: String
)