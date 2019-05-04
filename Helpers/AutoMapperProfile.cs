using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserForDetaledDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest=>dest.Age, apt => {
                    apt.MapFrom(src => src.DateOfBirth.CalculateAge()); } );

            CreateMap<User, UserForListDto>()
                .ForMember(U => U.PhotoUrl, opt => {
                    opt.MapFrom(arrPhoto => arrPhoto.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, apt => {
                        apt.MapFrom(src => src.DateOfBirth.CalculateAge());
                });

            CreateMap<Photo, PhotoForDetailedDto>();
        }
    }
}
