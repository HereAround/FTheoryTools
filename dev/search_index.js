var documenterSearchIndex = {"docs":
[{"location":"FTheoryTools/Weierstrass/","page":"Global Weierstrass models","title":"Global Weierstrass models","text":"CurrentModule = FTheoryTools","category":"page"},{"location":"FTheoryTools/Weierstrass/","page":"Global Weierstrass models","title":"Global Weierstrass models","text":"Pages = [\"Weierstrass.md\"]","category":"page"},{"location":"FTheoryTools/Weierstrass/#Global-Weierstrass-models","page":"Global Weierstrass models","title":"Global Weierstrass models","text":"","category":"section"},{"location":"FTheoryTools/Weierstrass/#Constructors","page":"Global Weierstrass models","title":"Constructors","text":"","category":"section"},{"location":"FTheoryTools/Weierstrass/","page":"Global Weierstrass models","title":"Global Weierstrass models","text":"We support the following constructors:","category":"page"},{"location":"FTheoryTools/Weierstrass/","page":"Global Weierstrass models","title":"Global Weierstrass models","text":"GlobalWeierstrassModel(polys::Vector{MPolyElem{fmpq}})\nGenericGlobalWeierstrassModelOverToricSpace(v::Oscar.AbstractNormalToricVariety)\nGenericGlobalWeierstrassModelOverProjectiveSpace(n::Int)","category":"page"},{"location":"FTheoryTools/Weierstrass/#FTheoryTools.GlobalWeierstrassModel-Tuple{Vector{MPolyElem{fmpq}}}","page":"Global Weierstrass models","title":"FTheoryTools.GlobalWeierstrassModel","text":"GlobalWeierstrassModel(polys::Vector{MPolyElem{fmpq}})\n\nA global Weierstrass model is a hypersurface cut out by an equation of the form P_w = y^2 - x^3 - f x z^4 - g z^6. Consequently, it is specified by two polynomials f and g. For convenience, it can be constructed as GlobalWeierstrassModel([f,g]) and via GlobalWeierstrassModel(f,g).\n\n\n\n","category":"method"},{"location":"FTheoryTools/Weierstrass/#FTheoryTools.GenericGlobalWeierstrassModelOverToricSpace-Tuple{Oscar.AbstractNormalToricVariety}","page":"Global Weierstrass models","title":"FTheoryTools.GenericGlobalWeierstrassModelOverToricSpace","text":"GenericGlobalWeierstrassModelOverToricSpace(v::Oscar.AbstractNormalToricVariety)\n\nGiven a toric variety v, this method determines generic sections f in H^0( v overlineK_v^4) and g in H^0( v overlineK_v^6). Subsequently, it constructs the global Weierstrass model defined by those two polynomials.\n\n\n\n","category":"method"},{"location":"FTheoryTools/Weierstrass/#FTheoryTools.GenericGlobalWeierstrassModelOverProjectiveSpace-Tuple{Int64}","page":"Global Weierstrass models","title":"FTheoryTools.GenericGlobalWeierstrassModelOverProjectiveSpace","text":"GenericGlobalWeierstrassModelOverProjectiveSpace(n::Int)\n\nThis method constructs the n-dimensional projective space, determines generic sections f and g of the 4-th and 6-th power of the anticanonical bundle and then constructs the global Weierstrass model defined by those two polynomials.\n\njulia> w = GenericGlobalWeierstrassModelOverProjectiveSpace(3)\nA global Weierstrass model\n\n\n\n","category":"method"},{"location":"FTheoryTools/Weierstrass/#Attributes","page":"Global Weierstrass models","title":"Attributes","text":"","category":"section"},{"location":"FTheoryTools/Weierstrass/","page":"Global Weierstrass models","title":"Global Weierstrass models","text":"poly_f(w::GlobalWeierstrassModel)\npoly_g(w::GlobalWeierstrassModel)\ntoric_base_space(w::GlobalWeierstrassModel)","category":"page"},{"location":"FTheoryTools/Weierstrass/#FTheoryTools.poly_f-Tuple{GlobalWeierstrassModel}","page":"Global Weierstrass models","title":"FTheoryTools.poly_f","text":"poly_f(w::GlobalWeierstrassModel)\n\nReturn the polynomial f used for the construction of the global Weierstrass model.\n\njulia> w = GenericGlobalWeierstrassModelOverProjectiveSpace(3)\nA global Weierstrass model\n\njulia> poly_f(w);\n\n\n\n","category":"method"},{"location":"FTheoryTools/Weierstrass/#FTheoryTools.poly_g-Tuple{GlobalWeierstrassModel}","page":"Global Weierstrass models","title":"FTheoryTools.poly_g","text":"poly_g(w::GlobalWeierstrassModel)\n\nReturn the polynomial g used for the construction of the global Weierstrass model.\n\njulia> w = GenericGlobalWeierstrassModelOverProjectiveSpace(3)\nA global Weierstrass model\n\njulia> poly_f(w);\n\n\n\n","category":"method"},{"location":"FTheoryTools/Weierstrass/#FTheoryTools.toric_base_space-Tuple{GlobalWeierstrassModel}","page":"Global Weierstrass models","title":"FTheoryTools.toric_base_space","text":"toric_base_space(w::GlobalWeierstrassModel)\n\nIf the global Weierstrass model in question was constructed over a toric base space, this method returns this toric space. Otherwise an error is raised.\n\njulia> w = GenericGlobalWeierstrassModelOverProjectiveSpace(3)\nA global Weierstrass model\n\njulia> toric_base_space(w)\nA normal, non-affine, smooth, projective, gorenstein, fano, 3-dimensional toric variety without torusfactor\n\n\n\n","category":"method"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"CurrentModule = FTheoryTools","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"Pages = [\"Introduction.md\"]","category":"page"},{"location":"FTheoryTools/Introduction/#Overview","page":"Overview","title":"Overview","text":"","category":"section"},{"location":"FTheoryTools/Introduction/#Goal","page":"Overview","title":"Goal","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"The package FTheoryTools.jl aims to automate a number of recuring and (at least in part) tedious computations in F-theory model building. Specifically we focus on the following setups:","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"4d F-theory compactifications,\ndefined by a global and singular Weierstrass model as codimension 1 locus of a toric ambient space Y,\nwhich can be crepantly resolved.","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"For possible future extensions, see below.","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"We aim for the following workflow:","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"User input:\nWeierstrass polynomial P_W,\nData defining the toric ambient space Y (if applicable),\nChoice of resolved phase (if applicable),\nGenerating sections (for U(1) symmetries).\nOutput:\nSingular loci in codimension 1, 2 and 3.\nDefining data of resolved geometry.\n(Pictures of) fibre diagrams of resolved fibre over the originally singular loci, including intersections of U(1)-sections.\nGauge group.\nTopological data (e.g. Euler number).","category":"page"},{"location":"FTheoryTools/Introduction/#Status","page":"Overview","title":"Status","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"This project just began. We hope to have a first working version by the end of the year 2022.","category":"page"},{"location":"FTheoryTools/Introduction/#Possible-future-extensions","page":"Overview","title":"Possible future extensions","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"Future extensions include, but are not necessarily limited to, the following:","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"Specify a G_4-flux and work-out the chiral spectra.\nSpecify a gauge potential and work out (candidates for) the line bundles whose cohomologies encode the vector-like spectra.\nOther singularity types (non-minimal, terminal, etc.)\nBase blowups for singularity resolution.","category":"page"},{"location":"FTheoryTools/Introduction/#Dependencies","page":"Overview","title":"Dependencies","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"We base this project on OSCAR for general functionality on toric spaces and (possibly even more importantly) polynomial operations. The latter are based on Singular and Singular.jl, respectively.","category":"page"},{"location":"FTheoryTools/Introduction/#Installation-instructions-for-Linux","page":"Overview","title":"Installation instructions for Linux","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"Install Julia on your computer. The latest version can be found here.\nDownload this development version of FTheoryTools.jl. Those interested in contributing should instead clone this repository:","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"    git clone https://github.com/HereAround/FTheoryTools.jl.git","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"Place your clone/download in a location outside of the .julia folder of your home folder.\nFinally, register and build FTheoryTools.jl as follows:","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"    using Pkg\n    Pkg.develop(path=\"path/to/your/FTheoryTools.jl\")\n    Pkg.build(\"FTheoryTools\")","category":"page"},{"location":"FTheoryTools/Introduction/#Documentation","page":"Overview","title":"Documentation","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"For detailed information about the implemented functionality, please take a look at the most recent documentation.","category":"page"},{"location":"FTheoryTools/Introduction/#Bugs-and-feature-requests","page":"Overview","title":"Bugs and feature requests","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"If you want to report a bug or request a feature, please do it by raising a github issue.","category":"page"},{"location":"FTheoryTools/Introduction/#Contributions","page":"Overview","title":"Contributions","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"Contributions are highly appreciated. Please notice that:","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"Contributions must be done by opening a pull request.\nPull requests must pass a number of checks that are automatically conducted by our test suite, before they can be merged. A further approval by a code owner is appreciated.\nCode is expected to be in agreement with the Oscar style guide.","category":"page"},{"location":"FTheoryTools/Introduction/#Contact","page":"Overview","title":"Contact","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"This software is work in progress of","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"Martin Bies,\nAndrew Turner.","category":"page"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"If you are interested in contributing, please feel free to reach out to us for more details.","category":"page"},{"location":"FTheoryTools/Introduction/#Funding","page":"Overview","title":"Funding","text":"","category":"section"},{"location":"FTheoryTools/Introduction/","page":"Overview","title":"Overview","text":"The work of Martin Bies is supported by the Simons Foundation Collaboration grant #390287 on Homological Mirror Symmetryand the Simons Foundation Collaboration grant #724069 on Special Holonomy in Geometry Analysis and Physics.","category":"page"},{"location":"#Welcome-to-FTheoryTools","page":"Welcome to FTheoryTools","title":"Welcome to FTheoryTools","text":"","category":"section"}]
}
