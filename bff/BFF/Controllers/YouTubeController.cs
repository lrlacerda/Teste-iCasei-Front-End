using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace BFF.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class YouTubeController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly HttpClient _httpClient;

        public YouTubeController(IConfiguration configuration)
        {
            _configuration = configuration;
            _httpClient = new HttpClient();
        }

        [HttpGet("search")]
        public async Task<IActionResult> Search(string query)
        {
            var apiKey = _configuration["YouTubeApiKey"];
            var url = $"https://www.googleapis.com/youtube/v3/search?part=snippet&q={query}&key={apiKey}";

            var response = await _httpClient.GetStringAsync(url);
            return Ok(response);
        }
    }
}
