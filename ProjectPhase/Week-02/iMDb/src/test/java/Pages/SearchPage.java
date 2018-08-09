package Pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class SearchPage {

  public SearchPage(WebDriver driver) {
    PageFactory.initElements(driver, this);
  }

  @FindBy(how = How.ID, using = "navbar-query")
  public WebElement searchField;

  @FindBy(how = How.XPATH, using = "//*[@id=\"navbar-suggestionsearch\"]/div[1]/a")
  public WebElement firstMatch;

  @FindBy(how = How.CLASS_NAME, using = "plot_summary")
  public WebElement plotSummary;

  public void movieSearch(String movieName) {
    searchField.sendKeys(movieName);
  }

  public void clickFirstMatch() {
    firstMatch.click();
  }

  public void checkMoviePage() {
    Assert.assertTrue(plotSummary.isDisplayed());
  }
}
