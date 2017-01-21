# DSA5SpellBook

A web application to

 * browse
 * filter
 * search
 * order

the DSA 5 spells

## Try it!

One one hand you could just download the `public` Folder from this repository and open the `index.html` File in any browser you like.

On the other hand I uploaded these files to https://www.pfahler.at/dsaspellbook/.

If you want to support me, I launched the project on the [Scriptorium Aventuris](http://www.ulisses-ebooks.de/product/202891/Spell-Book-Webapplikation) where you can donate me some money, which will motivate me to work further on this project.

## The data

The data is from the [DSA5 Regel Wiki](http://www.ulisses-regelwiki.de/) the [scrapy](https://scrapy.org/) Spider from my project [DSA5RegelWikiParser](https://github.com/theShmoo/DSA5RegelWikiParser) is crawling the [DSA5 Regel Wiki](http://www.ulisses-regelwiki.de/) and looks for all links found in the subdirectories of [Zauber](http://www.ulisses-regelwiki.de/index.php/zauber.html)
So:

 * [Rituale](http://www.ulisses-regelwiki.de/index.php/za_rituale.html)
 * [Zaubersprüche](http://www.ulisses-regelwiki.de/index.php/za_zaubersprueche.html)
 * [Zaubertricks](http://www.ulisses-regelwiki.de/index.php/Zauber_Zaubertricks.html)

and parses it to a [JSON-file](./app/components/data.js).

## Contribute

The work is not complete yet and If you want to contribute feel free to do so! And I will do my best to support you.
