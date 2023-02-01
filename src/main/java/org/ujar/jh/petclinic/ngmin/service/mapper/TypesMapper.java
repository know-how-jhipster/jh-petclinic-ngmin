package org.ujar.jh.petclinic.ngmin.service.mapper;

import org.mapstruct.*;
import org.ujar.jh.petclinic.ngmin.domain.Types;
import org.ujar.jh.petclinic.ngmin.service.dto.TypesDTO;

/**
 * Mapper for the entity {@link Types} and its DTO {@link TypesDTO}.
 */
@Mapper(componentModel = "spring")
public interface TypesMapper extends EntityMapper<TypesDTO, Types> {}
