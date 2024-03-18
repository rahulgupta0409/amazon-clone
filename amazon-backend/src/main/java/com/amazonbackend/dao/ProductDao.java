package com.amazonbackend.dao;

import com.amazonbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {

    @Query(nativeQuery = true, value = "select * from product p where p.product_name like %:productName% offset :offset limit :pageSize")
    List<Product> getAllProductsByNameString(String productName, Integer offset, Integer pageSize);

    @Query(nativeQuery = true, value = "select * from product")
    List<Product> getAllProducts();

    @Query(nativeQuery = true, value = "delete from product p where p.product_name=%:productName%")
    List<Product> removeProduct(String productName);
}
