using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Email is required.")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Invalid email address format.")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "Password is required.")]
        [DataType(DataType.Password)]
        [MinLength(6, ErrorMessage = "Password requires a minimum of 6 characters")]
        public string? Password { get; set; }

    }
}
