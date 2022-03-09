using NUnit.Framework;
using TODOAPP.Services;
using NSubstitute;
using Microsoft.Extensions.Configuration;

namespace TODOTest
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {

        }

        [Test]
        public void Test1()
        {
            var config = Substitute.For<IConfiguration>();
            TodoService service = TodoService.getInstance(config);
            service.GetTodo();

            Assert.Pass();
        }

      
    }
}