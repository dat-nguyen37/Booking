using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace Server.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Username is required.")]
        public string? Username { get; set; }
        [Required(ErrorMessage = "Email is required.")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Invalid email address format.")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "Password is required.")]
        [DataType(DataType.Password)]
        [MinLength(6, ErrorMessage = "Password requires a minimum of 6 characters")]
        public string? Password { get; set; }
        [Required(ErrorMessage = "Phone is required.")]
        [DataType(DataType.PhoneNumber)]
        [RegularExpression(@"^\+?[1-9]\d{9,11}$", ErrorMessage = "The phone number is not in the correct format.")]
        public string? Phone { get; set; }
        public string? Address { get; set; }

    }
}
