package com.amazonbackend.controller;

import com.amazonbackend.dto.ProductDto;
import com.amazonbackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping(path = "/createProduct", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public ProductDto addNewProduct(@RequestBody ProductDto productDto) {
        return productService.addNewProduct(productDto);
    }


}
