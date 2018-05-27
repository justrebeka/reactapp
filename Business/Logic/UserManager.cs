using ReactApp.Business.Model;
using ReactApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactApp.Business.Logic
{
    public class UserManager
    {
        public UserRepository userRepository = new UserRepository();

        public List<User> GetUsers()
        {
            return userRepository.GetUsers();
        }


        public void AddUser(User user)
        {
            userRepository.AddUser(user);
        }
    }
}