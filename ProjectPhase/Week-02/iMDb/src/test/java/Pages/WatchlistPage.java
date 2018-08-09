package Pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class WatchlistPage {

  public WatchlistPage(WebDriver driver) {
    PageFactory.initElements(driver, this);
  }

  @FindBy(how = How.XPATH, using = "//*[@id=\"navWatchlistMenu\"]/p/a")
  public WebElement userWatchlist;

  @FindBy(how = How.XPATH, using = "//*[@id=\"center-1-react\"]/div/div[3]/span[2]")
  public WebElement checkWatchlist;

  public void clickOnWatchlist() {
    userWatchlist.click();
  }

  public void verifyEmptyList() {
    Assert.assertTrue(checkWatchlist.isDisplayed());
  }
}
