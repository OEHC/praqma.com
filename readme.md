Navigation
---
All pages and tag-pages with *nav-weight* in frontmatter go to menu. They are sorted by *nav-weight* from frontmatter (small values go first).

Helpers
---
*_config.dev.yml* is extremely useful during development. It can alter some variables. Start Jekyll with
```
jekyll build --config "_config.yml,_config.dev.yml" --watch
```

Blog
===

Posts
---
All posts are treated as they have tag `Newest`. We add it in `_includes/posts.html`

* tag — tag to filter. Register sensetive.
* limit — number of posts. Skip to output all.
* avatar-alignment — avatar alignment
* sort — name of filed to sort. Skip to filter by date.

You can skip any of `posts.html` parameters.

### Tags

Convention: all tags should start with capital letter.

### Tables

To underline header, separate it with `|---|` or any other acceptable separator

To make table columns have equal width, add `equal` class to this table like this:
```
| Small text | Big text |
|-
| Sma... | Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! Big text! |
{:.equal}
```

It will be rendered to
![image](https://cloud.githubusercontent.com/assets/797993/15856717/fa3f1460-2cbf-11e6-80d9-c8a3cbd88c71.png)


Unfortunately, kramdown doesn't support `caption` element of table. So captions should be used like
```
From *Sapiens, A Brief History of Humankind (Harari)*, pp 41
{:.table-caption}
```

Weight
---

Heavy things sink to the bottom © @JKrag

Or to the right © @illus0r

Default weight of the post is `0`


Employees
---
Employees are described in `_employees/` directory. Their images are stored in `images/employees/` directory, they should be `.png` and named after correspondent employee. For example, to add the image for `lakruzz.md` name it `lakruzz.png`.

# Stories

### Avatar
All stories must have an avatar: A picture that will be shown along site the intro (and in the upper right corner on the full format)

The avatar picture shall be in the format 3:4 (height:width) e.g. 600x800px

### Intro
Also referred to as _kicker_, _standfirst_ or _deck_. All stories must have an intro.

* The intro shall set the expectation for the reader.
* It can contain either a summary or a teaser of the article.
* It must work with the title.
* The intro must be one whole section; It can _not_ contain line breaks.
* You should aim for somewhere between 200-400 chars in the intro.
