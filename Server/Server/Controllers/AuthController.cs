using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;


namespace Server.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class AuthController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;
        public AuthController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user=await _context.users.SingleOrDefaultAsync(u=>u.Email == loginModel.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginModel.Password, user.Password))
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }
            var userInfo = new
            {
                user.Id,
                user.Username,
                user.Email,
                user.Phone,
                user.Address
            };

            return Ok(new { message = "Login successful",user=userInfo });
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel registerModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var existingEmail = await _context.users
           .Where(u => u.Email == registerModel.Email)
           .FirstOrDefaultAsync();

            if (existingEmail != null)
            {
                return Conflict(new { message = "Email already exists" });
            }

            var existingPhone = await _context.users
           .Where(u => u.Phone == registerModel.Phone)
           .FirstOrDefaultAsync();

            if (existingPhone != null)
            {
                return Conflict(new { message = "Phone already exists" });
            }
            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(registerModel.Password, 10);
            var newUser = new User()
            {
                Username = registerModel.Username,
                Email = registerModel.Email,
                Phone = registerModel.Phone,
                Password = hashedPassword,
            };
             _context.users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Register successfulful",
                user = new
                {
                    newUser.Id,
                    newUser.Username,
                    newUser.Email,
                    newUser.Phone,
                    newUser.Address
                }
            });
        }
    }
}
