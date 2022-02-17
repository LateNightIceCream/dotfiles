library(ggplot2)

print("=================================================")
print("quickplot.R")
print("=================================================")
print("Ctrl + D to exit")

width   <- 10
height  <- 0.618 * width
outname <- "~/.scripts/tmp/quickplot_tmp.pdf"

data <- read.csv(file("stdin"), header=FALSE)

linetime <- function (idx) {
  y = colnames(data)[idx]
  return(geom_line(aes(y=!!sym(y), col = toString(idx))))
}

p <- ggplot(data, aes(x =!!sym(colnames(data)[1]), y =!!sym(colnames(data)[2]), color = '2')) +
  theme_minimal()

for (i in 2:ncol(data)) {
  p <- p + linetime(i)
}

pdf(outname, width, height)
p
