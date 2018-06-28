using ReactApp.Business.Model;
using ReactApp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Caching;

namespace ReactApp.Business.Logic
{
    public class UserManager
    {
        public UserRepository userRepository = new UserRepository();

        static readonly string UsersCacheKey = "USERS";

        MemoryCache cache = MemoryCache.Default;

        public ICollection<User> GetAllUsers()
        {
            var users = cache[UsersCacheKey] as ICollection<Business.Model.User>;
            if (users == null)
            {
                users = userRepository.GetUsers();
                cache[UsersCacheKey] = users;
            }
            return users;

        }

        public User GetUserByAccessKey(string accessKey)
        {
            var users = this.GetAllUsers();
            var user = users.FirstOrDefault(u => u.AccessKey.Equals(accessKey));
            return user;
        }


        public void AddUser(User user)
        {
            cache.Dispose();
            user.Name = $"User {user.AccessKey}";
            userRepository.AddUser(user);
           
        }
    }
}