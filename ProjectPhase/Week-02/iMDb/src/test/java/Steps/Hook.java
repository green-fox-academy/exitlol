package Steps;

import Base.BaseUtil;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;


public class Hook extends BaseUtil {

  public BaseUtil base;

  public Hook(BaseUtil base) {
    this.base = base;
  }

  @Before
  public void initBrowser() {
    System.setProperty("webdriver.gecko.driver", "/home/exitlol/Documents/Selenium/geckodriver");
    base.driver = new FirefoxDriver();
    base.driver.manage().deleteAllCookies();
    base.driver.manage().window().maximize();
    base.driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
    base.driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
  }

  @After
  public void tearDownBrowser() throws InterruptedException {
    Thread.sleep(2000);
     // base.driver.quit();
  }
}
