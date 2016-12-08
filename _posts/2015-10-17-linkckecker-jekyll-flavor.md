---
title:  LinkChecker - Jekyll flavor
tags:   [Jekyll, Jenkins, LinkChecker, Warnings plugin]
avatar: /images/stories/broken-link.4x3.png
author: lakruzz
---

UPDATE: Updated alongside the parser, now picks up warnings with newlines in their messages.
{: .highlight}

This parser is designed to parse the CSV output from LinkChecker.
It assumes that the source of the website that is being parsed is available in the `_site` directory of the workspace.
`_site` is the Jekyll default, but it can be overridden.
<!--break-->

__Example:__
Say that you're hosting http://blogs.praqma.com from the master branch
Set up a job that:

    pull master
    jekyll build
    linkchecker -o text -Fcsv/report/linkchecker.report.csv  http://blogs.praqma.com

Let the Warnings plugin scan the generated `report/linkchecker.report.csv` using this parser.

## Settings for the Warnings plugin

### Name

LinkChecker CSV (Jekyll flavor)

### Link name

Jekyll LinkChecker

### Trend report Name

Jekyll LinkChecker Trend

### Regular expression
The following regex is pretty daunting, but it allows for greater customization of the warnings later on.

    ([^\n;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^;]*?(?=;))?;([^\n]*)

### Mapping script

The import of `hudson.plugins.analysis.util.model.Priority` is necessary if you want to get access to the `Warning` constructor that takes five arguments - the last being the priority.

    import hudson.plugins.analysis.util.model.Priority
    import hudson.plugins.warnings.parser.Warning

    def obj = [
            url          : matcher.group(1),
            parentUrl    : matcher.group(2),
            baseRef      : matcher.group(3),
            result       : matcher.group(4),
            warningString: matcher.group(5),
            infoString   : matcher.group(6),
            valid        : matcher.group(7),
            fullUrl      : matcher.group(8),
            line         : matcher.group(9),
            column       : matcher.group(10),
            name         : matcher.group(11),
            dlTime       : matcher.group(12),
            dlSize       : matcher.group(13),
            checkTime    : matcher.group(14),
            cached       : matcher.group(15),
            level        : matcher.group(16),
            modified     : matcher.group(17)
    ]

    String jekyllTarget = "_site"
    String defaultIndex = "index.html"
    String source = obj.parentUrl
    if (source ==~ /https?:\/\/[^\s\.].[^\s\/]*$/)
        source = $ { source } $ { "/" }
    if (source ==~ /.*\/$/)
        source = $ { source } $ { defaultIndex }
    source = source.replaceAll(/https?:\/\/[^\s\.].[^\s\/]*/, jekyllTarget)

    def line = obj.line.toInteger()
    def type = obj.level
    def category = obj.result

    message = "$obj.fullUrl: ($obj.result) $obj.warningString - $obj.infoString"

    def priority = Priority.NORMAL
    if (obj.valid.equalsIgnoreCase("true"))
        priority = Priority.LOW
    if (obj.valid.equalsIgnoreCase("false"))
        priority = Priority.HIGH


    return new Warning(source, line, type, category, message, priority)
