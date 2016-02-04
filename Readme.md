# Sass Importer

Rather than compiling your sass it follows all of your `@import` rules and outputs a concatenated file containing everything ready to then be compiled.

Why? Because Shopify.

To use simply run:

    sassimport [input file] -o|--output [output file]
    
You can either output the contents off the file or pipe it to something else.