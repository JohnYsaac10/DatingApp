using DatingApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
        //we need to create 3 methods: userexist, login, register
        Task<User> Login(string username, string password);

        Task<User> Register(User user, string password);

        Task<bool> UserExists(string username);

    }
}
