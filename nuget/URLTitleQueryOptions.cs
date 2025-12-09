using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.URLTitle
{
    /// <summary>
    /// Query options for the URL Title API
    /// </summary>
    public class URLTitleQueryOptions
    {
        /// <summary>
        /// The URL of the web page to get the title of
        /// Example: https://www.myspace.com
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }
    }
}
