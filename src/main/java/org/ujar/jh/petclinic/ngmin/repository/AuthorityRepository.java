package org.ujar.jh.petclinic.ngmin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.ujar.jh.petclinic.ngmin.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
