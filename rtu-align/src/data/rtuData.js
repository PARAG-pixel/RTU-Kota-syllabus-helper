// RTU Kota Complete Syllabus and 20+ Question Diagnostic Bank (Offline-First Dataset)
export const rtuData = {
  "university": "Rajasthan Technical University (RTU), Kota",
  "exam_pattern": {
    "part_a": {
      "questions": 10,
      "marks_each": 2,
      "total": 20,
      "description": "Compulsory, 2 per unit, ≤25 words"
    },
    "part_b": {
      "questions": 6,
      "marks_each": 5,
      "total": 30,
      "description": "Analytical / Problem Solving, ~100 words"
    },
    "part_c": {
      "questions": 5,
      "marks_each": 10,
      "total": 50,
      "description": "Comprehensive, 1 from each unit"
    },
    "total_marks": 100,
    "external_weight": 70,
    "internal_weight": 30
  },
  "branches": [
    {
      "branch_id": "cse",
      "branch_name": "Computer Science & Engineering (CSE)",
      "icon": "Monitor",
      "semesters": [
        {
          "semester": 1,
          "year": 1,
          "subjects": [
            {
              "code": "1FY2-01",
              "name": "Engineering Mathematics-I",
              "units": [
                {
                  "number": 1,
                  "title": "Differential Calculus-I",
                  "topics": [
                    "Asymptotes",
                    "Curvature",
                    "Envelopes",
                    "Curve Tracing"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "1fy201_u1_q1",
                      "q": "Which curve has the equation y┬▓(a-x) = x┬│?",
                      "options": [
                        "Cissoid of Diocles",
                        "Folium of Descartes",
                        "Cardioid",
                        "Lemniscate"
                      ],
                      "answer": "Cissoid of Diocles",
                      "topic": "Curve Tracing"
                    },
                    {
                      "id": "1fy201_u1_q2",
                      "q": "The envelope of a family of curves is tangent to:",
                      "options": [
                        "Every member of the family",
                        "Only the first curve",
                        "No curve",
                        "Alternate curves"
                      ],
                      "answer": "Every member of the family",
                      "topic": "Envelopes"
                    },
                    {
                      "id": "1fy201_u1_q3",
                      "q": "When applying theorem/formula for \"Envelopes\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "Envelopes"
                    },
                    {
                      "id": "1fy201_u1_q4",
                      "q": "What is the standard evaluation method for \"Curve Tracing\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Curve Tracing"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Differential Calculus-II",
                  "topics": [
                    "Partial Differentiation",
                    "Euler's Theorem",
                    "Taylor's Series (2 vars)",
                    "Lagrange Multipliers"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "1fy201_u2_q1",
                      "q": "Euler's theorem applies to functions that are:",
                      "options": [
                        "Homogeneous",
                        "Discontinuous",
                        "Non-differentiable",
                        "Linear only"
                      ],
                      "answer": "Homogeneous",
                      "topic": "Euler's Theorem"
                    },
                    {
                      "id": "1fy201_u2_q2",
                      "q": "Lagrange multipliers are used for:",
                      "options": [
                        "Constrained optimization",
                        "Unconstrained optimization",
                        "Integration",
                        "Differentiation only"
                      ],
                      "answer": "Constrained optimization",
                      "topic": "Lagrange Multipliers"
                    },
                    {
                      "id": "1fy201_u2_q3",
                      "q": "When applying theorem/formula for \"Taylor's Series (2 vars)\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "Taylor's Series (2 vars)"
                    },
                    {
                      "id": "1fy201_u2_q4",
                      "q": "What is the standard evaluation method for \"Lagrange Multipliers\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Lagrange Multipliers"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Integral Calculus-I",
                  "topics": [
                    "Beta & Gamma Functions",
                    "Dirichlet's Integral",
                    "Area & Arc Length",
                    "Volume of Revolution"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "1fy201_u3_q1",
                      "q": "The value of ╬ô(1/2) is:",
                      "options": [
                        "ΓêÜ╧Ç",
                        "╧Ç",
                        "1",
                        "ΓêÜ2"
                      ],
                      "answer": "ΓêÜ╧Ç",
                      "topic": "Gamma Functions"
                    },
                    {
                      "id": "1fy201_u3_q2",
                      "q": "Beta function B(m,n) is symmetric, meaning B(m,n) equals:",
                      "options": [
                        "B(n,m)",
                        "B(m+n,1)",
                        "B(m-n,0)",
                        "B(1,mn)"
                      ],
                      "answer": "B(n,m)",
                      "topic": "Beta Functions"
                    },
                    {
                      "id": "1fy201_u3_q3",
                      "q": "When applying theorem/formula for \"Area & Arc Length\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "Area & Arc Length"
                    },
                    {
                      "id": "1fy201_u3_q4",
                      "q": "What is the standard evaluation method for \"Volume of Revolution\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Volume of Revolution"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Integral Calculus-II",
                  "topics": [
                    "Double & Triple Integrals",
                    "Change of Order",
                    "Jacobian Transformations",
                    "Center of Gravity"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "1fy201_u4_q1",
                      "q": "The Jacobian for Cartesian to Polar transformation is:",
                      "options": [
                        "r",
                        "r┬▓",
                        "1/r",
                        "1"
                      ],
                      "answer": "r",
                      "topic": "Jacobian"
                    },
                    {
                      "id": "1fy201_u4_q2",
                      "q": "Changing the order of integration may require:",
                      "options": [
                        "Redrawing the region of integration",
                        "Changing the function",
                        "Both integrals become single",
                        "None of these"
                      ],
                      "answer": "Redrawing the region of integration",
                      "topic": "Change of Order"
                    },
                    {
                      "id": "1fy201_u4_q3",
                      "q": "When applying theorem/formula for \"Jacobian Transformations\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "Jacobian Transformations"
                    },
                    {
                      "id": "1fy201_u4_q4",
                      "q": "What is the standard evaluation method for \"Center of Gravity\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Center of Gravity"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Vector Calculus",
                  "topics": [
                    "Gradient, Divergence, Curl",
                    "Line & Surface Integrals",
                    "Gauss Divergence Theorem",
                    "Green's & Stokes' Theorems"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "1fy201_u5_q1",
                      "q": "A vector field F is solenoidal if:",
                      "options": [
                        "div F = 0",
                        "curl F = 0",
                        "grad F = 0",
                        "F = 0"
                      ],
                      "answer": "div F = 0",
                      "topic": "Divergence"
                    },
                    {
                      "id": "1fy201_u5_q2",
                      "q": "Green's theorem relates:",
                      "options": [
                        "Line integral to double integral",
                        "Volume to surface integral",
                        "Gradient to curl",
                        "None"
                      ],
                      "answer": "Line integral to double integral",
                      "topic": "Green's Theorem"
                    },
                    {
                      "id": "1fy201_u5_q3",
                      "q": "When applying theorem/formula for \"Gauss Divergence Theorem\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "Gauss Divergence Theorem"
                    },
                    {
                      "id": "1fy201_u5_q4",
                      "q": "What is the standard evaluation method for \"Green's & Stokes' Theorems\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Green's & Stokes' Theorems"
                    }
                  ]
                }
              ]
            },
            {
              "code": "1FY2-02",
              "name": "Engineering Physics",
              "units": [
                {
                  "number": 1,
                  "title": "Wave Optics",
                  "topics": [
                    "Thin Film Interference",
                    "Newton's Rings",
                    "Fraunhofer Diffraction",
                    "Diffraction Grating"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "1fy202_u1_q1",
                      "q": "Central spot in Newton's rings in reflected light is:",
                      "options": [
                        "Dark",
                        "Bright",
                        "Absent",
                        "Variable"
                      ],
                      "answer": "Dark",
                      "topic": "Newton's Rings"
                    },
                    {
                      "id": "1fy202_u1_q2",
                      "q": "Resolving power of a diffraction grating increases with:",
                      "options": [
                        "Number of slits",
                        "Slit width only",
                        "Wavelength",
                        "Distance to screen"
                      ],
                      "answer": "Number of slits",
                      "topic": "Diffraction Grating"
                    },
                    {
                      "id": "1fy202_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Fraunhofer Diffraction\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Fraunhofer Diffraction"
                    },
                    {
                      "id": "1fy202_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Diffraction Grating\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Diffraction Grating"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Quantum Mechanics",
                  "topics": [
                    "Compton Effect",
                    "de-Broglie Hypothesis",
                    "Uncertainty Principle",
                    "Schr├╢dinger Equation, Particle in 1D Box"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "1fy202_u2_q1",
                      "q": "de-Broglie wavelength ╬╗ = h/p relates to:",
                      "options": [
                        "Wave-particle duality",
                        "Only waves",
                        "Only particles",
                        "Electromagnetic radiation only"
                      ],
                      "answer": "Wave-particle duality",
                      "topic": "de-Broglie"
                    },
                    {
                      "id": "1fy202_u2_q2",
                      "q": "Energy levels of a particle in 1D infinite potential well are:",
                      "options": [
                        "Quantized",
                        "Continuous",
                        "Zero",
                        "Infinite"
                      ],
                      "answer": "Quantized",
                      "topic": "Particle in 1D Box"
                    },
                    {
                      "id": "1fy202_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Uncertainty Principle\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Uncertainty Principle"
                    },
                    {
                      "id": "1fy202_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Schr├╢dinger Equation, Particle in 1D Box\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Schr├╢dinger Equation, Particle in 1D Box"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Coherence & Lasers",
                  "topics": [
                    "Spontaneous & Stimulated Emission",
                    "Einstein's A & B Coefficients",
                    "Population Inversion",
                    "He-Ne, Ruby, Semiconductor Laser"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "1fy202_u3_q1",
                      "q": "Population inversion is a necessary condition for:",
                      "options": [
                        "Laser action",
                        "LED emission",
                        "Photoelectric effect",
                        "Compton scattering"
                      ],
                      "answer": "Laser action",
                      "topic": "Population Inversion"
                    },
                    {
                      "id": "1fy202_u3_q2",
                      "q": "He-Ne laser produces light of wavelength:",
                      "options": [
                        "632.8 nm",
                        "694.3 nm",
                        "1064 nm",
                        "532 nm"
                      ],
                      "answer": "632.8 nm",
                      "topic": "He-Ne Laser"
                    },
                    {
                      "id": "1fy202_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Population Inversion\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Population Inversion"
                    },
                    {
                      "id": "1fy202_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"He-Ne, Ruby, Semiconductor Laser\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "He-Ne, Ruby, Semiconductor Laser"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Optical Fibers",
                  "topics": [
                    "Total Internal Reflection",
                    "Numerical Aperture",
                    "Acceptance Angle",
                    "Step-index vs Graded-index"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "1fy202_u4_q1",
                      "q": "Numerical Aperture of an optical fiber depends on:",
                      "options": [
                        "Refractive indices of core and cladding",
                        "Length of fiber",
                        "Diameter only",
                        "Wavelength only"
                      ],
                      "answer": "Refractive indices of core and cladding",
                      "topic": "Numerical Aperture"
                    },
                    {
                      "id": "1fy202_u4_q2",
                      "q": "Graded-index fiber reduces:",
                      "options": [
                        "Modal dispersion",
                        "Absorption loss",
                        "Material dispersion",
                        "Scattering only"
                      ],
                      "answer": "Modal dispersion",
                      "topic": "Graded-index"
                    },
                    {
                      "id": "1fy202_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Acceptance Angle\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Acceptance Angle"
                    },
                    {
                      "id": "1fy202_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Step-index vs Graded-index\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Step-index vs Graded-index"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Material Science & Electromagnetism",
                  "topics": [
                    "Dielectric Polarization",
                    "Clausius-Mossotti",
                    "Superconductivity & Meissner Effect",
                    "Maxwell's Equations"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "1fy202_u5_q1",
                      "q": "Meissner effect is the expulsion of:",
                      "options": [
                        "Magnetic flux from superconductor",
                        "Electric current",
                        "Heat",
                        "Light"
                      ],
                      "answer": "Magnetic flux from superconductor",
                      "topic": "Meissner Effect"
                    },
                    {
                      "id": "1fy202_u5_q2",
                      "q": "Maxwell's equations unify:",
                      "options": [
                        "Electricity and magnetism",
                        "Gravity and EM",
                        "Strong and weak force",
                        "None"
                      ],
                      "answer": "Electricity and magnetism",
                      "topic": "Maxwell's Equations"
                    },
                    {
                      "id": "1fy202_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Superconductivity & Meissner Effect\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Superconductivity & Meissner Effect"
                    },
                    {
                      "id": "1fy202_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Maxwell's Equations\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Maxwell's Equations"
                    }
                  ]
                }
              ]
            },
            {
              "code": "1FY3-06",
              "name": "Programming for Problem Solving (C)",
              "units": [
                {
                  "number": 1,
                  "title": "Fundamentals & Flow of Control",
                  "topics": [
                    "Data Types & Operators",
                    "if-else, switch-case",
                    "Loops (for, while, do-while)",
                    "break, continue"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "1fy306_u1_q1",
                      "q": "The ternary operator in C is:",
                      "options": [
                        "? :",
                        ":: ",
                        "=> ",
                        "<>"
                      ],
                      "answer": "? :",
                      "topic": "Operators"
                    },
                    {
                      "id": "1fy306_u1_q2",
                      "q": "Which loop executes at least once?",
                      "options": [
                        "do-while",
                        "for",
                        "while",
                        "None"
                      ],
                      "answer": "do-while",
                      "topic": "Loops"
                    },
                    {
                      "id": "1fy306_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Loops (for, while, do-while)\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Loops (for, while, do-while)"
                    },
                    {
                      "id": "1fy306_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"break, continue\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "break, continue"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Arrays & Strings",
                  "topics": [
                    "1D & 2D Arrays",
                    "Matrix Multiplication",
                    "String Functions",
                    "String Operations without Library"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "1fy306_u2_q1",
                      "q": "2D arrays in C are stored in memory as:",
                      "options": [
                        "Row-major order",
                        "Column-major order",
                        "Random",
                        "Linked"
                      ],
                      "answer": "Row-major order",
                      "topic": "2D Arrays"
                    },
                    {
                      "id": "1fy306_u2_q2",
                      "q": "strlen() returns:",
                      "options": [
                        "Length excluding null terminator",
                        "Length including null",
                        "Size in bytes",
                        "Number of words"
                      ],
                      "answer": "Length excluding null terminator",
                      "topic": "String Functions"
                    },
                    {
                      "id": "1fy306_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"String Functions\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "String Functions"
                    },
                    {
                      "id": "1fy306_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"String Operations without Library\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "String Operations without Library"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Functions & Recursion",
                  "topics": [
                    "Call by Value vs Reference",
                    "Storage Classes",
                    "Tower of Hanoi",
                    "Recursion Trees"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "1fy306_u3_q1",
                      "q": "A static variable retains its value between:",
                      "options": [
                        "Function calls",
                        "Programs",
                        "Compilations",
                        "Files"
                      ],
                      "answer": "Function calls",
                      "topic": "Storage Classes"
                    },
                    {
                      "id": "1fy306_u3_q2",
                      "q": "Tower of Hanoi for N disks requires minimum moves:",
                      "options": [
                        "2^N - 1",
                        "2^N",
                        "N┬▓",
                        "N!"
                      ],
                      "answer": "2^N - 1",
                      "topic": "Tower of Hanoi"
                    },
                    {
                      "id": "1fy306_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Tower of Hanoi\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Tower of Hanoi"
                    },
                    {
                      "id": "1fy306_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Recursion Trees\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Recursion Trees"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Pointers & Dynamic Memory",
                  "topics": [
                    "Pointer Arithmetic",
                    "malloc, calloc, realloc, free",
                    "Dangling Pointers",
                    "Memory Leaks"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "1fy306_u4_q1",
                      "q": "malloc() initializes allocated memory to:",
                      "options": [
                        "Garbage values",
                        "Zero",
                        "NULL",
                        "-1"
                      ],
                      "answer": "Garbage values",
                      "topic": "malloc"
                    },
                    {
                      "id": "1fy306_u4_q2",
                      "q": "A dangling pointer points to:",
                      "options": [
                        "Deallocated memory",
                        "NULL",
                        "Valid memory",
                        "Stack"
                      ],
                      "answer": "Deallocated memory",
                      "topic": "Dangling Pointers"
                    },
                    {
                      "id": "1fy306_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Dangling Pointers\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Dangling Pointers"
                    },
                    {
                      "id": "1fy306_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Memory Leaks\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Memory Leaks"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Structures, Unions & File Handling",
                  "topics": [
                    "Structures & Unions",
                    "Structure Padding",
                    "File Modes",
                    "fopen, fclose, fprintf, fscanf"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "1fy306_u5_q1",
                      "q": "In a union, all members share:",
                      "options": [
                        "Same memory location",
                        "Different memory",
                        "Same type",
                        "Same name"
                      ],
                      "answer": "Same memory location",
                      "topic": "Unions"
                    },
                    {
                      "id": "1fy306_u5_q2",
                      "q": "File mode 'a' opens file for:",
                      "options": [
                        "Appending",
                        "Reading",
                        "Writing from start",
                        "Binary read"
                      ],
                      "answer": "Appending",
                      "topic": "File Modes"
                    },
                    {
                      "id": "1fy306_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"File Modes\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "File Modes"
                    },
                    {
                      "id": "1fy306_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"fopen, fclose, fprintf, fscanf\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "fopen, fclose, fprintf, fscanf"
                    }
                  ]
                }
              ]
            },
            {
              "code": "1FY3-08",
              "name": "Basic Electrical Engineering",
              "units": [
                {
                  "number": 1,
                  "title": "DC Circuits",
                  "topics": [
                    "KCL, KVL",
                    "Superposition Theorem",
                    "Thevenin's & Norton's",
                    "Maximum Power Transfer"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "1fy308_u1_q1",
                      "q": "Maximum power is transferred when load resistance equals:",
                      "options": [
                        "Source resistance",
                        "Zero",
                        "Infinity",
                        "Twice source resistance"
                      ],
                      "answer": "Source resistance",
                      "topic": "Max Power Transfer"
                    },
                    {
                      "id": "1fy308_u1_q2",
                      "q": "KVL is based on conservation of:",
                      "options": [
                        "Energy",
                        "Charge",
                        "Mass",
                        "Momentum"
                      ],
                      "answer": "Energy",
                      "topic": "KVL"
                    },
                    {
                      "id": "1fy308_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Thevenin's & Norton's\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Thevenin's & Norton's"
                    },
                    {
                      "id": "1fy308_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Maximum Power Transfer\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Maximum Power Transfer"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "AC Circuits",
                  "topics": [
                    "RMS & Average Values",
                    "Phasors",
                    "Series/Parallel RLC",
                    "Resonance & Power Factor"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "1fy308_u2_q1",
                      "q": "At resonance in series RLC, impedance is:",
                      "options": [
                        "Minimum (purely resistive)",
                        "Maximum",
                        "Zero",
                        "Infinite"
                      ],
                      "answer": "Minimum (purely resistive)",
                      "topic": "Resonance"
                    },
                    {
                      "id": "1fy308_u2_q2",
                      "q": "Power factor of a purely resistive circuit is:",
                      "options": [
                        "1 (unity)",
                        "0",
                        "0.5",
                        "Infinity"
                      ],
                      "answer": "1 (unity)",
                      "topic": "Power Factor"
                    },
                    {
                      "id": "1fy308_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Series/Parallel RLC\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Series/Parallel RLC"
                    },
                    {
                      "id": "1fy308_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Resonance & Power Factor\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Resonance & Power Factor"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Transformers",
                  "topics": [
                    "EMF Equation",
                    "Equivalent Circuit",
                    "OC/SC Tests",
                    "Efficiency & Voltage Regulation"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "1fy308_u3_q1",
                      "q": "Transformer core is laminated to reduce:",
                      "options": [
                        "Eddy current losses",
                        "Hysteresis losses",
                        "Copper losses",
                        "Friction losses"
                      ],
                      "answer": "Eddy current losses",
                      "topic": "Transformers"
                    },
                    {
                      "id": "1fy308_u3_q2",
                      "q": "EMF equation of transformer: E = 4.44fN╬ªm relates EMF to:",
                      "options": [
                        "Frequency & flux",
                        "Current only",
                        "Resistance",
                        "Capacitance"
                      ],
                      "answer": "Frequency & flux",
                      "topic": "EMF Equation"
                    },
                    {
                      "id": "1fy308_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"OC/SC Tests\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "OC/SC Tests"
                    },
                    {
                      "id": "1fy308_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Efficiency & Voltage Regulation\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Efficiency & Voltage Regulation"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Electrical Machines",
                  "topics": [
                    "DC Generator & Motor",
                    "Back EMF",
                    "Torque Equation",
                    "3-Phase Induction Motor"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "1fy308_u4_q1",
                      "q": "Back EMF in DC motor acts as:",
                      "options": [
                        "Self-regulating mechanism",
                        "Amplifier",
                        "Oscillator",
                        "Filter"
                      ],
                      "answer": "Self-regulating mechanism",
                      "topic": "Back EMF"
                    },
                    {
                      "id": "1fy308_u4_q2",
                      "q": "Slip of induction motor at synchronous speed is:",
                      "options": [
                        "0",
                        "1",
                        "0.5",
                        "Infinity"
                      ],
                      "answer": "0",
                      "topic": "Induction Motor"
                    },
                    {
                      "id": "1fy308_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Torque Equation\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Torque Equation"
                    },
                    {
                      "id": "1fy308_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"3-Phase Induction Motor\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "3-Phase Induction Motor"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Power Converters & Safety",
                  "topics": [
                    "Diodes, BJT, MOSFET",
                    "Half/Full-Wave Rectifiers",
                    "MCB & ELCB",
                    "Earthing Types"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "1fy308_u5_q1",
                      "q": "MCB stands for:",
                      "options": [
                        "Miniature Circuit Breaker",
                        "Maximum Current Breaker",
                        "Micro Circuit Board",
                        "Main Control Box"
                      ],
                      "answer": "Miniature Circuit Breaker",
                      "topic": "MCB"
                    },
                    {
                      "id": "1fy308_u5_q2",
                      "q": "Full-wave bridge rectifier uses how many diodes?",
                      "options": [
                        "4",
                        "2",
                        "1",
                        "6"
                      ],
                      "answer": "4",
                      "topic": "Rectifiers"
                    },
                    {
                      "id": "1fy308_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"MCB & ELCB\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "MCB & ELCB"
                    },
                    {
                      "id": "1fy308_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Earthing Types\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Earthing Types"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 3,
          "year": 2,
          "subjects": [
            {
              "code": "3CS3-04",
              "name": "Digital Electronics",
              "units": [
                {
                  "number": 1,
                  "title": "Number Systems & Boolean Algebra",
                  "topics": [
                    "Binary/Hex Arithmetic",
                    "2's Complement",
                    "BCD, Gray, Excess-3 Codes",
                    "Boolean Theorems & Logic Gates"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs304_u1_q1",
                      "q": "NAND and NOR gates are called:",
                      "options": [
                        "Universal gates",
                        "Basic gates",
                        "Derived gates",
                        "Sequential gates"
                      ],
                      "answer": "Universal gates",
                      "topic": "Logic Gates"
                    },
                    {
                      "id": "3cs304_u1_q2",
                      "q": "2's complement of binary 1010 is:",
                      "options": [
                        "0110",
                        "1010",
                        "0101",
                        "1001"
                      ],
                      "answer": "0110",
                      "topic": "2's Complement"
                    },
                    {
                      "id": "3cs304_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"BCD, Gray, Excess-3 Codes\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "BCD, Gray, Excess-3 Codes"
                    },
                    {
                      "id": "3cs304_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Boolean Theorems & Logic Gates\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Boolean Theorems & Logic Gates"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Logic Families & Characteristics",
                  "topics": [
                    "TTL, CMOS, ECL",
                    "Fan-in, Fan-out",
                    "Noise Margin, Propagation Delay",
                    "CMOS Inverter"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "3cs304_u2_q1",
                      "q": "CMOS logic family has the advantage of:",
                      "options": [
                        "Low power consumption",
                        "Highest speed",
                        "Maximum fan-out",
                        "None"
                      ],
                      "answer": "Low power consumption",
                      "topic": "CMOS"
                    },
                    {
                      "id": "3cs304_u2_q2",
                      "q": "Propagation delay is the time between:",
                      "options": [
                        "Input change and output change",
                        "Power on and first output",
                        "Two clock edges",
                        "None"
                      ],
                      "answer": "Input change and output change",
                      "topic": "Propagation Delay"
                    },
                    {
                      "id": "3cs304_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Noise Margin, Propagation Delay\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Noise Margin, Propagation Delay"
                    },
                    {
                      "id": "3cs304_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"CMOS Inverter\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "CMOS Inverter"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Minimization Techniques",
                  "topics": [
                    "K-Maps (up to 5 vars)",
                    "SOP & POS",
                    "Don't Care Conditions",
                    "Quine-McCluskey Method"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cs304_u3_q1",
                      "q": "Don't care conditions in K-Map can be treated as:",
                      "options": [
                        "Either 0 or 1",
                        "Only 0",
                        "Only 1",
                        "Must be ignored"
                      ],
                      "answer": "Either 0 or 1",
                      "topic": "Don't Care"
                    },
                    {
                      "id": "3cs304_u3_q2",
                      "q": "Quine-McCluskey method is preferred over K-Map for:",
                      "options": [
                        "More than 5 variables",
                        "Less than 3 variables",
                        "Only 2 variables",
                        "Never"
                      ],
                      "answer": "More than 5 variables",
                      "topic": "Quine-McCluskey"
                    },
                    {
                      "id": "3cs304_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Don't Care Conditions\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Don't Care Conditions"
                    },
                    {
                      "id": "3cs304_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Quine-McCluskey Method\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Quine-McCluskey Method"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Combinational Logic Circuits",
                  "topics": [
                    "Half/Full Adders",
                    "Look-Ahead Carry Adder",
                    "Multiplexers & Demultiplexers",
                    "Decoders & Encoders"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cs304_u4_q1",
                      "q": "A 4-to-1 MUX has how many select lines?",
                      "options": [
                        "2",
                        "4",
                        "1",
                        "3"
                      ],
                      "answer": "2",
                      "topic": "Multiplexers"
                    },
                    {
                      "id": "3cs304_u4_q2",
                      "q": "Full Adder has how many inputs?",
                      "options": [
                        "3",
                        "2",
                        "4",
                        "1"
                      ],
                      "answer": "3",
                      "topic": "Full Adder"
                    },
                    {
                      "id": "3cs304_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Multiplexers & Demultiplexers\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Multiplexers & Demultiplexers"
                    },
                    {
                      "id": "3cs304_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Decoders & Encoders\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Decoders & Encoders"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Sequential Circuits & Flip-Flops",
                  "topics": [
                    "SR, JK, D, T Flip-Flops",
                    "Master-Slave JK",
                    "Race-Around Condition",
                    "Counters & Shift Registers"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs304_u5_q1",
                      "q": "Race-around condition occurs in:",
                      "options": [
                        "JK Flip-Flop when J=K=1",
                        "SR when S=R=1",
                        "D Flip-Flop",
                        "T Flip-Flop"
                      ],
                      "answer": "JK Flip-Flop when J=K=1",
                      "topic": "Race-Around"
                    },
                    {
                      "id": "3cs304_u5_q2",
                      "q": "A 3-bit binary counter counts from:",
                      "options": [
                        "0 to 7",
                        "0 to 8",
                        "1 to 8",
                        "1 to 7"
                      ],
                      "answer": "0 to 7",
                      "topic": "Counters"
                    },
                    {
                      "id": "3cs304_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Race-Around Condition\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Race-Around Condition"
                    },
                    {
                      "id": "3cs304_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Counters & Shift Registers\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Counters & Shift Registers"
                    }
                  ]
                }
              ]
            },
            {
              "code": "3CS4-05",
              "name": "Data Structures & Algorithms",
              "units": [
                {
                  "number": 1,
                  "title": "Stacks & Applications",
                  "topics": [
                    "Stack ADT",
                    "Infix to Postfix/Prefix",
                    "Postfix Evaluation",
                    "Multiple Stacks in One Array"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs405_u1_q1",
                      "q": "Stack follows which principle?",
                      "options": [
                        "LIFO",
                        "FIFO",
                        "LILO",
                        "Random Access"
                      ],
                      "answer": "LIFO",
                      "topic": "Stack ADT"
                    },
                    {
                      "id": "3cs405_u1_q2",
                      "q": "Infix to postfix conversion uses which data structure?",
                      "options": [
                        "Stack",
                        "Queue",
                        "Linked List",
                        "Tree"
                      ],
                      "answer": "Stack",
                      "topic": "Infix to Postfix"
                    },
                    {
                      "id": "3cs405_u1_q3",
                      "q": "When implementing \"Postfix Evaluation\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Postfix Evaluation"
                    },
                    {
                      "id": "3cs405_u1_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Multiple Stacks in One Array\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Multiple Stacks in One Array"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Queues & Linked Lists",
                  "topics": [
                    "Circular Queue, Deque",
                    "Priority Queue",
                    "Singly/Doubly/Circular Linked Lists",
                    "Polynomial Addition"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs405_u2_q1",
                      "q": "Circular queue solves the problem of:",
                      "options": [
                        "Memory wastage in linear queue",
                        "Slow operations",
                        "Sorting",
                        "Searching"
                      ],
                      "answer": "Memory wastage in linear queue",
                      "topic": "Circular Queue"
                    },
                    {
                      "id": "3cs405_u2_q2",
                      "q": "Reversing a singly linked list requires minimum:",
                      "options": [
                        "O(n) time, O(1) space",
                        "O(n┬▓) time",
                        "O(n) space",
                        "O(log n) time"
                      ],
                      "answer": "O(n) time, O(1) space",
                      "topic": "Linked List Reversal"
                    },
                    {
                      "id": "3cs405_u2_q3",
                      "q": "When implementing \"Singly/Doubly/Circular Linked Lists\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Singly/Doubly/Circular Linked Lists"
                    },
                    {
                      "id": "3cs405_u2_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Polynomial Addition\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Polynomial Addition"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Searching & Sorting",
                  "topics": [
                    "Binary Search",
                    "Merge Sort, Quick Sort",
                    "Heap Sort, Radix Sort",
                    "Time Complexity Analysis"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs405_u3_q1",
                      "q": "Worst-case time complexity of Quick Sort is:",
                      "options": [
                        "O(n┬▓)",
                        "O(n log n)",
                        "O(n)",
                        "O(log n)"
                      ],
                      "answer": "O(n┬▓)",
                      "topic": "Quick Sort"
                    },
                    {
                      "id": "3cs405_u3_q2",
                      "q": "Merge Sort always has time complexity:",
                      "options": [
                        "O(n log n)",
                        "O(n┬▓)",
                        "O(n)",
                        "O(log n)"
                      ],
                      "answer": "O(n log n)",
                      "topic": "Merge Sort"
                    },
                    {
                      "id": "3cs405_u3_q3",
                      "q": "When implementing \"Heap Sort, Radix Sort\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Heap Sort, Radix Sort"
                    },
                    {
                      "id": "3cs405_u3_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Time Complexity Analysis\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Time Complexity Analysis"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Trees & AVL Trees",
                  "topics": [
                    "Binary Tree Traversals",
                    "BST Operations",
                    "AVL Rotations (LL, RR, LR, RL)",
                    "B-Trees"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cs405_u4_q1",
                      "q": "Balance factor in AVL tree must be:",
                      "options": [
                        "-1, 0, or +1",
                        "0 only",
                        "Any integer",
                        "-2 to +2"
                      ],
                      "answer": "-1, 0, or +1",
                      "topic": "AVL Trees"
                    },
                    {
                      "id": "3cs405_u4_q2",
                      "q": "Inorder traversal of a BST gives:",
                      "options": [
                        "Sorted ascending order",
                        "Sorted descending",
                        "Random order",
                        "Level order"
                      ],
                      "answer": "Sorted ascending order",
                      "topic": "BST Traversal"
                    },
                    {
                      "id": "3cs405_u4_q3",
                      "q": "When implementing \"AVL Rotations (LL, RR, LR, RL)\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "AVL Rotations (LL, RR, LR, RL)"
                    },
                    {
                      "id": "3cs405_u4_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"B-Trees\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "B-Trees"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Graphs & Hashing",
                  "topics": [
                    "BFS & DFS",
                    "Dijkstra's Algorithm",
                    "Prim's & Kruskal's MST",
                    "Hash Functions & Collision Resolution"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cs405_u5_q1",
                      "q": "Dijkstra's algorithm does NOT work with:",
                      "options": [
                        "Negative weight edges",
                        "Positive weights",
                        "Undirected graphs",
                        "Dense graphs"
                      ],
                      "answer": "Negative weight edges",
                      "topic": "Dijkstra's"
                    },
                    {
                      "id": "3cs405_u5_q2",
                      "q": "Open addressing is a technique for:",
                      "options": [
                        "Collision resolution in hashing",
                        "Graph traversal",
                        "Tree balancing",
                        "Sorting"
                      ],
                      "answer": "Collision resolution in hashing",
                      "topic": "Hashing"
                    },
                    {
                      "id": "3cs405_u5_q3",
                      "q": "When implementing \"Prim's & Kruskal's MST\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Prim's & Kruskal's MST"
                    },
                    {
                      "id": "3cs405_u5_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Hash Functions & Collision Resolution\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Hash Functions & Collision Resolution"
                    }
                  ]
                }
              ]
            },
            {
              "code": "3CS4-06",
              "name": "Object Oriented Programming (C++)",
              "units": [
                {
                  "number": 1,
                  "title": "OOP Principles & C++ Foundations",
                  "topics": [
                    "Classes/Objects",
                    "Constructors & Destructors",
                    "Copy Constructor",
                    "Static Members"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs406_u1_q1",
                      "q": "Copy constructor is called when:",
                      "options": [
                        "Object is initialized from another object",
                        "Object is deleted",
                        "Function is called",
                        "Loop runs"
                      ],
                      "answer": "Object is initialized from another object",
                      "topic": "Copy Constructor"
                    },
                    {
                      "id": "3cs406_u1_q2",
                      "q": "Destructor name is prefixed with:",
                      "options": [
                        "~ (tilde)",
                        "# (hash)",
                        "@ (at)",
                        "$ (dollar)"
                      ],
                      "answer": "~ (tilde)",
                      "topic": "Destructors"
                    },
                    {
                      "id": "3cs406_u1_q3",
                      "q": "When implementing \"Copy Constructor\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Copy Constructor"
                    },
                    {
                      "id": "3cs406_u1_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Static Members\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Static Members"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Inheritance & Operator Overloading",
                  "topics": [
                    "Single/Multiple/Hierarchical",
                    "Diamond Problem",
                    "Virtual Base Classes",
                    "Operator Overloading"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cs406_u2_q1",
                      "q": "Diamond problem occurs in:",
                      "options": [
                        "Multiple inheritance",
                        "Single inheritance",
                        "Multilevel",
                        "Hierarchical"
                      ],
                      "answer": "Multiple inheritance",
                      "topic": "Diamond Problem"
                    },
                    {
                      "id": "3cs406_u2_q2",
                      "q": "Which operator cannot be overloaded in C++?",
                      "options": [
                        ":: (scope resolution)",
                        "+ (plus)",
                        "<< (left shift)",
                        "== (equality)"
                      ],
                      "answer": ":: (scope resolution)",
                      "topic": "Operator Overloading"
                    },
                    {
                      "id": "3cs406_u2_q3",
                      "q": "When implementing \"Virtual Base Classes\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Virtual Base Classes"
                    },
                    {
                      "id": "3cs406_u2_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Operator Overloading\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Operator Overloading"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Polymorphism & Virtual Functions",
                  "topics": [
                    "Virtual Functions",
                    "VTABLE & VPTR",
                    "Pure Virtual Functions",
                    "Abstract Classes"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cs406_u3_q1",
                      "q": "A class with at least one pure virtual function is:",
                      "options": [
                        "Abstract class",
                        "Concrete class",
                        "Final class",
                        "Static class"
                      ],
                      "answer": "Abstract class",
                      "topic": "Abstract Classes"
                    },
                    {
                      "id": "3cs406_u3_q2",
                      "q": "VTABLE is created for classes having:",
                      "options": [
                        "Virtual functions",
                        "Static functions",
                        "Inline functions",
                        "Friend functions"
                      ],
                      "answer": "Virtual functions",
                      "topic": "VTABLE"
                    },
                    {
                      "id": "3cs406_u3_q3",
                      "q": "When implementing \"Pure Virtual Functions\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Pure Virtual Functions"
                    },
                    {
                      "id": "3cs406_u3_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Abstract Classes\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Abstract Classes"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Templates & Exception Handling",
                  "topics": [
                    "Function/Class Templates",
                    "try-catch-throw",
                    "Multiple catch blocks",
                    "Generic Programming"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs406_u4_q1",
                      "q": "Templates enable:",
                      "options": [
                        "Generic/type-independent programming",
                        "Faster compilation only",
                        "Memory reduction",
                        "Error handling"
                      ],
                      "answer": "Generic/type-independent programming",
                      "topic": "Templates"
                    },
                    {
                      "id": "3cs406_u4_q2",
                      "q": "catch(...) catches:",
                      "options": [
                        "All exceptions",
                        "No exceptions",
                        "Only int",
                        "Only runtime_error"
                      ],
                      "answer": "All exceptions",
                      "topic": "Exception Handling"
                    },
                    {
                      "id": "3cs406_u4_q3",
                      "q": "When implementing \"Multiple catch blocks\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Multiple catch blocks"
                    },
                    {
                      "id": "3cs406_u4_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Generic Programming\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Generic Programming"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Streams & STL",
                  "topics": [
                    "File I/O Streams",
                    "STL Containers (vector, list, map)",
                    "Iterators",
                    "STL Algorithms (sort, find)"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "3cs406_u5_q1",
                      "q": "std::vector in STL provides:",
                      "options": [
                        "Dynamic array with random access",
                        "Linked list",
                        "Hash table",
                        "Binary tree"
                      ],
                      "answer": "Dynamic array with random access",
                      "topic": "STL vector"
                    },
                    {
                      "id": "3cs406_u5_q2",
                      "q": "ios::app opens file for:",
                      "options": [
                        "Appending at end",
                        "Reading only",
                        "Overwriting",
                        "Binary mode"
                      ],
                      "answer": "Appending at end",
                      "topic": "File I/O"
                    },
                    {
                      "id": "3cs406_u5_q3",
                      "q": "When implementing \"Iterators\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Iterators"
                    },
                    {
                      "id": "3cs406_u5_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"STL Algorithms (sort, find)\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "STL Algorithms (sort, find)"
                    }
                  ]
                }
              ]
            },
            {
              "code": "3CS4-07",
              "name": "Software Engineering",
              "units": [
                {
                  "number": 1,
                  "title": "Software Process Models",
                  "topics": [
                    "SDLC Phases",
                    "Waterfall Model",
                    "Spiral Model",
                    "Agile/Scrum"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cs407_u1_q1",
                      "q": "Spiral model is primarily:",
                      "options": [
                        "Risk-driven",
                        "Document-driven",
                        "Code-driven",
                        "Test-driven"
                      ],
                      "answer": "Risk-driven",
                      "topic": "Spiral Model"
                    },
                    {
                      "id": "3cs407_u1_q2",
                      "q": "In Agile Scrum, a sprint typically lasts:",
                      "options": [
                        "2-4 weeks",
                        "6 months",
                        "1 day",
                        "1 year"
                      ],
                      "answer": "2-4 weeks",
                      "topic": "Agile/Scrum"
                    },
                    {
                      "id": "3cs407_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Spiral Model\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Spiral Model"
                    },
                    {
                      "id": "3cs407_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Agile/Scrum\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Agile/Scrum"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Requirements Engineering",
                  "topics": [
                    "Functional vs Non-Functional",
                    "SRS IEEE 830",
                    "Data Flow Diagrams",
                    "Data Dictionary"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs407_u2_q1",
                      "q": "DFD Level 0 is also called:",
                      "options": [
                        "Context Diagram",
                        "System Flowchart",
                        "ER Diagram",
                        "Class Diagram"
                      ],
                      "answer": "Context Diagram",
                      "topic": "DFD"
                    },
                    {
                      "id": "3cs407_u2_q2",
                      "q": "IEEE 830 standard defines:",
                      "options": [
                        "SRS document structure",
                        "Coding standards",
                        "Test plans",
                        "UML notation"
                      ],
                      "answer": "SRS document structure",
                      "topic": "SRS"
                    },
                    {
                      "id": "3cs407_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Data Flow Diagrams\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Data Flow Diagrams"
                    },
                    {
                      "id": "3cs407_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Data Dictionary\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Data Dictionary"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Project Management & Metrics",
                  "topics": [
                    "LOC & Function Points",
                    "COCOMO Model",
                    "Gantt Chart",
                    "PERT/CPM"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cs407_u3_q1",
                      "q": "COCOMO stands for:",
                      "options": [
                        "Constructive Cost Model",
                        "Computer Cost Method",
                        "Constant Complexity Model",
                        "Code Optimization Model"
                      ],
                      "answer": "Constructive Cost Model",
                      "topic": "COCOMO"
                    },
                    {
                      "id": "3cs407_u3_q2",
                      "q": "Function Point Analysis measures:",
                      "options": [
                        "Software functionality from user perspective",
                        "Lines of code",
                        "Number of bugs",
                        "Runtime performance"
                      ],
                      "answer": "Software functionality from user perspective",
                      "topic": "Function Points"
                    },
                    {
                      "id": "3cs407_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Gantt Chart\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Gantt Chart"
                    },
                    {
                      "id": "3cs407_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"PERT/CPM\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "PERT/CPM"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Software Design & Architecture",
                  "topics": [
                    "Cohesion & Coupling",
                    "UML Diagrams",
                    "Structure Charts",
                    "Design Patterns"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs407_u4_q1",
                      "q": "Best design has:",
                      "options": [
                        "High cohesion, low coupling",
                        "Low cohesion, high coupling",
                        "Both high",
                        "Both low"
                      ],
                      "answer": "High cohesion, low coupling",
                      "topic": "Cohesion & Coupling"
                    },
                    {
                      "id": "3cs407_u4_q2",
                      "q": "Use Case diagrams show:",
                      "options": [
                        "System functionality from user perspective",
                        "Database schema",
                        "Network topology",
                        "Memory layout"
                      ],
                      "answer": "System functionality from user perspective",
                      "topic": "UML"
                    },
                    {
                      "id": "3cs407_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Structure Charts\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Structure Charts"
                    },
                    {
                      "id": "3cs407_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Design Patterns\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Design Patterns"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Testing & Maintenance",
                  "topics": [
                    "Black-Box & White-Box Testing",
                    "Cyclomatic Complexity",
                    "BVA & Equivalence Partitioning",
                    "Maintenance Types"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cs407_u5_q1",
                      "q": "Cyclomatic complexity V(G) = E - N + 2 measures:",
                      "options": [
                        "Number of independent paths",
                        "Code size",
                        "Memory usage",
                        "Speed"
                      ],
                      "answer": "Number of independent paths",
                      "topic": "Cyclomatic Complexity"
                    },
                    {
                      "id": "3cs407_u5_q2",
                      "q": "Boundary Value Analysis tests:",
                      "options": [
                        "Edge values of input domain",
                        "Random values",
                        "All values",
                        "Middle values only"
                      ],
                      "answer": "Edge values of input domain",
                      "topic": "BVA"
                    },
                    {
                      "id": "3cs407_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"BVA & Equivalence Partitioning\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "BVA & Equivalence Partitioning"
                    },
                    {
                      "id": "3cs407_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Maintenance Types\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Maintenance Types"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 4,
          "year": 2,
          "subjects": [
            {
              "code": "4CS4-05",
              "name": "Database Management Systems",
              "units": [
                {
                  "number": 1,
                  "title": "Conceptual Data Modeling",
                  "topics": [
                    "3-Schema Architecture",
                    "ER Model",
                    "Weak Entities",
                    "Extended ER"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs405_u1_q1",
                      "q": "Weak entity depends on:",
                      "options": [
                        "Strong entity for identification",
                        "Nothing",
                        "Other weak entities",
                        "Views only"
                      ],
                      "answer": "Strong entity for identification",
                      "topic": "Weak Entities"
                    },
                    {
                      "id": "4cs405_u1_q2",
                      "q": "3-Schema architecture provides:",
                      "options": [
                        "Data independence",
                        "Data redundancy",
                        "Data inconsistency",
                        "None"
                      ],
                      "answer": "Data independence",
                      "topic": "3-Schema"
                    },
                    {
                      "id": "4cs405_u1_q3",
                      "q": "What metric is primarily optimized by \"Weak Entities\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Weak Entities"
                    },
                    {
                      "id": "4cs405_u1_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Extended ER\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Extended ER"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Relational Model & SQL",
                  "topics": [
                    "Relational Algebra",
                    "SQL DDL/DML",
                    "Joins",
                    "Nested Queries & Views"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs405_u2_q1",
                      "q": "Natural Join combines tables based on:",
                      "options": [
                        "Common attribute names",
                        "Primary key only",
                        "Foreign key only",
                        "All columns"
                      ],
                      "answer": "Common attribute names",
                      "topic": "Joins"
                    },
                    {
                      "id": "4cs405_u2_q2",
                      "q": "A correlated subquery is executed:",
                      "options": [
                        "Once for each row of outer query",
                        "Once only",
                        "Never",
                        "Twice"
                      ],
                      "answer": "Once for each row of outer query",
                      "topic": "Subqueries"
                    },
                    {
                      "id": "4cs405_u2_q3",
                      "q": "What metric is primarily optimized by \"Joins\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Joins"
                    },
                    {
                      "id": "4cs405_u2_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Nested Queries & Views\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Nested Queries & Views"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Normalization",
                  "topics": [
                    "Functional Dependencies",
                    "1NF through BCNF",
                    "Lossless Decomposition",
                    "Dependency Preservation"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cs405_u3_q1",
                      "q": "BCNF requires every determinant to be a:",
                      "options": [
                        "Super key",
                        "Foreign key",
                        "Primary key only",
                        "Candidate key only"
                      ],
                      "answer": "Super key",
                      "topic": "BCNF"
                    },
                    {
                      "id": "4cs405_u3_q2",
                      "q": "A relation is in 3NF if it has no:",
                      "options": [
                        "Transitive dependency on non-prime attribute",
                        "Partial dependency",
                        "Both",
                        "Neither"
                      ],
                      "answer": "Transitive dependency on non-prime attribute",
                      "topic": "3NF"
                    },
                    {
                      "id": "4cs405_u3_q3",
                      "q": "What metric is primarily optimized by \"Lossless Decomposition\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Lossless Decomposition"
                    },
                    {
                      "id": "4cs405_u3_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Dependency Preservation\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Dependency Preservation"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Transactions & Concurrency",
                  "topics": [
                    "ACID Properties",
                    "Serializability",
                    "Two-Phase Locking",
                    "Deadlocks"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cs405_u4_q1",
                      "q": "ACID stands for:",
                      "options": [
                        "Atomicity, Consistency, Isolation, Durability",
                        "All Correct Input Data",
                        "Automated CI/CD",
                        "None"
                      ],
                      "answer": "Atomicity, Consistency, Isolation, Durability",
                      "topic": "ACID"
                    },
                    {
                      "id": "4cs405_u4_q2",
                      "q": "2PL has two phases:",
                      "options": [
                        "Growing (acquire) and Shrinking (release)",
                        "Read and Write",
                        "Lock and Unlock randomly",
                        "None"
                      ],
                      "answer": "Growing (acquire) and Shrinking (release)",
                      "topic": "2PL"
                    },
                    {
                      "id": "4cs405_u4_q3",
                      "q": "What metric is primarily optimized by \"Two-Phase Locking\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Two-Phase Locking"
                    },
                    {
                      "id": "4cs405_u4_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Deadlocks\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Deadlocks"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Indexing & Recovery",
                  "topics": [
                    "B-Trees & B+ Trees",
                    "Primary/Secondary Indexing",
                    "Log-Based Recovery",
                    "Checkpoints"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs405_u5_q1",
                      "q": "B+ Trees store data pointers only at:",
                      "options": [
                        "Leaf nodes",
                        "Root node",
                        "Internal nodes",
                        "All nodes"
                      ],
                      "answer": "Leaf nodes",
                      "topic": "B+ Trees"
                    },
                    {
                      "id": "4cs405_u5_q2",
                      "q": "Checkpoints reduce:",
                      "options": [
                        "Recovery time after crash",
                        "Storage space",
                        "Query time",
                        "Index size"
                      ],
                      "answer": "Recovery time after crash",
                      "topic": "Checkpoints"
                    },
                    {
                      "id": "4cs405_u5_q3",
                      "q": "What metric is primarily optimized by \"Log-Based Recovery\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Log-Based Recovery"
                    },
                    {
                      "id": "4cs405_u5_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Checkpoints\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Checkpoints"
                    }
                  ]
                }
              ]
            },
            {
              "code": "4CS4-06",
              "name": "Theory of Computation",
              "units": [
                {
                  "number": 1,
                  "title": "Finite Automata",
                  "topics": [
                    "DFA & NFA",
                    "NFA to DFA Conversion",
                    "DFA Minimization",
                    "Mealy & Moore Machines"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cs406_u1_q1",
                      "q": "DFA has exactly one transition for each:",
                      "options": [
                        "Input symbol from each state",
                        "Pair of states",
                        "Output",
                        "None"
                      ],
                      "answer": "Input symbol from each state",
                      "topic": "DFA"
                    },
                    {
                      "id": "4cs406_u1_q2",
                      "q": "NFA to DFA conversion uses:",
                      "options": [
                        "Subset construction",
                        "Minimization",
                        "Pumping lemma",
                        "Arden's theorem"
                      ],
                      "answer": "Subset construction",
                      "topic": "NFA to DFA"
                    },
                    {
                      "id": "4cs406_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"DFA Minimization\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "DFA Minimization"
                    },
                    {
                      "id": "4cs406_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Mealy & Moore Machines\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Mealy & Moore Machines"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Regular Expressions",
                  "topics": [
                    "RE to NFA (Thompson's)",
                    "DFA to RE (Arden's)",
                    "Pumping Lemma",
                    "Closure Properties"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs406_u2_q1",
                      "q": "Pumping lemma is used to prove a language is:",
                      "options": [
                        "NOT regular",
                        "Regular",
                        "Context-free",
                        "Recursive"
                      ],
                      "answer": "NOT regular",
                      "topic": "Pumping Lemma"
                    },
                    {
                      "id": "4cs406_u2_q2",
                      "q": "Arden's theorem converts:",
                      "options": [
                        "DFA/NFA to regular expression",
                        "RE to DFA",
                        "CFG to PDA",
                        "TM to RE"
                      ],
                      "answer": "DFA/NFA to regular expression",
                      "topic": "Arden's Theorem"
                    },
                    {
                      "id": "4cs406_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Pumping Lemma\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Pumping Lemma"
                    },
                    {
                      "id": "4cs406_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Closure Properties\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Closure Properties"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Context-Free Grammars",
                  "topics": [
                    "CFG & Derivation Trees",
                    "Ambiguity",
                    "CNF & GNF",
                    "Simplification"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs406_u3_q1",
                      "q": "A grammar is ambiguous if it has:",
                      "options": [
                        "More than one parse tree for some string",
                        "No parse tree",
                        "Only one parse tree",
                        "None"
                      ],
                      "answer": "More than one parse tree for some string",
                      "topic": "Ambiguity"
                    },
                    {
                      "id": "4cs406_u3_q2",
                      "q": "In CNF, every production is of form:",
                      "options": [
                        "AΓåÆBC or AΓåÆa",
                        "AΓåÆaB",
                        "AΓåÆ╬╡",
                        "AΓåÆABCD"
                      ],
                      "answer": "AΓåÆBC or AΓåÆa",
                      "topic": "CNF"
                    },
                    {
                      "id": "4cs406_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"CNF & GNF\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "CNF & GNF"
                    },
                    {
                      "id": "4cs406_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Simplification\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Simplification"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Pushdown Automata",
                  "topics": [
                    "PDA Definition",
                    "Acceptance (Empty Stack vs Final State)",
                    "DPDA vs NPDA",
                    "CFL Pumping Lemma"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cs406_u4_q1",
                      "q": "PDA uses which additional storage?",
                      "options": [
                        "Stack",
                        "Queue",
                        "Tape",
                        "Register"
                      ],
                      "answer": "Stack",
                      "topic": "PDA"
                    },
                    {
                      "id": "4cs406_u4_q2",
                      "q": "DPDA can accept:",
                      "options": [
                        "Subset of context-free languages",
                        "All CFLs",
                        "Regular only",
                        "RE languages"
                      ],
                      "answer": "Subset of context-free languages",
                      "topic": "DPDA"
                    },
                    {
                      "id": "4cs406_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"DPDA vs NPDA\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "DPDA vs NPDA"
                    },
                    {
                      "id": "4cs406_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"CFL Pumping Lemma\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "CFL Pumping Lemma"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Turing Machines",
                  "topics": [
                    "TM Model",
                    "Language Recognition",
                    "Halting Problem",
                    "Chomsky Hierarchy"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs406_u5_q1",
                      "q": "The Halting Problem is:",
                      "options": [
                        "Undecidable",
                        "Decidable",
                        "NP-Complete",
                        "Regular"
                      ],
                      "answer": "Undecidable",
                      "topic": "Halting Problem"
                    },
                    {
                      "id": "4cs406_u5_q2",
                      "q": "Chomsky hierarchy has how many levels?",
                      "options": [
                        "4 (Type 0-3)",
                        "3",
                        "5",
                        "2"
                      ],
                      "answer": "4 (Type 0-3)",
                      "topic": "Chomsky Hierarchy"
                    },
                    {
                      "id": "4cs406_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Halting Problem\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Halting Problem"
                    },
                    {
                      "id": "4cs406_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Chomsky Hierarchy\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Chomsky Hierarchy"
                    }
                  ]
                }
              ]
            },
            {
              "code": "4CS4-07",
              "name": "Computer Networks",
              "units": [
                {
                  "number": 1,
                  "title": "Physical Layer & Network Models",
                  "topics": [
                    "OSI vs TCP/IP",
                    "Transmission Media",
                    "Circuit vs Packet Switching",
                    "Network Topologies"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs407_u1_q1",
                      "q": "OSI model has how many layers?",
                      "options": [
                        "7",
                        "5",
                        "4",
                        "6"
                      ],
                      "answer": "7",
                      "topic": "OSI Model"
                    },
                    {
                      "id": "4cs407_u1_q2",
                      "q": "Packet switching is more efficient for:",
                      "options": [
                        "Bursty data traffic",
                        "Voice calls only",
                        "Constant bit rate",
                        "Analog signals"
                      ],
                      "answer": "Bursty data traffic",
                      "topic": "Switching"
                    },
                    {
                      "id": "4cs407_u1_q3",
                      "q": "What metric is primarily optimized by \"Circuit vs Packet Switching\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Circuit vs Packet Switching"
                    },
                    {
                      "id": "4cs407_u1_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Network Topologies\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Network Topologies"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Data Link Layer & MAC",
                  "topics": [
                    "CRC & Hamming Code",
                    "Stop-and-Wait, Go-Back-N",
                    "CSMA/CD & CSMA/CA",
                    "Sliding Window"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cs407_u2_q1",
                      "q": "CSMA/CD is used in:",
                      "options": [
                        "Ethernet (wired)",
                        "WiFi",
                        "Bluetooth",
                        "Satellite"
                      ],
                      "answer": "Ethernet (wired)",
                      "topic": "CSMA/CD"
                    },
                    {
                      "id": "4cs407_u2_q2",
                      "q": "CRC stands for:",
                      "options": [
                        "Cyclic Redundancy Check",
                        "Code Reduction Check",
                        "Circular Routing Control",
                        "None"
                      ],
                      "answer": "Cyclic Redundancy Check",
                      "topic": "CRC"
                    },
                    {
                      "id": "4cs407_u2_q3",
                      "q": "What metric is primarily optimized by \"CSMA/CD & CSMA/CA\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "CSMA/CD & CSMA/CA"
                    },
                    {
                      "id": "4cs407_u2_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Sliding Window\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Sliding Window"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Network Layer & IP",
                  "topics": [
                    "IPv4 Classful/CIDR",
                    "Subnetting & Supernetting",
                    "Routing (Dijkstra, Bellman-Ford)",
                    "ARP, ICMP, NAT, OSPF"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cs407_u3_q1",
                      "q": "CIDR notation /24 means subnet mask:",
                      "options": [
                        "255.255.255.0",
                        "255.255.0.0",
                        "255.0.0.0",
                        "255.255.255.128"
                      ],
                      "answer": "255.255.255.0",
                      "topic": "Subnetting"
                    },
                    {
                      "id": "4cs407_u3_q2",
                      "q": "Count-to-infinity is a problem in:",
                      "options": [
                        "Distance vector routing",
                        "Link state routing",
                        "Static routing",
                        "Default routing"
                      ],
                      "answer": "Distance vector routing",
                      "topic": "Routing"
                    },
                    {
                      "id": "4cs407_u3_q3",
                      "q": "What metric is primarily optimized by \"Routing (Dijkstra, Bellman-Ford)\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Routing (Dijkstra, Bellman-Ford)"
                    },
                    {
                      "id": "4cs407_u3_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"ARP, ICMP, NAT, OSPF\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "ARP, ICMP, NAT, OSPF"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Transport Layer",
                  "topics": [
                    "TCP vs UDP",
                    "3-Way Handshake",
                    "TCP Congestion Control",
                    "Flow Control"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs407_u4_q1",
                      "q": "TCP 3-way handshake uses flags:",
                      "options": [
                        "SYN, SYN-ACK, ACK",
                        "FIN, ACK, RST",
                        "PSH, URG, ACK",
                        "None"
                      ],
                      "answer": "SYN, SYN-ACK, ACK",
                      "topic": "TCP Handshake"
                    },
                    {
                      "id": "4cs407_u4_q2",
                      "q": "UDP is preferred for:",
                      "options": [
                        "Real-time streaming",
                        "File transfer",
                        "Email",
                        "Web browsing"
                      ],
                      "answer": "Real-time streaming",
                      "topic": "UDP"
                    },
                    {
                      "id": "4cs407_u4_q3",
                      "q": "What metric is primarily optimized by \"TCP Congestion Control\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "TCP Congestion Control"
                    },
                    {
                      "id": "4cs407_u4_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Flow Control\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Flow Control"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Application Layer & Security",
                  "topics": [
                    "DNS, HTTP/HTTPS, FTP",
                    "SMTP, POP3, IMAP",
                    "RSA Algorithm",
                    "Digital Signatures & Firewalls"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs407_u5_q1",
                      "q": "DNS resolves:",
                      "options": [
                        "Domain names to IP addresses",
                        "IP to MAC",
                        "MAC to IP",
                        "Port to process"
                      ],
                      "answer": "Domain names to IP addresses",
                      "topic": "DNS"
                    },
                    {
                      "id": "4cs407_u5_q2",
                      "q": "RSA is an example of:",
                      "options": [
                        "Asymmetric key cryptography",
                        "Symmetric key",
                        "Hash function",
                        "MAC algorithm"
                      ],
                      "answer": "Asymmetric key cryptography",
                      "topic": "RSA"
                    },
                    {
                      "id": "4cs407_u5_q3",
                      "q": "What metric is primarily optimized by \"RSA Algorithm\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "RSA Algorithm"
                    },
                    {
                      "id": "4cs407_u5_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Digital Signatures & Firewalls\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Digital Signatures & Firewalls"
                    }
                  ]
                }
              ]
            },
            {
              "code": "4CS3-04",
              "name": "Microprocessor & Interfaces (8085)",
              "units": [
                {
                  "number": 1,
                  "title": "8085 Architecture",
                  "topics": [
                    "Pin Diagram",
                    "Register Array",
                    "Flag Register",
                    "Multiplexed Bus & ALE"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cs304_u1_q1",
                      "q": "ALE in 8085 stands for:",
                      "options": [
                        "Address Latch Enable",
                        "Arithmetic Logic Enable",
                        "Auto Load Execute",
                        "None"
                      ],
                      "answer": "Address Latch Enable",
                      "topic": "ALE"
                    },
                    {
                      "id": "4cs304_u1_q2",
                      "q": "8085 has how many general purpose registers?",
                      "options": [
                        "6 (B,C,D,E,H,L)",
                        "8",
                        "4",
                        "2"
                      ],
                      "answer": "6 (B,C,D,E,H,L)",
                      "topic": "Registers"
                    },
                    {
                      "id": "4cs304_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Flag Register\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Flag Register"
                    },
                    {
                      "id": "4cs304_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Multiplexed Bus & ALE\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Multiplexed Bus & ALE"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Instruction Set & Addressing",
                  "topics": [
                    "Addressing Modes",
                    "Data Transfer Instructions",
                    "Arithmetic & Logical",
                    "Branching & Machine Control"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs304_u2_q1",
                      "q": "MVI A, 32H uses which addressing mode?",
                      "options": [
                        "Immediate",
                        "Direct",
                        "Register",
                        "Register Indirect"
                      ],
                      "answer": "Immediate",
                      "topic": "Addressing Modes"
                    },
                    {
                      "id": "4cs304_u2_q2",
                      "q": "MOV A, M uses:",
                      "options": [
                        "Register indirect addressing",
                        "Immediate",
                        "Direct",
                        "Implicit"
                      ],
                      "answer": "Register indirect addressing",
                      "topic": "Addressing Modes"
                    },
                    {
                      "id": "4cs304_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Arithmetic & Logical\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Arithmetic & Logical"
                    },
                    {
                      "id": "4cs304_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Branching & Machine Control\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Branching & Machine Control"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Bus Timing & Instruction Cycles",
                  "topics": [
                    "Machine Cycles",
                    "T-States",
                    "Opcode Fetch Timing",
                    "STA Timing Diagram"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs304_u3_q1",
                      "q": "Opcode fetch cycle requires minimum:",
                      "options": [
                        "4 T-states",
                        "2 T-states",
                        "6 T-states",
                        "1 T-state"
                      ],
                      "answer": "4 T-states",
                      "topic": "T-States"
                    },
                    {
                      "id": "4cs304_u3_q2",
                      "q": "8085 operates at clock frequency of:",
                      "options": [
                        "3 MHz (typical)",
                        "1 GHz",
                        "10 MHz",
                        "100 kHz"
                      ],
                      "answer": "3 MHz (typical)",
                      "topic": "Clock"
                    },
                    {
                      "id": "4cs304_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Opcode Fetch Timing\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Opcode Fetch Timing"
                    },
                    {
                      "id": "4cs304_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"STA Timing Diagram\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "STA Timing Diagram"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Memory & I/O Interfacing",
                  "topics": [
                    "Memory Mapped vs I/O Mapped",
                    "Address Decoding",
                    "EPROM & RAM Interfacing",
                    "74LS138 Decoder"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cs304_u4_q1",
                      "q": "Memory mapped I/O treats I/O ports as:",
                      "options": [
                        "Memory locations",
                        "Special registers",
                        "Stack addresses",
                        "None"
                      ],
                      "answer": "Memory locations",
                      "topic": "Memory Mapped I/O"
                    },
                    {
                      "id": "4cs304_u4_q2",
                      "q": "74LS138 is a:",
                      "options": [
                        "3-to-8 decoder",
                        "8-to-3 encoder",
                        "4-to-1 MUX",
                        "Flip-flop"
                      ],
                      "answer": "3-to-8 decoder",
                      "topic": "Decoder"
                    },
                    {
                      "id": "4cs304_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"EPROM & RAM Interfacing\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "EPROM & RAM Interfacing"
                    },
                    {
                      "id": "4cs304_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"74LS138 Decoder\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "74LS138 Decoder"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Interrupts & Peripherals",
                  "topics": [
                    "Hardware Interrupts (TRAP, RST 7.5/6.5/5.5)",
                    "SIM & RIM Instructions",
                    "8255 PPI",
                    "8259 PIC"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cs304_u5_q1",
                      "q": "TRAP interrupt in 8085 is:",
                      "options": [
                        "Non-maskable, edge & level triggered",
                        "Maskable",
                        "Software only",
                        "Lowest priority"
                      ],
                      "answer": "Non-maskable, edge & level triggered",
                      "topic": "TRAP"
                    },
                    {
                      "id": "4cs304_u5_q2",
                      "q": "8255 PPI has how many ports?",
                      "options": [
                        "3 (Port A, B, C)",
                        "2",
                        "4",
                        "1"
                      ],
                      "answer": "3 (Port A, B, C)",
                      "topic": "8255 PPI"
                    },
                    {
                      "id": "4cs304_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"8255 PPI\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "8255 PPI"
                    },
                    {
                      "id": "4cs304_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"8259 PIC\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "8259 PIC"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 5,
          "year": 3,
          "subjects": [
            {
              "code": "5CS4-03",
              "name": "Operating Systems",
              "units": [
                {
                  "number": 1,
                  "title": "OS Introduction & System Structures",
                  "topics": [
                    "OS Functions",
                    "Multi-programming",
                    "Dual-Mode Operation",
                    "System Calls, Monolithic vs Microkernel"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cs403_u1_q1",
                      "q": "Dual-mode operation provides:",
                      "options": [
                        "Protection between user and kernel",
                        "Faster processing",
                        "More memory",
                        "Better graphics"
                      ],
                      "answer": "Protection between user and kernel",
                      "topic": "Dual-Mode"
                    },
                    {
                      "id": "5cs403_u1_q2",
                      "q": "Microkernel runs minimal services in:",
                      "options": [
                        "Kernel space",
                        "User space",
                        "Both equally",
                        "Neither"
                      ],
                      "answer": "Kernel space",
                      "topic": "Microkernel"
                    },
                    {
                      "id": "5cs403_u1_q3",
                      "q": "What metric is primarily optimized by \"Dual-Mode Operation\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Dual-Mode Operation"
                    },
                    {
                      "id": "5cs403_u1_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"System Calls, Monolithic vs Microkernel\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "System Calls, Monolithic vs Microkernel"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Process Management & Synchronization",
                  "topics": [
                    "PCB & Context Switching",
                    "Critical Section",
                    "Semaphores",
                    "Producer-Consumer, Readers-Writers"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cs403_u2_q1",
                      "q": "Critical section requires:",
                      "options": [
                        "Mutual exclusion, progress, bounded waiting",
                        "Only mutual exclusion",
                        "Only progress",
                        "None"
                      ],
                      "answer": "Mutual exclusion, progress, bounded waiting",
                      "topic": "Critical Section"
                    },
                    {
                      "id": "5cs403_u2_q2",
                      "q": "A binary semaphore can have values:",
                      "options": [
                        "0 or 1",
                        "Any integer",
                        "Only positive",
                        "Only negative"
                      ],
                      "answer": "0 or 1",
                      "topic": "Semaphores"
                    },
                    {
                      "id": "5cs403_u2_q3",
                      "q": "What metric is primarily optimized by \"Semaphores\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Semaphores"
                    },
                    {
                      "id": "5cs403_u2_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Producer-Consumer, Readers-Writers\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Producer-Consumer, Readers-Writers"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "CPU Scheduling & Deadlocks",
                  "topics": [
                    "FCFS, SJF, Round Robin",
                    "Banker's Algorithm",
                    "Resource Allocation Graph",
                    "Deadlock Conditions"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "5cs403_u3_q1",
                      "q": "Four necessary conditions for deadlock include:",
                      "options": [
                        "Mutual exclusion, hold-wait, no preemption, circular wait",
                        "Only mutual exclusion",
                        "Only circular wait",
                        "None"
                      ],
                      "answer": "Mutual exclusion, hold-wait, no preemption, circular wait",
                      "topic": "Deadlock"
                    },
                    {
                      "id": "5cs403_u3_q2",
                      "q": "Banker's algorithm is used for:",
                      "options": [
                        "Deadlock avoidance",
                        "Deadlock detection",
                        "Deadlock prevention",
                        "Deadlock recovery"
                      ],
                      "answer": "Deadlock avoidance",
                      "topic": "Banker's Algorithm"
                    },
                    {
                      "id": "5cs403_u3_q3",
                      "q": "What metric is primarily optimized by \"Resource Allocation Graph\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Resource Allocation Graph"
                    },
                    {
                      "id": "5cs403_u3_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Deadlock Conditions\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Deadlock Conditions"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Memory Management & Virtual Memory",
                  "topics": [
                    "Paging & Page Table",
                    "TLB",
                    "Page Replacement (FIFO, LRU, Optimal)",
                    "Thrashing"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "5cs403_u4_q1",
                      "q": "Thrashing occurs when:",
                      "options": [
                        "System spends more time paging than executing",
                        "CPU is idle",
                        "Memory is full",
                        "Disk fails"
                      ],
                      "answer": "System spends more time paging than executing",
                      "topic": "Thrashing"
                    },
                    {
                      "id": "5cs403_u4_q2",
                      "q": "Optimal page replacement replaces the page:",
                      "options": [
                        "Not used for longest time in future",
                        "Least recently used",
                        "First loaded",
                        "Most recently used"
                      ],
                      "answer": "Not used for longest time in future",
                      "topic": "Optimal Replacement"
                    },
                    {
                      "id": "5cs403_u4_q3",
                      "q": "What metric is primarily optimized by \"Page Replacement (FIFO, LRU, Optimal)\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Page Replacement (FIFO, LRU, Optimal)"
                    },
                    {
                      "id": "5cs403_u4_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Thrashing\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Thrashing"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Storage & Disk Scheduling",
                  "topics": [
                    "File Allocation Methods",
                    "Disk Scheduling (FCFS, SSTF, SCAN, C-SCAN)",
                    "Inode Structure",
                    "RAID Levels"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cs403_u5_q1",
                      "q": "SCAN disk scheduling is also called:",
                      "options": [
                        "Elevator algorithm",
                        "Round Robin",
                        "FIFO",
                        "Priority"
                      ],
                      "answer": "Elevator algorithm",
                      "topic": "SCAN"
                    },
                    {
                      "id": "5cs403_u5_q2",
                      "q": "Indexed file allocation uses:",
                      "options": [
                        "Index block with pointers to data blocks",
                        "Contiguous blocks",
                        "Linked list",
                        "None"
                      ],
                      "answer": "Index block with pointers to data blocks",
                      "topic": "File Allocation"
                    },
                    {
                      "id": "5cs403_u5_q3",
                      "q": "What metric is primarily optimized by \"Inode Structure\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Inode Structure"
                    },
                    {
                      "id": "5cs403_u5_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"RAID Levels\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "RAID Levels"
                    }
                  ]
                }
              ]
            },
            {
              "code": "5CS4-02",
              "name": "Compiler Design",
              "units": [
                {
                  "number": 1,
                  "title": "Compilers & Lexical Analysis",
                  "topics": [
                    "6 Phases of Compiler",
                    "Tokens, Patterns, Lexemes",
                    "Input Buffering",
                    "LEX Tool"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cs402_u1_q1",
                      "q": "The first phase of a compiler is:",
                      "options": [
                        "Lexical Analysis",
                        "Syntax Analysis",
                        "Semantic Analysis",
                        "Code Generation"
                      ],
                      "answer": "Lexical Analysis",
                      "topic": "Compiler Phases"
                    },
                    {
                      "id": "5cs402_u1_q2",
                      "q": "A lexeme is:",
                      "options": [
                        "Actual character sequence matching a pattern",
                        "Token category",
                        "Parse tree node",
                        "Symbol table entry"
                      ],
                      "answer": "Actual character sequence matching a pattern",
                      "topic": "Lexemes"
                    },
                    {
                      "id": "5cs402_u1_q3",
                      "q": "What metric is primarily optimized by \"Input Buffering\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Input Buffering"
                    },
                    {
                      "id": "5cs402_u1_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"LEX Tool\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "LEX Tool"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Syntax Analysis (Parsing)",
                  "topics": [
                    "Top-Down (Recursive Descent, LL(1))",
                    "FIRST & FOLLOW Sets",
                    "Bottom-Up (SLR(1), LALR(1))",
                    "Shift-Reduce Parsing"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "5cs402_u2_q1",
                      "q": "LL(1) parser reads input:",
                      "options": [
                        "Left to right, leftmost derivation, 1 lookahead",
                        "Right to left",
                        "Bottom up",
                        "None"
                      ],
                      "answer": "Left to right, leftmost derivation, 1 lookahead",
                      "topic": "LL(1)"
                    },
                    {
                      "id": "5cs402_u2_q2",
                      "q": "FIRST set of a non-terminal includes:",
                      "options": [
                        "Set of terminals that begin strings derivable from it",
                        "All non-terminals",
                        "Empty set only",
                        "Follow set"
                      ],
                      "answer": "Set of terminals that begin strings derivable from it",
                      "topic": "FIRST Set"
                    },
                    {
                      "id": "5cs402_u2_q3",
                      "q": "What metric is primarily optimized by \"Bottom-Up (SLR(1), LALR(1))\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Bottom-Up (SLR(1), LALR(1))"
                    },
                    {
                      "id": "5cs402_u2_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Shift-Reduce Parsing\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Shift-Reduce Parsing"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "SDT & Intermediate Code",
                  "topics": [
                    "Syntax-Directed Definitions",
                    "Synthesized/Inherited Attributes",
                    "Three-Address Code",
                    "Backpatching"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cs402_u3_q1",
                      "q": "Synthesized attributes are computed:",
                      "options": [
                        "Bottom-up (from children)",
                        "Top-down (from parent)",
                        "Left to right",
                        "Right to left"
                      ],
                      "answer": "Bottom-up (from children)",
                      "topic": "Attributes"
                    },
                    {
                      "id": "5cs402_u3_q2",
                      "q": "Three-address code uses at most:",
                      "options": [
                        "Three addresses per instruction",
                        "One address",
                        "Unlimited",
                        "Two"
                      ],
                      "answer": "Three addresses per instruction",
                      "topic": "TAC"
                    },
                    {
                      "id": "5cs402_u3_q3",
                      "q": "What metric is primarily optimized by \"Three-Address Code\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Three-Address Code"
                    },
                    {
                      "id": "5cs402_u3_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Backpatching\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Backpatching"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Symbol Table & Runtime",
                  "topics": [
                    "Symbol Table Structures",
                    "Activation Records",
                    "Parameter Passing",
                    "Runtime Storage"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "5cs402_u4_q1",
                      "q": "Activation record stores:",
                      "options": [
                        "Local variables, return address, parameters",
                        "Only global variables",
                        "File pointers",
                        "Network data"
                      ],
                      "answer": "Local variables, return address, parameters",
                      "topic": "Activation Records"
                    },
                    {
                      "id": "5cs402_u4_q2",
                      "q": "Symbol table is used during:",
                      "options": [
                        "All phases of compilation",
                        "Only lexical analysis",
                        "Only code generation",
                        "Only parsing"
                      ],
                      "answer": "All phases of compilation",
                      "topic": "Symbol Table"
                    },
                    {
                      "id": "5cs402_u4_q3",
                      "q": "What metric is primarily optimized by \"Parameter Passing\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Parameter Passing"
                    },
                    {
                      "id": "5cs402_u4_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Runtime Storage\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Runtime Storage"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Code Optimization & Generation",
                  "topics": [
                    "Basic Blocks & Flow Graphs",
                    "Loop Optimization",
                    "Strength Reduction",
                    "Register Allocation"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cs402_u5_q1",
                      "q": "Constant folding evaluates:",
                      "options": [
                        "Constant expressions at compile time",
                        "Variables at runtime",
                        "Functions at link time",
                        "None"
                      ],
                      "answer": "Constant expressions at compile time",
                      "topic": "Constant Folding"
                    },
                    {
                      "id": "5cs402_u5_q2",
                      "q": "Strength reduction replaces:",
                      "options": [
                        "Expensive operations with cheaper ones",
                        "Cheap with expensive",
                        "All multiplications",
                        "None"
                      ],
                      "answer": "Expensive operations with cheaper ones",
                      "topic": "Strength Reduction"
                    },
                    {
                      "id": "5cs402_u5_q3",
                      "q": "What metric is primarily optimized by \"Strength Reduction\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Strength Reduction"
                    },
                    {
                      "id": "5cs402_u5_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Register Allocation\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Register Allocation"
                    }
                  ]
                }
              ]
            },
            {
              "code": "5CS4-05",
              "name": "Analysis of Algorithms (DAA)",
              "units": [
                {
                  "number": 1,
                  "title": "Analysis & Divide-and-Conquer",
                  "topics": [
                    "Asymptotic Notations",
                    "Master's Theorem",
                    "Merge Sort, Quick Sort",
                    "Strassen's Matrix Multiplication"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cs405_u1_q1",
                      "q": "Master's Theorem applies to recurrences of form:",
                      "options": [
                        "T(n) = aT(n/b) + f(n)",
                        "T(n) = T(n-1) + 1",
                        "T(n) = 2^n",
                        "None"
                      ],
                      "answer": "T(n) = aT(n/b) + f(n)",
                      "topic": "Master's Theorem"
                    },
                    {
                      "id": "5cs405_u1_q2",
                      "q": "Strassen's reduces matrix multiplication complexity to:",
                      "options": [
                        "O(n^2.81)",
                        "O(n┬│)",
                        "O(n┬▓)",
                        "O(n log n)"
                      ],
                      "answer": "O(n^2.81)",
                      "topic": "Strassen's"
                    },
                    {
                      "id": "5cs405_u1_q3",
                      "q": "When implementing \"Merge Sort, Quick Sort\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Merge Sort, Quick Sort"
                    },
                    {
                      "id": "5cs405_u1_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Strassen's Matrix Multiplication\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Strassen's Matrix Multiplication"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Greedy Method",
                  "topics": [
                    "Fractional Knapsack",
                    "Job Sequencing",
                    "Huffman Coding",
                    "Prim's & Kruskal's MST"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cs405_u2_q1",
                      "q": "Fractional knapsack uses:",
                      "options": [
                        "Greedy by value/weight ratio",
                        "Dynamic programming",
                        "Backtracking",
                        "Brute force"
                      ],
                      "answer": "Greedy by value/weight ratio",
                      "topic": "Knapsack"
                    },
                    {
                      "id": "5cs405_u2_q2",
                      "q": "Huffman coding produces:",
                      "options": [
                        "Prefix-free optimal code",
                        "Fixed-length code",
                        "Non-optimal code",
                        "Binary tree only"
                      ],
                      "answer": "Prefix-free optimal code",
                      "topic": "Huffman"
                    },
                    {
                      "id": "5cs405_u2_q3",
                      "q": "When implementing \"Huffman Coding\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Huffman Coding"
                    },
                    {
                      "id": "5cs405_u2_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Prim's & Kruskal's MST\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Prim's & Kruskal's MST"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Dynamic Programming",
                  "topics": [
                    "0/1 Knapsack",
                    "Matrix Chain Multiplication",
                    "LCS",
                    "Floyd-Warshall"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "5cs405_u3_q1",
                      "q": "0/1 Knapsack differs from fractional because:",
                      "options": [
                        "Items cannot be broken",
                        "Items can be broken",
                        "No weight limit",
                        "No value"
                      ],
                      "answer": "Items cannot be broken",
                      "topic": "0/1 Knapsack"
                    },
                    {
                      "id": "5cs405_u3_q2",
                      "q": "Floyd-Warshall finds:",
                      "options": [
                        "All-pairs shortest paths",
                        "Single source shortest path",
                        "MST",
                        "Maximum flow"
                      ],
                      "answer": "All-pairs shortest paths",
                      "topic": "Floyd-Warshall"
                    },
                    {
                      "id": "5cs405_u3_q3",
                      "q": "When implementing \"LCS\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "LCS"
                    },
                    {
                      "id": "5cs405_u3_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Floyd-Warshall\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Floyd-Warshall"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Backtracking & Branch-and-Bound",
                  "topics": [
                    "N-Queens",
                    "Sum of Subsets",
                    "Graph Coloring",
                    "15-Puzzle"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cs405_u4_q1",
                      "q": "N-Queens problem places N queens on:",
                      "options": [
                        "N├ùN board with no attacks",
                        "N├ùN board anywhere",
                        "1├ùN board",
                        "N├ù1 board"
                      ],
                      "answer": "N├ùN board with no attacks",
                      "topic": "N-Queens"
                    },
                    {
                      "id": "5cs405_u4_q2",
                      "q": "Branch-and-Bound uses:",
                      "options": [
                        "Bounding function to prune search space",
                        "Only DFS",
                        "Only BFS",
                        "No pruning"
                      ],
                      "answer": "Bounding function to prune search space",
                      "topic": "B&B"
                    },
                    {
                      "id": "5cs405_u4_q3",
                      "q": "When implementing \"Graph Coloring\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Graph Coloring"
                    },
                    {
                      "id": "5cs405_u4_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"15-Puzzle\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "15-Puzzle"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "NP-Completeness",
                  "topics": [
                    "P, NP, NP-Hard, NP-Complete",
                    "Cook's Theorem",
                    "Polynomial Reductions",
                    "Approximation Algorithms"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "5cs405_u5_q1",
                      "q": "P = NP question asks if:",
                      "options": [
                        "Every NP problem can be solved in polynomial time",
                        "P is empty",
                        "NP is empty",
                        "All problems are unsolvable"
                      ],
                      "answer": "Every NP problem can be solved in polynomial time",
                      "topic": "P vs NP"
                    },
                    {
                      "id": "5cs405_u5_q2",
                      "q": "Cook's theorem proves SAT is:",
                      "options": [
                        "NP-Complete",
                        "P",
                        "Undecidable",
                        "Regular"
                      ],
                      "answer": "NP-Complete",
                      "topic": "Cook's Theorem"
                    },
                    {
                      "id": "5cs405_u5_q3",
                      "q": "When implementing \"Polynomial Reductions\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Polynomial Reductions"
                    },
                    {
                      "id": "5cs405_u5_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Approximation Algorithms\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Approximation Algorithms"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 6,
          "year": 3,
          "subjects": [
            {
              "code": "6CS4-02",
              "name": "Machine Learning",
              "units": [
                {
                  "number": 1,
                  "title": "Foundations & Supervised Pipeline",
                  "topics": [
                    "Bias-Variance Tradeoff",
                    "Cross-Validation",
                    "L1/L2 Regularization",
                    "Confusion Matrix, ROC-AUC"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cs402_u1_q1",
                      "q": "L1 regularization (Lasso) produces:",
                      "options": [
                        "Sparse models (feature selection)",
                        "Dense models",
                        "No change",
                        "Increased overfitting"
                      ],
                      "answer": "Sparse models (feature selection)",
                      "topic": "L1 Regularization"
                    },
                    {
                      "id": "6cs402_u1_q2",
                      "q": "High bias indicates:",
                      "options": [
                        "Underfitting",
                        "Overfitting",
                        "Perfect fit",
                        "No training"
                      ],
                      "answer": "Underfitting",
                      "topic": "Bias-Variance"
                    },
                    {
                      "id": "6cs402_u1_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"L1/L2 Regularization\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "L1/L2 Regularization"
                    },
                    {
                      "id": "6cs402_u1_q4",
                      "q": "When analyzing \"Confusion Matrix, ROC-AUC\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Confusion Matrix, ROC-AUC"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Linear Models & Decision Trees",
                  "topics": [
                    "Linear/Logistic Regression",
                    "Naive Bayes",
                    "Decision Trees (ID3, CART)",
                    "Information Gain & Entropy"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cs402_u2_q1",
                      "q": "Information Gain is based on:",
                      "options": [
                        "Entropy reduction",
                        "Gini increase",
                        "Variance",
                        "Mean"
                      ],
                      "answer": "Entropy reduction",
                      "topic": "Information Gain"
                    },
                    {
                      "id": "6cs402_u2_q2",
                      "q": "Logistic Regression outputs:",
                      "options": [
                        "Probability between 0 and 1",
                        "Any real number",
                        "Integer only",
                        "Complex number"
                      ],
                      "answer": "Probability between 0 and 1",
                      "topic": "Logistic Regression"
                    },
                    {
                      "id": "6cs402_u2_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Decision Trees (ID3, CART)\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Decision Trees (ID3, CART)"
                    },
                    {
                      "id": "6cs402_u2_q4",
                      "q": "When analyzing \"Information Gain & Entropy\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Information Gain & Entropy"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "SVM & Ensemble Learning",
                  "topics": [
                    "SVM Max Margin",
                    "Kernel Trick (RBF, Polynomial)",
                    "Random Forests",
                    "AdaBoost"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cs402_u3_q1",
                      "q": "Kernel trick maps data to:",
                      "options": [
                        "Higher dimensional feature space",
                        "Lower dimensions",
                        "Same space",
                        "Binary space"
                      ],
                      "answer": "Higher dimensional feature space",
                      "topic": "Kernel Trick"
                    },
                    {
                      "id": "6cs402_u3_q2",
                      "q": "Random Forest reduces:",
                      "options": [
                        "Variance through bagging",
                        "Bias",
                        "Both equally",
                        "Neither"
                      ],
                      "answer": "Variance through bagging",
                      "topic": "Random Forest"
                    },
                    {
                      "id": "6cs402_u3_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Random Forests\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Random Forests"
                    },
                    {
                      "id": "6cs402_u3_q4",
                      "q": "When analyzing \"AdaBoost\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "AdaBoost"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Unsupervised & Dimensionality Reduction",
                  "topics": [
                    "K-Means (K-Means++)",
                    "DBSCAN",
                    "Hierarchical Clustering",
                    "PCA"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cs402_u4_q1",
                      "q": "K-Means++ improves initial centroid selection by:",
                      "options": [
                        "Spreading centroids far apart",
                        "Random selection",
                        "Using all points",
                        "Using first K points"
                      ],
                      "answer": "Spreading centroids far apart",
                      "topic": "K-Means++"
                    },
                    {
                      "id": "6cs402_u4_q2",
                      "q": "PCA finds directions of:",
                      "options": [
                        "Maximum variance",
                        "Minimum variance",
                        "Zero variance",
                        "Random variance"
                      ],
                      "answer": "Maximum variance",
                      "topic": "PCA"
                    },
                    {
                      "id": "6cs402_u4_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Hierarchical Clustering\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Hierarchical Clustering"
                    },
                    {
                      "id": "6cs402_u4_q4",
                      "q": "When analyzing \"PCA\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "PCA"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Neural Networks & Optimization",
                  "topics": [
                    "Perceptron & MLP",
                    "Backpropagation",
                    "Activation Functions",
                    "SGD & Adam Optimizer"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cs402_u5_q1",
                      "q": "Vanishing gradient problem is worst with:",
                      "options": [
                        "Sigmoid activation in deep networks",
                        "ReLU",
                        "Linear",
                        "None"
                      ],
                      "answer": "Sigmoid activation in deep networks",
                      "topic": "Vanishing Gradient"
                    },
                    {
                      "id": "6cs402_u5_q2",
                      "q": "Adam optimizer combines:",
                      "options": [
                        "Momentum and RMSprop",
                        "Only SGD",
                        "Only momentum",
                        "None"
                      ],
                      "answer": "Momentum and RMSprop",
                      "topic": "Adam"
                    },
                    {
                      "id": "6cs402_u5_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Activation Functions\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Activation Functions"
                    },
                    {
                      "id": "6cs402_u5_q4",
                      "q": "When analyzing \"SGD & Adam Optimizer\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "SGD & Adam Optimizer"
                    }
                  ]
                }
              ]
            },
            {
              "code": "6CS4-05",
              "name": "Artificial Intelligence",
              "units": [
                {
                  "number": 1,
                  "title": "AI Intro & Intelligent Agents",
                  "topics": [
                    "Turing Test",
                    "PEAS Specification",
                    "Agent Architectures",
                    "Environment Types"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cs405_u1_q1",
                      "q": "PEAS stands for:",
                      "options": [
                        "Performance, Environment, Actuators, Sensors",
                        "Program, Execute, Analyze, Store",
                        "None",
                        "Plan, Evaluate, Act, Sense"
                      ],
                      "answer": "Performance, Environment, Actuators, Sensors",
                      "topic": "PEAS"
                    },
                    {
                      "id": "6cs405_u1_q2",
                      "q": "A utility-based agent selects actions that:",
                      "options": [
                        "Maximize expected utility",
                        "Follow fixed rules",
                        "Random actions",
                        "Minimize cost only"
                      ],
                      "answer": "Maximize expected utility",
                      "topic": "Agents"
                    },
                    {
                      "id": "6cs405_u1_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Agent Architectures\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Agent Architectures"
                    },
                    {
                      "id": "6cs405_u1_q4",
                      "q": "When analyzing \"Environment Types\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Environment Types"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Search Algorithms",
                  "topics": [
                    "BFS, DFS, IDS, UCS",
                    "A* Algorithm",
                    "Heuristic Admissibility",
                    "AO* Algorithm"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cs405_u2_q1",
                      "q": "A* is optimal when heuristic is:",
                      "options": [
                        "Admissible (never overestimates)",
                        "Inadmissible",
                        "Zero",
                        "Infinite"
                      ],
                      "answer": "Admissible (never overestimates)",
                      "topic": "A*"
                    },
                    {
                      "id": "6cs405_u2_q2",
                      "q": "Iterative Deepening Search combines advantages of:",
                      "options": [
                        "BFS (completeness) and DFS (space)",
                        "Only BFS",
                        "Only DFS",
                        "None"
                      ],
                      "answer": "BFS (completeness) and DFS (space)",
                      "topic": "IDS"
                    },
                    {
                      "id": "6cs405_u2_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Heuristic Admissibility\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Heuristic Admissibility"
                    },
                    {
                      "id": "6cs405_u2_q4",
                      "q": "When analyzing \"AO* Algorithm\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "AO* Algorithm"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Adversarial Search & CSP",
                  "topics": [
                    "Minimax",
                    "Alpha-Beta Pruning",
                    "Constraint Satisfaction",
                    "Arc Consistency"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cs405_u3_q1",
                      "q": "Alpha-Beta pruning reduces Minimax time complexity from:",
                      "options": [
                        "O(b^d) to O(b^(d/2))",
                        "No reduction",
                        "O(n┬▓) to O(n)",
                        "O(2^n) to O(n)"
                      ],
                      "answer": "O(b^d) to O(b^(d/2))",
                      "topic": "Alpha-Beta"
                    },
                    {
                      "id": "6cs405_u3_q2",
                      "q": "CSP consists of:",
                      "options": [
                        "Variables, domains, constraints",
                        "Only variables",
                        "Only constraints",
                        "Functions only"
                      ],
                      "answer": "Variables, domains, constraints",
                      "topic": "CSP"
                    },
                    {
                      "id": "6cs405_u3_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Constraint Satisfaction\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Constraint Satisfaction"
                    },
                    {
                      "id": "6cs405_u3_q4",
                      "q": "When analyzing \"Arc Consistency\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Arc Consistency"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Knowledge Representation & FOPL",
                  "topics": [
                    "Propositional Logic",
                    "First-Order Logic",
                    "Unification & MGU",
                    "Resolution Refutation"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cs405_u4_q1",
                      "q": "Resolution refutation proves a statement by:",
                      "options": [
                        "Assuming negation and deriving contradiction",
                        "Direct proof",
                        "Induction",
                        "None"
                      ],
                      "answer": "Assuming negation and deriving contradiction",
                      "topic": "Resolution"
                    },
                    {
                      "id": "6cs405_u4_q2",
                      "q": "Most General Unifier (MGU) is:",
                      "options": [
                        "Most general substitution making two terms identical",
                        "Any substitution",
                        "Empty substitution",
                        "None"
                      ],
                      "answer": "Most general substitution making two terms identical",
                      "topic": "MGU"
                    },
                    {
                      "id": "6cs405_u4_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Unification & MGU\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Unification & MGU"
                    },
                    {
                      "id": "6cs405_u4_q4",
                      "q": "When analyzing \"Resolution Refutation\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Resolution Refutation"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Probabilistic Reasoning",
                  "topics": [
                    "Bayesian Belief Networks",
                    "Variable Elimination",
                    "Expert Systems",
                    "MYCIN"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cs405_u5_q1",
                      "q": "Bayesian Network represents:",
                      "options": [
                        "Conditional dependencies among random variables",
                        "Only independent variables",
                        "Deterministic relations",
                        "None"
                      ],
                      "answer": "Conditional dependencies among random variables",
                      "topic": "BBN"
                    },
                    {
                      "id": "6cs405_u5_q2",
                      "q": "MYCIN is an expert system for:",
                      "options": [
                        "Medical diagnosis",
                        "Weather prediction",
                        "Stock trading",
                        "Game playing"
                      ],
                      "answer": "Medical diagnosis",
                      "topic": "MYCIN"
                    },
                    {
                      "id": "6cs405_u5_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Expert Systems\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Expert Systems"
                    },
                    {
                      "id": "6cs405_u5_q4",
                      "q": "When analyzing \"MYCIN\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "MYCIN"
                    }
                  ]
                }
              ]
            },
            {
              "code": "6CS4-06",
              "name": "Cloud Computing",
              "units": [
                {
                  "number": 1,
                  "title": "Cloud Fundamentals",
                  "topics": [
                    "NIST Definition",
                    "Essential Characteristics",
                    "Deployment Models",
                    "Benefits & Challenges"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cs406_u1_q1",
                      "q": "NIST defines how many essential characteristics of cloud?",
                      "options": [
                        "5",
                        "3",
                        "7",
                        "10"
                      ],
                      "answer": "5",
                      "topic": "NIST"
                    },
                    {
                      "id": "6cs406_u1_q2",
                      "q": "Hybrid cloud combines:",
                      "options": [
                        "Public and private clouds",
                        "Only public",
                        "Only private",
                        "None"
                      ],
                      "answer": "Public and private clouds",
                      "topic": "Deployment Models"
                    },
                    {
                      "id": "6cs406_u1_q3",
                      "q": "What metric is primarily optimized by \"Deployment Models\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Deployment Models"
                    },
                    {
                      "id": "6cs406_u1_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Benefits & Challenges\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Benefits & Challenges"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Service Models",
                  "topics": [
                    "IaaS, PaaS, SaaS",
                    "Multi-tenancy",
                    "Data Center Infrastructure",
                    "XaaS"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cs406_u2_q1",
                      "q": "In IaaS, customer manages:",
                      "options": [
                        "OS, applications, data",
                        "Only hardware",
                        "Nothing",
                        "Only network"
                      ],
                      "answer": "OS, applications, data",
                      "topic": "IaaS"
                    },
                    {
                      "id": "6cs406_u2_q2",
                      "q": "Multi-tenancy means:",
                      "options": [
                        "Multiple users share same infrastructure",
                        "Single user per server",
                        "No sharing",
                        "Physical separation"
                      ],
                      "answer": "Multiple users share same infrastructure",
                      "topic": "Multi-tenancy"
                    },
                    {
                      "id": "6cs406_u2_q3",
                      "q": "What metric is primarily optimized by \"Data Center Infrastructure\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Data Center Infrastructure"
                    },
                    {
                      "id": "6cs406_u2_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"XaaS\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "XaaS"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Virtualization",
                  "topics": [
                    "Type-1/Type-2 Hypervisors",
                    "Full/Para-Virtualization",
                    "Docker Containers vs VMs",
                    "OS-Level Virtualization"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cs406_u3_q1",
                      "q": "Type-1 hypervisor runs on:",
                      "options": [
                        "Bare metal (directly on hardware)",
                        "Host OS",
                        "Application layer",
                        "None"
                      ],
                      "answer": "Bare metal (directly on hardware)",
                      "topic": "Hypervisors"
                    },
                    {
                      "id": "6cs406_u3_q2",
                      "q": "Docker containers are lighter than VMs because:",
                      "options": [
                        "They share host OS kernel",
                        "They have their own OS",
                        "They use more RAM",
                        "None"
                      ],
                      "answer": "They share host OS kernel",
                      "topic": "Docker"
                    },
                    {
                      "id": "6cs406_u3_q3",
                      "q": "What metric is primarily optimized by \"Docker Containers vs VMs\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Docker Containers vs VMs"
                    },
                    {
                      "id": "6cs406_u3_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"OS-Level Virtualization\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "OS-Level Virtualization"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Cloud Storage & MapReduce",
                  "topics": [
                    "HDFS Architecture",
                    "MapReduce Model",
                    "GFS",
                    "Amazon S3"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cs406_u4_q1",
                      "q": "In HDFS, NameNode stores:",
                      "options": [
                        "Metadata (file system namespace)",
                        "Actual data blocks",
                        "Application code",
                        "User credentials"
                      ],
                      "answer": "Metadata (file system namespace)",
                      "topic": "HDFS"
                    },
                    {
                      "id": "6cs406_u4_q2",
                      "q": "MapReduce Reduce phase:",
                      "options": [
                        "Aggregates intermediate key-value pairs",
                        "Splits input",
                        "Maps functions",
                        "None"
                      ],
                      "answer": "Aggregates intermediate key-value pairs",
                      "topic": "MapReduce"
                    },
                    {
                      "id": "6cs406_u4_q3",
                      "q": "What metric is primarily optimized by \"GFS\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "GFS"
                    },
                    {
                      "id": "6cs406_u4_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Amazon S3\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Amazon S3"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Cloud Security & SLAs",
                  "topics": [
                    "Shared Responsibility",
                    "IAM",
                    "SLA Parameters",
                    "Disaster Recovery"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cs406_u5_q1",
                      "q": "Shared Responsibility Model means:",
                      "options": [
                        "Cloud provider and customer share security duties",
                        "Only provider is responsible",
                        "Only customer",
                        "Government handles it"
                      ],
                      "answer": "Cloud provider and customer share security duties",
                      "topic": "Shared Responsibility"
                    },
                    {
                      "id": "6cs406_u5_q2",
                      "q": "SLA specifies:",
                      "options": [
                        "Service availability, performance guarantees, penalties",
                        "Only pricing",
                        "Only features",
                        "None"
                      ],
                      "answer": "Service availability, performance guarantees, penalties",
                      "topic": "SLA"
                    },
                    {
                      "id": "6cs406_u5_q3",
                      "q": "What metric is primarily optimized by \"SLA Parameters\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "SLA Parameters"
                    },
                    {
                      "id": "6cs406_u5_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Disaster Recovery\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Disaster Recovery"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 7,
          "year": 4,
          "subjects": [
            {
              "code": "7CS4-01",
              "name": "Internet of Things (IoT)",
              "units": [
                {
                  "number": 1,
                  "title": "IoT Fundamentals",
                  "topics": [
                    "IoT Architecture",
                    "Communication Models",
                    "Functional Blocks",
                    "Deployment Levels"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cs401_u1_q1",
                      "q": "Publish-Subscribe model in IoT uses:",
                      "options": [
                        "Message broker between publishers and subscribers",
                        "Direct connection",
                        "No intermediary",
                        "None"
                      ],
                      "answer": "Message broker between publishers and subscribers",
                      "topic": "Pub-Sub"
                    },
                    {
                      "id": "7cs401_u1_q2",
                      "q": "IoT has how many standard deployment levels?",
                      "options": [
                        "6",
                        "3",
                        "4",
                        "10"
                      ],
                      "answer": "6",
                      "topic": "Deployment"
                    },
                    {
                      "id": "7cs401_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Functional Blocks\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Functional Blocks"
                    },
                    {
                      "id": "7cs401_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Deployment Levels\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Deployment Levels"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "IoT Protocols",
                  "topics": [
                    "MQTT & CoAP",
                    "ZigBee, BLE, LoRaWAN",
                    "6LoWPAN",
                    "REST HTTP"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "7cs401_u2_q1",
                      "q": "MQTT uses which transport protocol?",
                      "options": [
                        "TCP",
                        "UDP",
                        "SCTP",
                        "None"
                      ],
                      "answer": "TCP",
                      "topic": "MQTT"
                    },
                    {
                      "id": "7cs401_u2_q2",
                      "q": "CoAP is designed for:",
                      "options": [
                        "Constrained devices and networks",
                        "High-performance servers",
                        "Desktop apps",
                        "None"
                      ],
                      "answer": "Constrained devices and networks",
                      "topic": "CoAP"
                    },
                    {
                      "id": "7cs401_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"6LoWPAN\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "6LoWPAN"
                    },
                    {
                      "id": "7cs401_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"REST HTTP\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "REST HTTP"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "IoT Hardware",
                  "topics": [
                    "Arduino vs Raspberry Pi",
                    "Sensor Interfacing",
                    "GPIO Programming",
                    "Actuator Control"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cs401_u3_q1",
                      "q": "Raspberry Pi runs:",
                      "options": [
                        "Full Linux OS",
                        "Only firmware",
                        "No OS",
                        "Windows only"
                      ],
                      "answer": "Full Linux OS",
                      "topic": "Raspberry Pi"
                    },
                    {
                      "id": "7cs401_u3_q2",
                      "q": "DHT11 sensor measures:",
                      "options": [
                        "Temperature and humidity",
                        "Pressure only",
                        "Light only",
                        "Sound"
                      ],
                      "answer": "Temperature and humidity",
                      "topic": "Sensors"
                    },
                    {
                      "id": "7cs401_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"GPIO Programming\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "GPIO Programming"
                    },
                    {
                      "id": "7cs401_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Actuator Control\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Actuator Control"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "IoT Cloud Integration",
                  "topics": [
                    "ThingSpeak",
                    "AWS IoT Core",
                    "Edge vs Fog Computing",
                    "Real-Time Dashboards"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cs401_u4_q1",
                      "q": "Edge computing processes data:",
                      "options": [
                        "Near the data source",
                        "In central cloud only",
                        "On user's phone",
                        "None"
                      ],
                      "answer": "Near the data source",
                      "topic": "Edge Computing"
                    },
                    {
                      "id": "7cs401_u4_q2",
                      "q": "ThingSpeak is used for:",
                      "options": [
                        "IoT data visualization and analytics",
                        "Social media",
                        "E-commerce",
                        "Gaming"
                      ],
                      "answer": "IoT data visualization and analytics",
                      "topic": "ThingSpeak"
                    },
                    {
                      "id": "7cs401_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Edge vs Fog Computing\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Edge vs Fog Computing"
                    },
                    {
                      "id": "7cs401_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Real-Time Dashboards\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Real-Time Dashboards"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "IoT Applications & Security",
                  "topics": [
                    "Smart Home",
                    "Smart Agriculture",
                    "IIoT",
                    "Security Challenges"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "7cs401_u5_q1",
                      "q": "IIoT stands for:",
                      "options": [
                        "Industrial Internet of Things",
                        "International IoT",
                        "Internal IoT",
                        "Integrated IoT"
                      ],
                      "answer": "Industrial Internet of Things",
                      "topic": "IIoT"
                    },
                    {
                      "id": "7cs401_u5_q2",
                      "q": "Major IoT security concern is:",
                      "options": [
                        "Resource-constrained devices lack encryption",
                        "Too much processing power",
                        "Unlimited bandwidth",
                        "None"
                      ],
                      "answer": "Resource-constrained devices lack encryption",
                      "topic": "IoT Security"
                    },
                    {
                      "id": "7cs401_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"IIoT\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "IIoT"
                    },
                    {
                      "id": "7cs401_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Security Challenges\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Security Challenges"
                    }
                  ]
                }
              ]
            },
            {
              "code": "7CS5-11",
              "name": "Big Data Analytics",
              "units": [
                {
                  "number": 1,
                  "title": "Big Data Fundamentals",
                  "topics": [
                    "5 V's of Big Data",
                    "Analytics Lifecycle",
                    "Hadoop Ecosystem",
                    "Big Data vs Traditional DW"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cs511_u1_q1",
                      "q": "The 5 V's of Big Data are:",
                      "options": [
                        "Volume, Velocity, Variety, Veracity, Value",
                        "Only Volume and Velocity",
                        "3 V's",
                        "None"
                      ],
                      "answer": "Volume, Velocity, Variety, Veracity, Value",
                      "topic": "5 V's"
                    },
                    {
                      "id": "7cs511_u1_q2",
                      "q": "Hadoop is primarily designed for:",
                      "options": [
                        "Distributed batch processing of large datasets",
                        "Real-time gaming",
                        "Desktop applications",
                        "None"
                      ],
                      "answer": "Distributed batch processing of large datasets",
                      "topic": "Hadoop"
                    },
                    {
                      "id": "7cs511_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Hadoop Ecosystem\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Hadoop Ecosystem"
                    },
                    {
                      "id": "7cs511_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Big Data vs Traditional DW\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Big Data vs Traditional DW"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "HDFS & MapReduce",
                  "topics": [
                    "HDFS Architecture",
                    "YARN",
                    "MapReduce Execution",
                    "Speculative Execution"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "7cs511_u2_q1",
                      "q": "YARN stands for:",
                      "options": [
                        "Yet Another Resource Negotiator",
                        "Your Application Resource Network",
                        "None",
                        "Young Automated Runner Node"
                      ],
                      "answer": "Yet Another Resource Negotiator",
                      "topic": "YARN"
                    },
                    {
                      "id": "7cs511_u2_q2",
                      "q": "Default HDFS block size is:",
                      "options": [
                        "128 MB",
                        "64 KB",
                        "1 GB",
                        "4 KB"
                      ],
                      "answer": "128 MB",
                      "topic": "HDFS Blocks"
                    },
                    {
                      "id": "7cs511_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"MapReduce Execution\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "MapReduce Execution"
                    },
                    {
                      "id": "7cs511_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Speculative Execution\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Speculative Execution"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Apache Spark",
                  "topics": [
                    "RDD Transformations vs Actions",
                    "Spark SQL & DataFrames",
                    "Lazy Evaluation",
                    "Lineage & Fault Tolerance"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "7cs511_u3_q1",
                      "q": "RDD in Spark stands for:",
                      "options": [
                        "Resilient Distributed Dataset",
                        "Remote Data Distribution",
                        "Rapid Data Delivery",
                        "None"
                      ],
                      "answer": "Resilient Distributed Dataset",
                      "topic": "RDD"
                    },
                    {
                      "id": "7cs511_u3_q2",
                      "q": "Spark is faster than MapReduce because:",
                      "options": [
                        "In-memory processing",
                        "Better disk I/O",
                        "Simpler code",
                        "None"
                      ],
                      "answer": "In-memory processing",
                      "topic": "Spark Performance"
                    },
                    {
                      "id": "7cs511_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Lazy Evaluation\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Lazy Evaluation"
                    },
                    {
                      "id": "7cs511_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Lineage & Fault Tolerance\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Lineage & Fault Tolerance"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "NoSQL & Streaming",
                  "topics": [
                    "CAP Theorem",
                    "MongoDB, HBase, Redis, Neo4j",
                    "Apache Kafka",
                    "Sqoop"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cs511_u4_q1",
                      "q": "CAP theorem states a distributed system can guarantee:",
                      "options": [
                        "At most 2 of 3: Consistency, Availability, Partition tolerance",
                        "All 3 always",
                        "Only 1",
                        "None"
                      ],
                      "answer": "At most 2 of 3: Consistency, Availability, Partition tolerance",
                      "topic": "CAP"
                    },
                    {
                      "id": "7cs511_u4_q2",
                      "q": "Apache Kafka is used for:",
                      "options": [
                        "Real-time stream processing",
                        "Batch processing only",
                        "Desktop apps",
                        "None"
                      ],
                      "answer": "Real-time stream processing",
                      "topic": "Kafka"
                    },
                    {
                      "id": "7cs511_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Apache Kafka\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Apache Kafka"
                    },
                    {
                      "id": "7cs511_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Sqoop\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Sqoop"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Big Data ML & Hive",
                  "topics": [
                    "Spark MLlib",
                    "Collaborative Filtering",
                    "Apache Hive",
                    "HiveQL"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cs511_u5_q1",
                      "q": "Hive converts HiveQL queries to:",
                      "options": [
                        "MapReduce/Spark jobs",
                        "Direct SQL execution",
                        "C++ code",
                        "None"
                      ],
                      "answer": "MapReduce/Spark jobs",
                      "topic": "Hive"
                    },
                    {
                      "id": "7cs511_u5_q2",
                      "q": "Collaborative filtering recommends based on:",
                      "options": [
                        "Similar users' preferences",
                        "Content features only",
                        "Random selection",
                        "None"
                      ],
                      "answer": "Similar users' preferences",
                      "topic": "Collaborative Filtering"
                    },
                    {
                      "id": "7cs511_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Apache Hive\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Apache Hive"
                    },
                    {
                      "id": "7cs511_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"HiveQL\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "HiveQL"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 8,
          "year": 4,
          "subjects": [
            {
              "code": "8CS5-11",
              "name": "Blockchain Technology",
              "units": [
                {
                  "number": 1,
                  "title": "Cryptographic Primitives & Architecture",
                  "topics": [
                    "SHA-256",
                    "Merkle Trees",
                    "ECDSA",
                    "Block Structure"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "8cs511_u1_q1",
                      "q": "Merkle root provides:",
                      "options": [
                        "Integrity verification for all transactions in a block",
                        "Encryption",
                        "Routing",
                        "None"
                      ],
                      "answer": "Integrity verification for all transactions in a block",
                      "topic": "Merkle Trees"
                    },
                    {
                      "id": "8cs511_u1_q2",
                      "q": "SHA-256 produces output of:",
                      "options": [
                        "256 bits",
                        "128 bits",
                        "512 bits",
                        "64 bits"
                      ],
                      "answer": "256 bits",
                      "topic": "SHA-256"
                    },
                    {
                      "id": "8cs511_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"ECDSA\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "ECDSA"
                    },
                    {
                      "id": "8cs511_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Block Structure\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Block Structure"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Consensus Mechanisms",
                  "topics": [
                    "Proof of Work",
                    "Proof of Stake",
                    "PBFT",
                    "Byzantine Generals"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "8cs511_u2_q1",
                      "q": "Proof of Work requires miners to:",
                      "options": [
                        "Find a nonce producing hash below target",
                        "Vote on blocks",
                        "Stake tokens",
                        "None"
                      ],
                      "answer": "Find a nonce producing hash below target",
                      "topic": "PoW"
                    },
                    {
                      "id": "8cs511_u2_q2",
                      "q": "PoS selects validators based on:",
                      "options": [
                        "Amount of staked cryptocurrency",
                        "Computing power",
                        "Random",
                        "Age only"
                      ],
                      "answer": "Amount of staked cryptocurrency",
                      "topic": "PoS"
                    },
                    {
                      "id": "8cs511_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"PBFT\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "PBFT"
                    },
                    {
                      "id": "8cs511_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Byzantine Generals\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Byzantine Generals"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Ethereum & Smart Contracts",
                  "topics": [
                    "EVM & Gas",
                    "Solidity Basics",
                    "Reentrancy Attack",
                    "Smart Contract Security"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "8cs511_u3_q1",
                      "q": "Gas in Ethereum prevents:",
                      "options": [
                        "Infinite loops and DoS attacks",
                        "Data storage",
                        "Network connectivity",
                        "None"
                      ],
                      "answer": "Infinite loops and DoS attacks",
                      "topic": "Gas"
                    },
                    {
                      "id": "8cs511_u3_q2",
                      "q": "Reentrancy attack exploits:",
                      "options": [
                        "External calls before state updates",
                        "Gas limits",
                        "Block size",
                        "None"
                      ],
                      "answer": "External calls before state updates",
                      "topic": "Reentrancy"
                    },
                    {
                      "id": "8cs511_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Reentrancy Attack\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Reentrancy Attack"
                    },
                    {
                      "id": "8cs511_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Smart Contract Security\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Smart Contract Security"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Hyperledger Fabric",
                  "topics": [
                    "Permissioned vs Permissionless",
                    "Peers & Orderers",
                    "Channels & Chaincode",
                    "MSP"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "8cs511_u4_q1",
                      "q": "Hyperledger Fabric is a:",
                      "options": [
                        "Permissioned blockchain framework",
                        "Public blockchain",
                        "Cryptocurrency",
                        "None"
                      ],
                      "answer": "Permissioned blockchain framework",
                      "topic": "Hyperledger"
                    },
                    {
                      "id": "8cs511_u4_q2",
                      "q": "Chaincode in Hyperledger is equivalent to:",
                      "options": [
                        "Smart contracts",
                        "Mining algorithms",
                        "Consensus protocols",
                        "None"
                      ],
                      "answer": "Smart contracts",
                      "topic": "Chaincode"
                    },
                    {
                      "id": "8cs511_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Channels & Chaincode\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Channels & Chaincode"
                    },
                    {
                      "id": "8cs511_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"MSP\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "MSP"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Applications & Scaling",
                  "topics": [
                    "DeFi & NFTs",
                    "Supply Chain",
                    "Scalability Trilemma",
                    "Layer-2 Solutions"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "8cs511_u5_q1",
                      "q": "Blockchain scalability trilemma involves:",
                      "options": [
                        "Decentralization, security, scalability",
                        "Speed, cost, size",
                        "None",
                        "Only speed and cost"
                      ],
                      "answer": "Decentralization, security, scalability",
                      "topic": "Trilemma"
                    },
                    {
                      "id": "8cs511_u5_q2",
                      "q": "Layer-2 solutions include:",
                      "options": [
                        "Rollups and Lightning Network",
                        "Changing consensus",
                        "Increasing block size",
                        "None"
                      ],
                      "answer": "Rollups and Lightning Network",
                      "topic": "Layer-2"
                    },
                    {
                      "id": "8cs511_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Scalability Trilemma\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Scalability Trilemma"
                    },
                    {
                      "id": "8cs511_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Layer-2 Solutions\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Layer-2 Solutions"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "branch_id": "ai",
      "branch_name": "Artificial Intelligence (AI)",
      "icon": "Brain",
      "semesters": [
        {
          "semester": 1,
          "year": 1,
          "subjects": []
        },
        {
          "semester": 3,
          "year": 2,
          "subjects": [
            {
              "code": "3CAI2-01",
              "name": "Advanced Engg Math (Linear Algebra for AI)",
              "units": [
                {
                  "number": 1,
                  "title": "Linear Algebra & Matrix Decompositions",
                  "topics": [
                    "Eigenvalues/Eigenvectors",
                    "SVD",
                    "PCA",
                    "Rank-Nullity Theorem"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cai201_u1_q1",
                      "q": "SVD decomposes matrix A into:",
                      "options": [
                        "U╬úV^T",
                        "LU",
                        "QR",
                        "A┬▓"
                      ],
                      "answer": "U╬úV^T",
                      "topic": "SVD"
                    },
                    {
                      "id": "3cai201_u1_q2",
                      "q": "PCA finds directions of:",
                      "options": [
                        "Maximum variance",
                        "Minimum variance",
                        "Zero correlation",
                        "Random"
                      ],
                      "answer": "Maximum variance",
                      "topic": "PCA"
                    },
                    {
                      "id": "3cai201_u1_q3",
                      "q": "When applying theorem/formula for \"PCA\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "PCA"
                    },
                    {
                      "id": "3cai201_u1_q4",
                      "q": "What is the standard evaluation method for \"Rank-Nullity Theorem\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Rank-Nullity Theorem"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Gradient Optimization",
                  "topics": [
                    "Gradients & Jacobian",
                    "Hessian Matrix",
                    "Gradient Descent",
                    "Newton's Method"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cai201_u2_q1",
                      "q": "Hessian matrix contains:",
                      "options": [
                        "Second-order partial derivatives",
                        "First derivatives only",
                        "Integrals",
                        "Constants"
                      ],
                      "answer": "Second-order partial derivatives",
                      "topic": "Hessian"
                    },
                    {
                      "id": "3cai201_u2_q2",
                      "q": "Gradient descent moves in direction of:",
                      "options": [
                        "Negative gradient",
                        "Positive gradient",
                        "Random",
                        "Along contour"
                      ],
                      "answer": "Negative gradient",
                      "topic": "Gradient Descent"
                    },
                    {
                      "id": "3cai201_u2_q3",
                      "q": "When applying theorem/formula for \"Gradient Descent\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "Gradient Descent"
                    },
                    {
                      "id": "3cai201_u2_q4",
                      "q": "What is the standard evaluation method for \"Newton's Method\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Newton's Method"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Constrained Optimization",
                  "topics": [
                    "Lagrange Multipliers",
                    "KKT Conditions",
                    "SVM Optimization",
                    "Duality"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cai201_u3_q1",
                      "q": "KKT conditions generalize Lagrange multipliers for:",
                      "options": [
                        "Inequality constraints",
                        "Only equality",
                        "Unconstrained problems",
                        "None"
                      ],
                      "answer": "Inequality constraints",
                      "topic": "KKT"
                    },
                    {
                      "id": "3cai201_u3_q2",
                      "q": "Strong duality holds when:",
                      "options": [
                        "Primal and dual optimal values are equal",
                        "They differ",
                        "No feasible solution",
                        "None"
                      ],
                      "answer": "Primal and dual optimal values are equal",
                      "topic": "Duality"
                    },
                    {
                      "id": "3cai201_u3_q3",
                      "q": "When applying theorem/formula for \"SVM Optimization\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "SVM Optimization"
                    },
                    {
                      "id": "3cai201_u3_q4",
                      "q": "What is the standard evaluation method for \"Duality\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Duality"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Transform Calculus",
                  "topics": [
                    "Fourier Series",
                    "DFT & FFT",
                    "Convolution Theorem",
                    "Signal Processing"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cai201_u4_q1",
                      "q": "FFT reduces DFT complexity from O(N┬▓) to:",
                      "options": [
                        "O(N log N)",
                        "O(N)",
                        "O(log N)",
                        "O(N┬│)"
                      ],
                      "answer": "O(N log N)",
                      "topic": "FFT"
                    },
                    {
                      "id": "3cai201_u4_q2",
                      "q": "Convolution in time domain equals:",
                      "options": [
                        "Multiplication in frequency domain",
                        "Division",
                        "Addition",
                        "Subtraction"
                      ],
                      "answer": "Multiplication in frequency domain",
                      "topic": "Convolution"
                    },
                    {
                      "id": "3cai201_u4_q3",
                      "q": "When applying theorem/formula for \"Convolution Theorem\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "Convolution Theorem"
                    },
                    {
                      "id": "3cai201_u4_q4",
                      "q": "What is the standard evaluation method for \"Signal Processing\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Signal Processing"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Numerical Methods",
                  "topics": [
                    "Newton-Raphson",
                    "Gauss-Seidel",
                    "Simpson's Rule",
                    "Runge-Kutta (RK4)"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "3cai201_u5_q1",
                      "q": "Newton-Raphson has convergence order:",
                      "options": [
                        "Quadratic (p=2)",
                        "Linear (p=1)",
                        "Cubic (p=3)",
                        "None"
                      ],
                      "answer": "Quadratic (p=2)",
                      "topic": "Newton-Raphson"
                    },
                    {
                      "id": "3cai201_u5_q2",
                      "q": "RK4 method has order of accuracy:",
                      "options": [
                        "4th order",
                        "1st order",
                        "2nd order",
                        "6th order"
                      ],
                      "answer": "4th order",
                      "topic": "RK4"
                    },
                    {
                      "id": "3cai201_u5_q3",
                      "q": "When applying theorem/formula for \"Simpson's Rule\", what is the key prerequisite?",
                      "options": [
                        "Function must be piecewise continuous and bounded over the domain",
                        "Domain must be unbounded in all directions",
                        "No derivatives can exist",
                        "Variables must be purely imaginary"
                      ],
                      "answer": "Function must be piecewise continuous and bounded over the domain",
                      "topic": "Simpson's Rule"
                    },
                    {
                      "id": "3cai201_u5_q4",
                      "q": "What is the standard evaluation method for \"Runge-Kutta (RK4)\" in RTU Part B/C problems?",
                      "options": [
                        "Applying standard integral transforms and change of variables",
                        "Approximating by constant zero",
                        "Ignoring higher-order differential terms",
                        "Only graphic plotting"
                      ],
                      "answer": "Applying standard integral transforms and change of variables",
                      "topic": "Runge-Kutta (RK4)"
                    }
                  ]
                }
              ]
            },
            {
              "code": "3CAI4-05",
              "name": "Data Structures & Algorithms",
              "units": [
                {
                  "number": 1,
                  "title": "Stacks & Applications",
                  "topics": [
                    "Stack ADT",
                    "Infix to Postfix",
                    "Postfix Evaluation",
                    "Two Stacks in One Array"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cai405_u1_q1",
                      "q": "Time complexity of infix to postfix conversion is:",
                      "options": [
                        "O(N)",
                        "O(N┬▓)",
                        "O(N log N)",
                        "O(1)"
                      ],
                      "answer": "O(N)",
                      "topic": "Infix to Postfix"
                    },
                    {
                      "id": "3cai405_u1_q2",
                      "q": "OS uses which structure for recursive calls?",
                      "options": [
                        "Stack",
                        "Queue",
                        "Priority Queue",
                        "B+ Tree"
                      ],
                      "answer": "Stack",
                      "topic": "Recursion Stack"
                    },
                    {
                      "id": "3cai405_u1_q3",
                      "q": "When implementing \"Postfix Evaluation\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Postfix Evaluation"
                    },
                    {
                      "id": "3cai405_u1_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Two Stacks in One Array\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Two Stacks in One Array"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Queues & Linked Lists",
                  "topics": [
                    "Circular Queue",
                    "Priority Queue",
                    "Singly/Doubly/Circular LL",
                    "Polynomial Addition"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cai405_u2_q1",
                      "q": "Circular queue advantage over linear:",
                      "options": [
                        "Reuses freed space",
                        "Faster operations",
                        "Less memory",
                        "None"
                      ],
                      "answer": "Reuses freed space",
                      "topic": "Circular Queue"
                    },
                    {
                      "id": "3cai405_u2_q2",
                      "q": "Doubly linked list advantage:",
                      "options": [
                        "Traversal in both directions",
                        "Less memory",
                        "Faster search",
                        "Simpler code"
                      ],
                      "answer": "Traversal in both directions",
                      "topic": "Doubly LL"
                    },
                    {
                      "id": "3cai405_u2_q3",
                      "q": "When implementing \"Singly/Doubly/Circular LL\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Singly/Doubly/Circular LL"
                    },
                    {
                      "id": "3cai405_u2_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Polynomial Addition\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Polynomial Addition"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Searching & Sorting",
                  "topics": [
                    "Binary Search",
                    "Merge Sort, Quick Sort",
                    "Heap Sort, Radix Sort",
                    "Complexity Analysis"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cai405_u3_q1",
                      "q": "Quick Sort worst case occurs when:",
                      "options": [
                        "Already sorted array with bad pivot",
                        "Random array",
                        "Reversed array only",
                        "Never"
                      ],
                      "answer": "Already sorted array with bad pivot",
                      "topic": "Quick Sort"
                    },
                    {
                      "id": "3cai405_u3_q2",
                      "q": "Heap Sort uses:",
                      "options": [
                        "Max/Min heap data structure",
                        "Stack",
                        "Queue",
                        "Linked List"
                      ],
                      "answer": "Max/Min heap data structure",
                      "topic": "Heap Sort"
                    },
                    {
                      "id": "3cai405_u3_q3",
                      "q": "When implementing \"Heap Sort, Radix Sort\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Heap Sort, Radix Sort"
                    },
                    {
                      "id": "3cai405_u3_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Complexity Analysis\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Complexity Analysis"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Trees & AVL Trees",
                  "topics": [
                    "Binary Tree Traversals",
                    "BST Operations",
                    "AVL Rotations",
                    "B-Trees"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cai405_u4_q1",
                      "q": "AVL tree guarantees search time:",
                      "options": [
                        "O(log n)",
                        "O(n)",
                        "O(n┬▓)",
                        "O(1)"
                      ],
                      "answer": "O(log n)",
                      "topic": "AVL Trees"
                    },
                    {
                      "id": "3cai405_u4_q2",
                      "q": "LR rotation in AVL is:",
                      "options": [
                        "Left rotation on child, then right on node",
                        "Right then left",
                        "Only left",
                        "Only right"
                      ],
                      "answer": "Left rotation on child, then right on node",
                      "topic": "AVL Rotations"
                    },
                    {
                      "id": "3cai405_u4_q3",
                      "q": "When implementing \"AVL Rotations\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "AVL Rotations"
                    },
                    {
                      "id": "3cai405_u4_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"B-Trees\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "B-Trees"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Graphs & Hashing",
                  "topics": [
                    "BFS, DFS",
                    "Dijkstra's",
                    "Prim's & Kruskal's MST",
                    "Hash Collision Resolution"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cai405_u5_q1",
                      "q": "Kruskal's algorithm uses:",
                      "options": [
                        "Disjoint Set Union (Union-Find)",
                        "Stack",
                        "Queue",
                        "Hash table"
                      ],
                      "answer": "Disjoint Set Union (Union-Find)",
                      "topic": "Kruskal's"
                    },
                    {
                      "id": "3cai405_u5_q2",
                      "q": "Chaining resolves hash collisions using:",
                      "options": [
                        "Linked lists at each bucket",
                        "Open addressing",
                        "Rehashing",
                        "None"
                      ],
                      "answer": "Linked lists at each bucket",
                      "topic": "Chaining"
                    },
                    {
                      "id": "3cai405_u5_q3",
                      "q": "When implementing \"Prim's & Kruskal's MST\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Prim's & Kruskal's MST"
                    },
                    {
                      "id": "3cai405_u5_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Hash Collision Resolution\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Hash Collision Resolution"
                    }
                  ]
                }
              ]
            },
            {
              "code": "3CAI4-07",
              "name": "Python Programming for AI & Data Science",
              "units": [
                {
                  "number": 1,
                  "title": "Python Fundamentals",
                  "topics": [
                    "Lists, Tuples, Dicts, Sets",
                    "Comprehensions & Generators",
                    "Lambda, map, filter",
                    "Decorators"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cai407_u1_q1",
                      "q": "A Python generator uses:",
                      "options": [
                        "yield keyword",
                        "return keyword",
                        "print",
                        "import"
                      ],
                      "answer": "yield keyword",
                      "topic": "Generators"
                    },
                    {
                      "id": "3cai407_u1_q2",
                      "q": "Dictionary comprehension syntax is:",
                      "options": [
                        "{k:v for k,v in iterable}",
                        "[k:v for k,v]",
                        "(k,v for k,v)",
                        "None"
                      ],
                      "answer": "{k:v for k,v in iterable}",
                      "topic": "Comprehensions"
                    },
                    {
                      "id": "3cai407_u1_q3",
                      "q": "When implementing \"Lambda, map, filter\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Lambda, map, filter"
                    },
                    {
                      "id": "3cai407_u1_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Decorators\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Decorators"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "NumPy & Scientific Computing",
                  "topics": [
                    "ndarray & Broadcasting",
                    "Vectorized Operations",
                    "Linear Algebra (linalg)",
                    "Batch Operations"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cai407_u2_q1",
                      "q": "NumPy broadcasting allows operations on arrays with:",
                      "options": [
                        "Different but compatible shapes",
                        "Only same shapes",
                        "Only scalars",
                        "None"
                      ],
                      "answer": "Different but compatible shapes",
                      "topic": "Broadcasting"
                    },
                    {
                      "id": "3cai407_u2_q2",
                      "q": "Vectorization in NumPy is faster because:",
                      "options": [
                        "Avoids Python loops, uses optimized C",
                        "Uses more RAM",
                        "Compiles to assembly",
                        "None"
                      ],
                      "answer": "Avoids Python loops, uses optimized C",
                      "topic": "Vectorization"
                    },
                    {
                      "id": "3cai407_u2_q3",
                      "q": "When implementing \"Linear Algebra (linalg)\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Linear Algebra (linalg)"
                    },
                    {
                      "id": "3cai407_u2_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Batch Operations\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Batch Operations"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Pandas Data Manipulation",
                  "topics": [
                    "Series & DataFrame",
                    "loc/iloc Indexing",
                    "Missing Data (isna, fillna)",
                    "groupby & agg"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "3cai407_u3_q1",
                      "q": "df.loc[] uses:",
                      "options": [
                        "Label-based indexing",
                        "Integer-based indexing",
                        "Random access",
                        "None"
                      ],
                      "answer": "Label-based indexing",
                      "topic": "loc/iloc"
                    },
                    {
                      "id": "3cai407_u3_q2",
                      "q": "groupby() in Pandas is used for:",
                      "options": [
                        "Split-apply-combine operations",
                        "Sorting only",
                        "Filtering only",
                        "Merging"
                      ],
                      "answer": "Split-apply-combine operations",
                      "topic": "groupby"
                    },
                    {
                      "id": "3cai407_u3_q3",
                      "q": "When implementing \"Missing Data (isna, fillna)\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Missing Data (isna, fillna)"
                    },
                    {
                      "id": "3cai407_u3_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"groupby & agg\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "groupby & agg"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Visualization & EDA",
                  "topics": [
                    "Matplotlib & Seaborn",
                    "Heatmaps & Pairplots",
                    "Outlier Detection (IQR, Z-score)",
                    "Correlation Analysis"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cai407_u4_q1",
                      "q": "Box plot displays:",
                      "options": [
                        "Five-number summary (min, Q1, median, Q3, max)",
                        "Mean only",
                        "Mode only",
                        "Standard deviation"
                      ],
                      "answer": "Five-number summary (min, Q1, median, Q3, max)",
                      "topic": "Box Plot"
                    },
                    {
                      "id": "3cai407_u4_q2",
                      "q": "Correlation heatmap shows:",
                      "options": [
                        "Pairwise correlation between features",
                        "Time series",
                        "Distributions",
                        "None"
                      ],
                      "answer": "Pairwise correlation between features",
                      "topic": "Heatmap"
                    },
                    {
                      "id": "3cai407_u4_q3",
                      "q": "When implementing \"Outlier Detection (IQR, Z-score)\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Outlier Detection (IQR, Z-score)"
                    },
                    {
                      "id": "3cai407_u4_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Correlation Analysis\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Correlation Analysis"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Scikit-Learn Pipeline",
                  "topics": [
                    "fit/transform API",
                    "train_test_split",
                    "StandardScaler",
                    "Pipeline & ColumnTransformer"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "3cai407_u5_q1",
                      "q": "fit_transform() does:",
                      "options": [
                        "Fit on data then transform it",
                        "Only fit",
                        "Only transform",
                        "Neither"
                      ],
                      "answer": "Fit on data then transform it",
                      "topic": "fit_transform"
                    },
                    {
                      "id": "3cai407_u5_q2",
                      "q": "StandardScaler transforms features to have:",
                      "options": [
                        "Mean 0 and std 1",
                        "Mean 1 and std 0",
                        "Range [0,1]",
                        "Range [-1,1]"
                      ],
                      "answer": "Mean 0 and std 1",
                      "topic": "Scaling"
                    },
                    {
                      "id": "3cai407_u5_q3",
                      "q": "When implementing \"StandardScaler\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "StandardScaler"
                    },
                    {
                      "id": "3cai407_u5_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Pipeline & ColumnTransformer\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Pipeline & ColumnTransformer"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 4,
          "year": 2,
          "subjects": [
            {
              "code": "4CAI4-07",
              "name": "Probability & Statistics for AI",
              "units": [
                {
                  "number": 1,
                  "title": "Probability & Random Variables",
                  "topics": [
                    "Bayes' Theorem",
                    "PMF, PDF, CDF",
                    "Joint & Marginal Distributions",
                    "Conditional Probability"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cai407_u1_q1",
                      "q": "Bayes' theorem computes:",
                      "options": [
                        "Posterior probability from prior and likelihood",
                        "Only prior",
                        "Only likelihood",
                        "None"
                      ],
                      "answer": "Posterior probability from prior and likelihood",
                      "topic": "Bayes"
                    },
                    {
                      "id": "4cai407_u1_q2",
                      "q": "CDF is always:",
                      "options": [
                        "Non-decreasing",
                        "Decreasing",
                        "Constant",
                        "Oscillating"
                      ],
                      "answer": "Non-decreasing",
                      "topic": "CDF"
                    },
                    {
                      "id": "4cai407_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Joint & Marginal Distributions\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Joint & Marginal Distributions"
                    },
                    {
                      "id": "4cai407_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Conditional Probability\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Conditional Probability"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Standard Distributions",
                  "topics": [
                    "Binomial, Poisson",
                    "Normal (Gaussian)",
                    "Central Limit Theorem",
                    "Chi-Square, Student's t"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cai407_u2_q1",
                      "q": "Central Limit Theorem states sample means approach:",
                      "options": [
                        "Normal distribution as n increases",
                        "Uniform distribution",
                        "Poisson",
                        "Exponential"
                      ],
                      "answer": "Normal distribution as n increases",
                      "topic": "CLT"
                    },
                    {
                      "id": "4cai407_u2_q2",
                      "q": "68-95-99.7 rule applies to:",
                      "options": [
                        "Normal distribution",
                        "Poisson",
                        "Binomial",
                        "Uniform"
                      ],
                      "answer": "Normal distribution",
                      "topic": "Empirical Rule"
                    },
                    {
                      "id": "4cai407_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Central Limit Theorem\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Central Limit Theorem"
                    },
                    {
                      "id": "4cai407_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Chi-Square, Student's t\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Chi-Square, Student's t"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Descriptive Statistics & Moments",
                  "topics": [
                    "Central Tendency & Dispersion",
                    "Skewness & Kurtosis",
                    "Moment Generating Functions",
                    "Sampling Distributions"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cai407_u3_q1",
                      "q": "Positive skewness means:",
                      "options": [
                        "Right tail is longer",
                        "Left tail is longer",
                        "Symmetric",
                        "No tail"
                      ],
                      "answer": "Right tail is longer",
                      "topic": "Skewness"
                    },
                    {
                      "id": "4cai407_u3_q2",
                      "q": "MGF uniquely determines:",
                      "options": [
                        "The probability distribution",
                        "Only the mean",
                        "Only variance",
                        "Nothing"
                      ],
                      "answer": "The probability distribution",
                      "topic": "MGF"
                    },
                    {
                      "id": "4cai407_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Moment Generating Functions\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Moment Generating Functions"
                    },
                    {
                      "id": "4cai407_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Sampling Distributions\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Sampling Distributions"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Estimation & Hypothesis Testing",
                  "topics": [
                    "MLE",
                    "Z-test, t-test",
                    "Type-I/II Errors",
                    "ANOVA"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "4cai407_u4_q1",
                      "q": "Type-I error is:",
                      "options": [
                        "Rejecting true null hypothesis",
                        "Accepting false null",
                        "Neither",
                        "Both"
                      ],
                      "answer": "Rejecting true null hypothesis",
                      "topic": "Type-I Error"
                    },
                    {
                      "id": "4cai407_u4_q2",
                      "q": "MLE finds parameters that:",
                      "options": [
                        "Maximize likelihood of observed data",
                        "Minimize likelihood",
                        "Average parameters",
                        "None"
                      ],
                      "answer": "Maximize likelihood of observed data",
                      "topic": "MLE"
                    },
                    {
                      "id": "4cai407_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Type-I/II Errors\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Type-I/II Errors"
                    },
                    {
                      "id": "4cai407_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"ANOVA\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "ANOVA"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Correlation & Regression",
                  "topics": [
                    "Pearson & Spearman Correlation",
                    "Linear Regression (Least Squares)",
                    "R┬▓ & Adjusted R┬▓",
                    "F-test"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "4cai407_u5_q1",
                      "q": "R┬▓ value of 0.95 means:",
                      "options": [
                        "95% variance is explained by the model",
                        "5% accuracy",
                        "95% error",
                        "None"
                      ],
                      "answer": "95% variance is explained by the model",
                      "topic": "R┬▓"
                    },
                    {
                      "id": "4cai407_u5_q2",
                      "q": "Spearman correlation uses:",
                      "options": [
                        "Ranks instead of actual values",
                        "Only actual values",
                        "Frequencies",
                        "None"
                      ],
                      "answer": "Ranks instead of actual values",
                      "topic": "Spearman"
                    },
                    {
                      "id": "4cai407_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"R┬▓ & Adjusted R┬▓\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "R┬▓ & Adjusted R┬▓"
                    },
                    {
                      "id": "4cai407_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"F-test\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "F-test"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 5,
          "year": 3,
          "subjects": [
            {
              "code": "5CAI4-04",
              "name": "Principles of AI & Knowledge Representation",
              "units": [
                {
                  "number": 1,
                  "title": "AI Intro & Intelligent Agents",
                  "topics": [
                    "Turing Test",
                    "PEAS Specification",
                    "Agent Architectures",
                    "Environment Types"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cai404_u1_q1",
                      "q": "A model-based reflex agent maintains:",
                      "options": [
                        "Internal state about the world",
                        "No state",
                        "Only rules",
                        "Only goals"
                      ],
                      "answer": "Internal state about the world",
                      "topic": "Agents"
                    },
                    {
                      "id": "5cai404_u1_q2",
                      "q": "Partially observable environment means:",
                      "options": [
                        "Agent cannot see full state",
                        "Agent sees everything",
                        "No sensors",
                        "None"
                      ],
                      "answer": "Agent cannot see full state",
                      "topic": "Environments"
                    },
                    {
                      "id": "5cai404_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Agent Architectures\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Agent Architectures"
                    },
                    {
                      "id": "5cai404_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Environment Types\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Environment Types"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Search Algorithms",
                  "topics": [
                    "BFS, DFS, IDS, UCS",
                    "A* Algorithm",
                    "Heuristic Admissibility",
                    "AO* Algorithm"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "5cai404_u2_q1",
                      "q": "A* guarantees optimal solution when heuristic is:",
                      "options": [
                        "Admissible and consistent",
                        "Inadmissible",
                        "Zero always",
                        "Infinite"
                      ],
                      "answer": "Admissible and consistent",
                      "topic": "A* Optimality"
                    },
                    {
                      "id": "5cai404_u2_q2",
                      "q": "UCS expands node with:",
                      "options": [
                        "Lowest path cost g(n)",
                        "Highest heuristic",
                        "Random",
                        "Deepest first"
                      ],
                      "answer": "Lowest path cost g(n)",
                      "topic": "UCS"
                    },
                    {
                      "id": "5cai404_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Heuristic Admissibility\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Heuristic Admissibility"
                    },
                    {
                      "id": "5cai404_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"AO* Algorithm\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "AO* Algorithm"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Adversarial Search & CSP",
                  "topics": [
                    "Minimax",
                    "Alpha-Beta Pruning",
                    "CSP Formulation",
                    "AC-3 Algorithm"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cai404_u3_q1",
                      "q": "In optimal case, Alpha-Beta pruning reduces branching factor to:",
                      "options": [
                        "ΓêÜb (square root of b)",
                        "b",
                        "b┬▓",
                        "1"
                      ],
                      "answer": "ΓêÜb (square root of b)",
                      "topic": "Alpha-Beta"
                    },
                    {
                      "id": "5cai404_u3_q2",
                      "q": "AC-3 enforces:",
                      "options": [
                        "Arc consistency in CSPs",
                        "Node consistency",
                        "Path consistency",
                        "None"
                      ],
                      "answer": "Arc consistency in CSPs",
                      "topic": "AC-3"
                    },
                    {
                      "id": "5cai404_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"CSP Formulation\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "CSP Formulation"
                    },
                    {
                      "id": "5cai404_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"AC-3 Algorithm\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "AC-3 Algorithm"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "FOPL & Resolution",
                  "topics": [
                    "First-Order Logic",
                    "Unification & MGU",
                    "Resolution Refutation",
                    "Clause Form"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "5cai404_u4_q1",
                      "q": "Skolemization removes:",
                      "options": [
                        "Existential quantifiers",
                        "Universal quantifiers",
                        "All quantifiers",
                        "None"
                      ],
                      "answer": "Existential quantifiers",
                      "topic": "Skolemization"
                    },
                    {
                      "id": "5cai404_u4_q2",
                      "q": "Resolution requires formulas in:",
                      "options": [
                        "Clause Form (CNF)",
                        "DNF",
                        "Horn form only",
                        "None"
                      ],
                      "answer": "Clause Form (CNF)",
                      "topic": "Resolution"
                    },
                    {
                      "id": "5cai404_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Resolution Refutation\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Resolution Refutation"
                    },
                    {
                      "id": "5cai404_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Clause Form\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Clause Form"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Probabilistic Reasoning",
                  "topics": [
                    "Bayesian Networks",
                    "Variable Elimination",
                    "Expert Systems",
                    "MYCIN"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cai404_u5_q1",
                      "q": "D-separation in Bayesian Networks determines:",
                      "options": [
                        "Conditional independence",
                        "Dependence only",
                        "Causal direction",
                        "None"
                      ],
                      "answer": "Conditional independence",
                      "topic": "D-separation"
                    },
                    {
                      "id": "5cai404_u5_q2",
                      "q": "Variable elimination computes:",
                      "options": [
                        "Exact inference in Bayesian Networks",
                        "Approximate inference",
                        "Only prior",
                        "None"
                      ],
                      "answer": "Exact inference in Bayesian Networks",
                      "topic": "Inference"
                    },
                    {
                      "id": "5cai404_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Expert Systems\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Expert Systems"
                    },
                    {
                      "id": "5cai404_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"MYCIN\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "MYCIN"
                    }
                  ]
                }
              ]
            },
            {
              "code": "5CAI4-05",
              "name": "Analysis of Algorithms (DAA)",
              "units": [
                {
                  "number": 1,
                  "title": "Analysis & Divide-and-Conquer",
                  "topics": [
                    "Asymptotic Notations",
                    "Master's Theorem",
                    "Strassen's Matrix Mult",
                    "Merge Sort, Quick Sort"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cai405_u1_q1",
                      "q": "Master's theorem case 1: if f(n) = O(n^(log_b(a)-╬╡)), T(n) =",
                      "options": [
                        "╬ÿ(n^(log_b(a)))",
                        "╬ÿ(f(n))",
                        "╬ÿ(n log n)",
                        "None"
                      ],
                      "answer": "╬ÿ(n^(log_b(a)))",
                      "topic": "Master's Theorem"
                    },
                    {
                      "id": "5cai405_u1_q2",
                      "q": "Strassen uses how many multiplications?",
                      "options": [
                        "7",
                        "8",
                        "6",
                        "9"
                      ],
                      "answer": "7",
                      "topic": "Strassen's"
                    },
                    {
                      "id": "5cai405_u1_q3",
                      "q": "When implementing \"Strassen's Matrix Mult\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Strassen's Matrix Mult"
                    },
                    {
                      "id": "5cai405_u1_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Merge Sort, Quick Sort\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Merge Sort, Quick Sort"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Greedy Method",
                  "topics": [
                    "Fractional Knapsack",
                    "Huffman Coding",
                    "Job Sequencing",
                    "Prim's & Kruskal's"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cai405_u2_q1",
                      "q": "Huffman coding is optimal for:",
                      "options": [
                        "Variable-length prefix-free encoding",
                        "Fixed-length encoding",
                        "Run-length encoding",
                        "None"
                      ],
                      "answer": "Variable-length prefix-free encoding",
                      "topic": "Huffman"
                    },
                    {
                      "id": "5cai405_u2_q2",
                      "q": "Greedy choice property means:",
                      "options": [
                        "Locally optimal choice leads to global optimum",
                        "Always worst choice",
                        "Random choice",
                        "None"
                      ],
                      "answer": "Locally optimal choice leads to global optimum",
                      "topic": "Greedy"
                    },
                    {
                      "id": "5cai405_u2_q3",
                      "q": "When implementing \"Job Sequencing\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Job Sequencing"
                    },
                    {
                      "id": "5cai405_u2_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Prim's & Kruskal's\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Prim's & Kruskal's"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Dynamic Programming",
                  "topics": [
                    "0/1 Knapsack",
                    "Matrix Chain Multiplication",
                    "LCS",
                    "Floyd-Warshall"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "5cai405_u3_q1",
                      "q": "DP uses:",
                      "options": [
                        "Overlapping subproblems and optimal substructure",
                        "Only recursion",
                        "Only iteration",
                        "Greedy choices"
                      ],
                      "answer": "Overlapping subproblems and optimal substructure",
                      "topic": "DP Principles"
                    },
                    {
                      "id": "5cai405_u3_q2",
                      "q": "Matrix Chain Multiplication finds:",
                      "options": [
                        "Optimal parenthesization to minimize scalar multiplications",
                        "Maximum multiplications",
                        "Determinant",
                        "Inverse"
                      ],
                      "answer": "Optimal parenthesization to minimize scalar multiplications",
                      "topic": "MCM"
                    },
                    {
                      "id": "5cai405_u3_q3",
                      "q": "When implementing \"LCS\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "LCS"
                    },
                    {
                      "id": "5cai405_u3_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Floyd-Warshall\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Floyd-Warshall"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Backtracking & Branch-and-Bound",
                  "topics": [
                    "N-Queens",
                    "Graph Coloring",
                    "Sum of Subsets",
                    "15-Puzzle"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "5cai405_u4_q1",
                      "q": "Backtracking systematically:",
                      "options": [
                        "Explores and abandons partial solutions",
                        "Tries all solutions without pruning",
                        "Uses only greedy",
                        "None"
                      ],
                      "answer": "Explores and abandons partial solutions",
                      "topic": "Backtracking"
                    },
                    {
                      "id": "5cai405_u4_q2",
                      "q": "Branch-and-Bound uses bounding function to:",
                      "options": [
                        "Prune non-promising branches",
                        "Expand all branches",
                        "Sort branches",
                        "None"
                      ],
                      "answer": "Prune non-promising branches",
                      "topic": "B&B"
                    },
                    {
                      "id": "5cai405_u4_q3",
                      "q": "When implementing \"Sum of Subsets\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Sum of Subsets"
                    },
                    {
                      "id": "5cai405_u4_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"15-Puzzle\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "15-Puzzle"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "NP-Completeness",
                  "topics": [
                    "P, NP, NP-Hard, NP-Complete",
                    "Cook's Theorem",
                    "Polynomial Reductions",
                    "Approximation"
                  ],
                  "high_yield": 3,
                  "questions": [
                    {
                      "id": "5cai405_u5_q1",
                      "q": "NP-Complete problems are:",
                      "options": [
                        "In NP and at least as hard as every NP problem",
                        "In P",
                        "Undecidable",
                        "None"
                      ],
                      "answer": "In NP and at least as hard as every NP problem",
                      "topic": "NP-Complete"
                    },
                    {
                      "id": "5cai405_u5_q2",
                      "q": "SAT (Boolean Satisfiability) was first proved:",
                      "options": [
                        "NP-Complete by Cook",
                        "P by Turing",
                        "Undecidable",
                        "Regular"
                      ],
                      "answer": "NP-Complete by Cook",
                      "topic": "SAT"
                    },
                    {
                      "id": "5cai405_u5_q3",
                      "q": "When implementing \"Polynomial Reductions\", how is memory safety or stability guaranteed?",
                      "options": [
                        "Proper base case handling, boundary checks, and deallocation / destructor logic",
                        "Ignoring pointer bounds",
                        "Using infinite recursion without return conditions",
                        "Suppressing compiler warnings"
                      ],
                      "answer": "Proper base case handling, boundary checks, and deallocation / destructor logic",
                      "topic": "Polynomial Reductions"
                    },
                    {
                      "id": "5cai405_u5_q4",
                      "q": "In RTU coding/algorithm exams, how should you trace \"Approximation\"?",
                      "options": [
                        "State table showing iteration step, stack/queue contents, and variable modifications",
                        "Only writing the final output without steps",
                        "Skipping the dry run and pseudo-code",
                        "Providing random sample values"
                      ],
                      "answer": "State table showing iteration step, stack/queue contents, and variable modifications",
                      "topic": "Approximation"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 6,
          "year": 3,
          "subjects": [
            {
              "code": "6CAI4-02",
              "name": "Machine Learning",
              "units": [
                {
                  "number": 1,
                  "title": "Foundations & Supervised Pipeline",
                  "topics": [
                    "Bias-Variance",
                    "Cross-Validation",
                    "L1/L2 Regularization",
                    "ROC-AUC, F1-Score"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cai402_u1_q1",
                      "q": "K-fold cross-validation splits data into:",
                      "options": [
                        "K equal folds, trains on K-1, tests on 1",
                        "2 halves",
                        "No split",
                        "Random"
                      ],
                      "answer": "K equal folds, trains on K-1, tests on 1",
                      "topic": "Cross-Validation"
                    },
                    {
                      "id": "6cai402_u1_q2",
                      "q": "AUC of 0.5 means classifier performs:",
                      "options": [
                        "Same as random guessing",
                        "Perfectly",
                        "Inversely",
                        "None"
                      ],
                      "answer": "Same as random guessing",
                      "topic": "AUC"
                    },
                    {
                      "id": "6cai402_u1_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"L1/L2 Regularization\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "L1/L2 Regularization"
                    },
                    {
                      "id": "6cai402_u1_q4",
                      "q": "When analyzing \"ROC-AUC, F1-Score\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "ROC-AUC, F1-Score"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Linear Models & Decision Trees",
                  "topics": [
                    "Linear/Logistic Regression",
                    "Naive Bayes",
                    "Decision Trees (ID3, CART)",
                    "Entropy & Information Gain"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cai402_u2_q1",
                      "q": "Entropy of a pure node is:",
                      "options": [
                        "0",
                        "1",
                        "Infinity",
                        "0.5"
                      ],
                      "answer": "0",
                      "topic": "Entropy"
                    },
                    {
                      "id": "6cai402_u2_q2",
                      "q": "Naive Bayes assumes features are:",
                      "options": [
                        "Conditionally independent given class",
                        "Always dependent",
                        "Correlated",
                        "None"
                      ],
                      "answer": "Conditionally independent given class",
                      "topic": "Naive Bayes"
                    },
                    {
                      "id": "6cai402_u2_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Decision Trees (ID3, CART)\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Decision Trees (ID3, CART)"
                    },
                    {
                      "id": "6cai402_u2_q4",
                      "q": "When analyzing \"Entropy & Information Gain\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Entropy & Information Gain"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "SVM & Ensemble Learning",
                  "topics": [
                    "SVM Margin & Kernel",
                    "Random Forest",
                    "AdaBoost",
                    "Bagging vs Boosting"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cai402_u3_q1",
                      "q": "SVM finds hyperplane that:",
                      "options": [
                        "Maximizes margin between classes",
                        "Minimizes margin",
                        "Passes through origin",
                        "None"
                      ],
                      "answer": "Maximizes margin between classes",
                      "topic": "SVM"
                    },
                    {
                      "id": "6cai402_u3_q2",
                      "q": "Bagging reduces:",
                      "options": [
                        "Variance",
                        "Bias",
                        "Both equally",
                        "Neither"
                      ],
                      "answer": "Variance",
                      "topic": "Bagging"
                    },
                    {
                      "id": "6cai402_u3_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"AdaBoost\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "AdaBoost"
                    },
                    {
                      "id": "6cai402_u3_q4",
                      "q": "When analyzing \"Bagging vs Boosting\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Bagging vs Boosting"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Unsupervised & Dimensionality Reduction",
                  "topics": [
                    "K-Means, DBSCAN",
                    "Hierarchical Clustering",
                    "PCA",
                    "Elbow Method"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cai402_u4_q1",
                      "q": "DBSCAN does not require:",
                      "options": [
                        "Pre-specifying number of clusters",
                        "Density parameter",
                        "Distance metric",
                        "Points"
                      ],
                      "answer": "Pre-specifying number of clusters",
                      "topic": "DBSCAN"
                    },
                    {
                      "id": "6cai402_u4_q2",
                      "q": "Elbow method helps determine:",
                      "options": [
                        "Optimal K in K-Means",
                        "Learning rate",
                        "Batch size",
                        "None"
                      ],
                      "answer": "Optimal K in K-Means",
                      "topic": "Elbow Method"
                    },
                    {
                      "id": "6cai402_u4_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"PCA\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "PCA"
                    },
                    {
                      "id": "6cai402_u4_q4",
                      "q": "When analyzing \"Elbow Method\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Elbow Method"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Neural Networks & Optimization",
                  "topics": [
                    "Perceptron, MLP",
                    "Backpropagation",
                    "Activation Functions",
                    "SGD, Adam"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cai402_u5_q1",
                      "q": "ReLU activation function outputs:",
                      "options": [
                        "max(0, x)",
                        "sigmoid(x)",
                        "tanh(x)",
                        "x┬▓"
                      ],
                      "answer": "max(0, x)",
                      "topic": "ReLU"
                    },
                    {
                      "id": "6cai402_u5_q2",
                      "q": "Backpropagation computes gradients using:",
                      "options": [
                        "Chain rule of calculus",
                        "Matrix inverse",
                        "Random sampling",
                        "None"
                      ],
                      "answer": "Chain rule of calculus",
                      "topic": "Backpropagation"
                    },
                    {
                      "id": "6cai402_u5_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Activation Functions\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Activation Functions"
                    },
                    {
                      "id": "6cai402_u5_q4",
                      "q": "When analyzing \"SGD, Adam\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "SGD, Adam"
                    }
                  ]
                }
              ]
            },
            {
              "code": "6CAI4-05",
              "name": "Deep Learning & Neural Networks",
              "units": [
                {
                  "number": 1,
                  "title": "Feedforward Networks & Regularization",
                  "topics": [
                    "Universal Approximation",
                    "Dropout",
                    "Batch Normalization",
                    "Weight Decay"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cai405_u1_q1",
                      "q": "Dropout randomly sets neurons to zero during:",
                      "options": [
                        "Training only",
                        "Testing only",
                        "Both",
                        "Neither"
                      ],
                      "answer": "Training only",
                      "topic": "Dropout"
                    },
                    {
                      "id": "6cai405_u1_q2",
                      "q": "Batch Normalization normalizes:",
                      "options": [
                        "Activations within a mini-batch",
                        "Weights",
                        "Gradients",
                        "Loss"
                      ],
                      "answer": "Activations within a mini-batch",
                      "topic": "Batch Norm"
                    },
                    {
                      "id": "6cai405_u1_q3",
                      "q": "What metric is primarily optimized by \"Batch Normalization\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Batch Normalization"
                    },
                    {
                      "id": "6cai405_u1_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Weight Decay\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Weight Decay"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "CNNs & ResNet",
                  "topics": [
                    "2D Convolution",
                    "Stride, Padding, Pooling",
                    "LeNet, AlexNet, VGGNet",
                    "ResNet Skip Connections"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cai405_u2_q1",
                      "q": "Output size formula for convolution is:",
                      "options": [
                        "(W-F+2P)/S + 1",
                        "W├ùF",
                        "W+F",
                        "W-F"
                      ],
                      "answer": "(W-F+2P)/S + 1",
                      "topic": "Convolution"
                    },
                    {
                      "id": "6cai405_u2_q2",
                      "q": "ResNet skip connections solve:",
                      "options": [
                        "Vanishing gradient in very deep networks",
                        "Overfitting only",
                        "Underfitting only",
                        "None"
                      ],
                      "answer": "Vanishing gradient in very deep networks",
                      "topic": "ResNet"
                    },
                    {
                      "id": "6cai405_u2_q3",
                      "q": "What metric is primarily optimized by \"LeNet, AlexNet, VGGNet\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "LeNet, AlexNet, VGGNet"
                    },
                    {
                      "id": "6cai405_u2_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"ResNet Skip Connections\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "ResNet Skip Connections"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "RNNs & BPTT",
                  "topics": [
                    "Vanilla RNN",
                    "BPTT Algorithm",
                    "Vanishing/Exploding Gradients",
                    "Gradient Clipping"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cai405_u3_q1",
                      "q": "BPTT stands for:",
                      "options": [
                        "Backpropagation Through Time",
                        "Basic Processing Through Training",
                        "None",
                        "Batch Processing Temporal Training"
                      ],
                      "answer": "Backpropagation Through Time",
                      "topic": "BPTT"
                    },
                    {
                      "id": "6cai405_u3_q2",
                      "q": "Gradient clipping prevents:",
                      "options": [
                        "Exploding gradients",
                        "Vanishing gradients",
                        "Both",
                        "Neither"
                      ],
                      "answer": "Exploding gradients",
                      "topic": "Gradient Clipping"
                    },
                    {
                      "id": "6cai405_u3_q3",
                      "q": "What metric is primarily optimized by \"Vanishing/Exploding Gradients\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "Vanishing/Exploding Gradients"
                    },
                    {
                      "id": "6cai405_u3_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Gradient Clipping\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Gradient Clipping"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "LSTM & GRU",
                  "topics": [
                    "LSTM Cell (6 Equations)",
                    "Forget, Input, Output Gates",
                    "GRU (Reset, Update Gates)",
                    "LSTM vs GRU Comparison"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "6cai405_u4_q1",
                      "q": "LSTM Forget Gate decides:",
                      "options": [
                        "What information to discard from cell state",
                        "What to output",
                        "Learning rate",
                        "Batch size"
                      ],
                      "answer": "What information to discard from cell state",
                      "topic": "Forget Gate"
                    },
                    {
                      "id": "6cai405_u4_q2",
                      "q": "GRU has fewer parameters than LSTM because:",
                      "options": [
                        "It combines forget and input gates into update gate",
                        "It has no gates",
                        "It uses more layers",
                        "None"
                      ],
                      "answer": "It combines forget and input gates into update gate",
                      "topic": "GRU"
                    },
                    {
                      "id": "6cai405_u4_q3",
                      "q": "What metric is primarily optimized by \"GRU (Reset, Update Gates)\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "GRU (Reset, Update Gates)"
                    },
                    {
                      "id": "6cai405_u4_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"LSTM vs GRU Comparison\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "LSTM vs GRU Comparison"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Autoencoders & GANs",
                  "topics": [
                    "Undercomplete Autoencoders",
                    "VAE & Reparameterization",
                    "GAN Architecture",
                    "Mode Collapse"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "6cai405_u5_q1",
                      "q": "GAN minimax objective trains:",
                      "options": [
                        "Generator and Discriminator adversarially",
                        "Only generator",
                        "Only discriminator",
                        "Neither"
                      ],
                      "answer": "Generator and Discriminator adversarially",
                      "topic": "GAN"
                    },
                    {
                      "id": "6cai405_u5_q2",
                      "q": "Reparameterization trick in VAE enables:",
                      "options": [
                        "Backpropagation through stochastic sampling",
                        "Faster training",
                        "Less memory",
                        "None"
                      ],
                      "answer": "Backpropagation through stochastic sampling",
                      "topic": "VAE"
                    },
                    {
                      "id": "6cai405_u5_q3",
                      "q": "What metric is primarily optimized by \"GAN Architecture\"?",
                      "options": [
                        "Throughput, resource utilization, and query/response latency",
                        "Total memory fragmentation to 100%",
                        "Packet loss rate increase",
                        "Number of redundant system crashes"
                      ],
                      "answer": "Throughput, resource utilization, and query/response latency",
                      "topic": "GAN Architecture"
                    },
                    {
                      "id": "6cai405_u5_q4",
                      "q": "For RTU exams, what standard diagram is required when answering questions on \"Mode Collapse\"?",
                      "options": [
                        "Layered architectural block diagram with data-flow arrows and state labels",
                        "Plain text outline without any schema or topology",
                        "Hand-drawn decorative illustrations",
                        "None"
                      ],
                      "answer": "Layered architectural block diagram with data-flow arrows and state labels",
                      "topic": "Mode Collapse"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 7,
          "year": 4,
          "subjects": [
            {
              "code": "7CAI4-01",
              "name": "Natural Language Processing",
              "units": [
                {
                  "number": 1,
                  "title": "NLP Foundations & Preprocessing",
                  "topics": [
                    "Tokenization (BPE)",
                    "Stemming vs Lemmatization",
                    "POS Tagging (HMM, Viterbi)",
                    "N-grams & Perplexity"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cai401_u1_q1",
                      "q": "BPE tokenization:",
                      "options": [
                        "Iteratively merges most frequent byte pairs",
                        "Splits by whitespace only",
                        "Uses regex",
                        "Random splitting"
                      ],
                      "answer": "Iteratively merges most frequent byte pairs",
                      "topic": "BPE"
                    },
                    {
                      "id": "7cai401_u1_q2",
                      "q": "Lemmatization differs from stemming by:",
                      "options": [
                        "Producing valid dictionary words",
                        "Being faster",
                        "Ignoring context",
                        "None"
                      ],
                      "answer": "Producing valid dictionary words",
                      "topic": "Lemmatization"
                    },
                    {
                      "id": "7cai401_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"POS Tagging (HMM, Viterbi)\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "POS Tagging (HMM, Viterbi)"
                    },
                    {
                      "id": "7cai401_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"N-grams & Perplexity\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "N-grams & Perplexity"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Word Embeddings",
                  "topics": [
                    "TF-IDF",
                    "Word2Vec (CBOW, Skip-Gram)",
                    "GloVe, FastText",
                    "Cosine Similarity"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cai401_u2_q1",
                      "q": "Skip-Gram predicts:",
                      "options": [
                        "Context words from center word",
                        "Center word from context",
                        "Next sentence",
                        "None"
                      ],
                      "answer": "Context words from center word",
                      "topic": "Skip-Gram"
                    },
                    {
                      "id": "7cai401_u2_q2",
                      "q": "TF-IDF gives high weight to terms that are:",
                      "options": [
                        "Frequent in document but rare across corpus",
                        "Common everywhere",
                        "Only in one document",
                        "None"
                      ],
                      "answer": "Frequent in document but rare across corpus",
                      "topic": "TF-IDF"
                    },
                    {
                      "id": "7cai401_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"GloVe, FastText\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "GloVe, FastText"
                    },
                    {
                      "id": "7cai401_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Cosine Similarity\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Cosine Similarity"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Transformers & Attention",
                  "topics": [
                    "Scaled Dot-Product Attention",
                    "Multi-Head Attention",
                    "Positional Encoding",
                    "Full Transformer Architecture"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "7cai401_u3_q1",
                      "q": "Scaling by 1/ΓêÜdk in attention prevents:",
                      "options": [
                        "Softmax saturation from large dot products",
                        "Underfitting",
                        "Overfitting",
                        "None"
                      ],
                      "answer": "Softmax saturation from large dot products",
                      "topic": "Attention"
                    },
                    {
                      "id": "7cai401_u3_q2",
                      "q": "Positional encoding adds:",
                      "options": [
                        "Order information to embeddings",
                        "More parameters",
                        "Noise",
                        "None"
                      ],
                      "answer": "Order information to embeddings",
                      "topic": "Positional Encoding"
                    },
                    {
                      "id": "7cai401_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Positional Encoding\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Positional Encoding"
                    },
                    {
                      "id": "7cai401_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Full Transformer Architecture\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Full Transformer Architecture"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Pre-trained LMs (BERT, GPT)",
                  "topics": [
                    "BERT (Masked LM, NSP)",
                    "GPT (Autoregressive)",
                    "RoBERTa, T5",
                    "Transfer Learning"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cai401_u4_q1",
                      "q": "BERT uses which attention masking?",
                      "options": [
                        "Bidirectional (sees all tokens)",
                        "Left-to-right only",
                        "Right-to-left only",
                        "Random"
                      ],
                      "answer": "Bidirectional (sees all tokens)",
                      "topic": "BERT"
                    },
                    {
                      "id": "7cai401_u4_q2",
                      "q": "GPT is autoregressive, meaning:",
                      "options": [
                        "Each token only attends to previous tokens",
                        "All tokens attend to all",
                        "No attention",
                        "Random attention"
                      ],
                      "answer": "Each token only attends to previous tokens",
                      "topic": "GPT"
                    },
                    {
                      "id": "7cai401_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"RoBERTa, T5\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "RoBERTa, T5"
                    },
                    {
                      "id": "7cai401_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Transfer Learning\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Transfer Learning"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "NLP Applications",
                  "topics": [
                    "Text Classification",
                    "Machine Translation (BLEU)",
                    "Question Answering",
                    "Prompt Engineering"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cai401_u5_q1",
                      "q": "BLEU score measures:",
                      "options": [
                        "Translation quality via n-gram overlap",
                        "Sentiment accuracy",
                        "Named entity accuracy",
                        "None"
                      ],
                      "answer": "Translation quality via n-gram overlap",
                      "topic": "BLEU"
                    },
                    {
                      "id": "7cai401_u5_q2",
                      "q": "Few-shot prompting provides:",
                      "options": [
                        "Examples in the prompt to guide LLM output",
                        "No examples",
                        "Full training data",
                        "None"
                      ],
                      "answer": "Examples in the prompt to guide LLM output",
                      "topic": "Few-Shot"
                    },
                    {
                      "id": "7cai401_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Question Answering\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Question Answering"
                    },
                    {
                      "id": "7cai401_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Prompt Engineering\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Prompt Engineering"
                    }
                  ]
                }
              ]
            },
            {
              "code": "7CAI5-12",
              "name": "Reinforcement Learning",
              "units": [
                {
                  "number": 1,
                  "title": "RL Foundations & MDPs",
                  "topics": [
                    "Agent-Environment Loop",
                    "MDP 5-tuple",
                    "Bellman Equations",
                    "State-Value & Action-Value"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "7cai512_u1_q1",
                      "q": "Bellman optimality equation gives:",
                      "options": [
                        "Value of optimal policy",
                        "Random policy value",
                        "Average reward",
                        "None"
                      ],
                      "answer": "Value of optimal policy",
                      "topic": "Bellman"
                    },
                    {
                      "id": "7cai512_u1_q2",
                      "q": "Discount factor ╬│ close to 0 means agent is:",
                      "options": [
                        "Myopic (short-sighted)",
                        "Far-sighted",
                        "Neutral",
                        "None"
                      ],
                      "answer": "Myopic (short-sighted)",
                      "topic": "Discount Factor"
                    },
                    {
                      "id": "7cai512_u1_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Bellman Equations\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Bellman Equations"
                    },
                    {
                      "id": "7cai512_u1_q4",
                      "q": "When analyzing \"State-Value & Action-Value\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "State-Value & Action-Value"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Dynamic Programming Methods",
                  "topics": [
                    "Policy Evaluation",
                    "Policy Iteration",
                    "Value Iteration",
                    "Contraction Mapping"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cai512_u2_q1",
                      "q": "Value Iteration updates values using:",
                      "options": [
                        "Bellman optimality backup",
                        "Random updates",
                        "Policy gradient",
                        "None"
                      ],
                      "answer": "Bellman optimality backup",
                      "topic": "Value Iteration"
                    },
                    {
                      "id": "7cai512_u2_q2",
                      "q": "Policy Iteration alternates between:",
                      "options": [
                        "Policy evaluation and policy improvement",
                        "Only evaluation",
                        "Only improvement",
                        "None"
                      ],
                      "answer": "Policy evaluation and policy improvement",
                      "topic": "Policy Iteration"
                    },
                    {
                      "id": "7cai512_u2_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"Value Iteration\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "Value Iteration"
                    },
                    {
                      "id": "7cai512_u2_q4",
                      "q": "When analyzing \"Contraction Mapping\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Contraction Mapping"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "Model-Free Learning",
                  "topics": [
                    "Monte Carlo Methods",
                    "TD(0)",
                    "SARSA (On-Policy)",
                    "Q-Learning (Off-Policy)"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "7cai512_u3_q1",
                      "q": "Q-Learning is off-policy because:",
                      "options": [
                        "It learns optimal policy regardless of behavior policy",
                        "It follows only learned policy",
                        "It uses no policy",
                        "None"
                      ],
                      "answer": "It learns optimal policy regardless of behavior policy",
                      "topic": "Q-Learning"
                    },
                    {
                      "id": "7cai512_u3_q2",
                      "q": "╬╡-greedy balances:",
                      "options": [
                        "Exploration and exploitation",
                        "Only exploration",
                        "Only exploitation",
                        "Neither"
                      ],
                      "answer": "Exploration and exploitation",
                      "topic": "╬╡-greedy"
                    },
                    {
                      "id": "7cai512_u3_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"SARSA (On-Policy)\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "SARSA (On-Policy)"
                    },
                    {
                      "id": "7cai512_u3_q4",
                      "q": "When analyzing \"Q-Learning (Off-Policy)\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Q-Learning (Off-Policy)"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Deep RL (DQN & Policy Gradients)",
                  "topics": [
                    "DQN & Experience Replay",
                    "Target Network",
                    "REINFORCE",
                    "Actor-Critic (A2C)"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cai512_u4_q1",
                      "q": "Experience Replay in DQN:",
                      "options": [
                        "Stores and samples past transitions to break correlation",
                        "Replays the game",
                        "Saves model weights",
                        "None"
                      ],
                      "answer": "Stores and samples past transitions to break correlation",
                      "topic": "Experience Replay"
                    },
                    {
                      "id": "7cai512_u4_q2",
                      "q": "Actor-Critic combines:",
                      "options": [
                        "Policy gradient (actor) and value estimation (critic)",
                        "Two actors",
                        "Two critics",
                        "None"
                      ],
                      "answer": "Policy gradient (actor) and value estimation (critic)",
                      "topic": "Actor-Critic"
                    },
                    {
                      "id": "7cai512_u4_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"REINFORCE\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "REINFORCE"
                    },
                    {
                      "id": "7cai512_u4_q4",
                      "q": "When analyzing \"Actor-Critic (A2C)\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Actor-Critic (A2C)"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "Advanced RL & Autonomous Systems",
                  "topics": [
                    "DDPG",
                    "PPO (Clipped Objective)",
                    "RL in Robotics",
                    "Autonomous Driving"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "7cai512_u5_q1",
                      "q": "PPO's clipped objective prevents:",
                      "options": [
                        "Too large policy updates",
                        "Too small updates",
                        "All updates",
                        "None"
                      ],
                      "answer": "Too large policy updates",
                      "topic": "PPO"
                    },
                    {
                      "id": "7cai512_u5_q2",
                      "q": "DDPG handles:",
                      "options": [
                        "Continuous action spaces",
                        "Only discrete actions",
                        "Only tabular",
                        "None"
                      ],
                      "answer": "Continuous action spaces",
                      "topic": "DDPG"
                    },
                    {
                      "id": "7cai512_u5_q3",
                      "q": "What is the computational role of the activation or transformation layer in \"RL in Robotics\"?",
                      "options": [
                        "Introducing non-linearity to learn complex continuous decision boundaries",
                        "Resetting weights to zero at each step",
                        "Converting vectors to scalar constants",
                        "Eliminating all matrix operations"
                      ],
                      "answer": "Introducing non-linearity to learn complex continuous decision boundaries",
                      "topic": "RL in Robotics"
                    },
                    {
                      "id": "7cai512_u5_q4",
                      "q": "When analyzing \"Autonomous Driving\" in RTU university exams, what key tradeoff must be highlighted?",
                      "options": [
                        "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                        "Color scheme of charts",
                        "File size of documentation",
                        "Number of printed answer booklet lines"
                      ],
                      "answer": "Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity",
                      "topic": "Autonomous Driving"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "semester": 8,
          "year": 4,
          "subjects": [
            {
              "code": "8CAI5-11",
              "name": "Generative AI & Large Language Models",
              "units": [
                {
                  "number": 1,
                  "title": "Advanced Transformers",
                  "topics": [
                    "FlashAttention",
                    "RoPE",
                    "GQA",
                    "Mixture of Experts"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "8cai511_u1_q1",
                      "q": "GQA reduces memory by:",
                      "options": [
                        "Sharing KV heads across query heads",
                        "More heads",
                        "No sharing",
                        "None"
                      ],
                      "answer": "Sharing KV heads across query heads",
                      "topic": "GQA"
                    },
                    {
                      "id": "8cai511_u1_q2",
                      "q": "MoE activates:",
                      "options": [
                        "Only subset of expert networks per token",
                        "All experts",
                        "No experts",
                        "Random layers"
                      ],
                      "answer": "Only subset of expert networks per token",
                      "topic": "MoE"
                    },
                    {
                      "id": "8cai511_u1_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"GQA\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "GQA"
                    },
                    {
                      "id": "8cai511_u1_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Mixture of Experts\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Mixture of Experts"
                    }
                  ]
                },
                {
                  "number": 2,
                  "title": "Diffusion Models",
                  "topics": [
                    "DDPM",
                    "Latent Diffusion / Stable Diffusion",
                    "CLIP",
                    "Score Matching"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "8cai511_u2_q1",
                      "q": "Latent Diffusion operates in:",
                      "options": [
                        "Compressed latent space (faster)",
                        "Pixel space",
                        "Frequency domain",
                        "None"
                      ],
                      "answer": "Compressed latent space (faster)",
                      "topic": "Latent Diffusion"
                    },
                    {
                      "id": "8cai511_u2_q2",
                      "q": "CLIP aligns:",
                      "options": [
                        "Text and image embeddings in shared space",
                        "Only text",
                        "Only images",
                        "Audio and video"
                      ],
                      "answer": "Text and image embeddings in shared space",
                      "topic": "CLIP"
                    },
                    {
                      "id": "8cai511_u2_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"CLIP\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "CLIP"
                    },
                    {
                      "id": "8cai511_u2_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Score Matching\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Score Matching"
                    }
                  ]
                },
                {
                  "number": 3,
                  "title": "LLM Pre-training & Scaling",
                  "topics": [
                    "Data Curation",
                    "Distributed Training",
                    "Chinchilla Scaling Laws",
                    "ZeRO Optimizer"
                  ],
                  "high_yield": 2,
                  "questions": [
                    {
                      "id": "8cai511_u3_q1",
                      "q": "Chinchilla scaling law recommends:",
                      "options": [
                        "~20 tokens per parameter for compute-optimal training",
                        "1 token per parameter",
                        "100 tokens",
                        "None"
                      ],
                      "answer": "~20 tokens per parameter for compute-optimal training",
                      "topic": "Chinchilla"
                    },
                    {
                      "id": "8cai511_u3_q2",
                      "q": "ZeRO Stage 3 partitions:",
                      "options": [
                        "Optimizer states, gradients, AND parameters",
                        "Only optimizer",
                        "Only gradients",
                        "None"
                      ],
                      "answer": "Optimizer states, gradients, AND parameters",
                      "topic": "ZeRO"
                    },
                    {
                      "id": "8cai511_u3_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Chinchilla Scaling Laws\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Chinchilla Scaling Laws"
                    },
                    {
                      "id": "8cai511_u3_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"ZeRO Optimizer\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "ZeRO Optimizer"
                    }
                  ]
                },
                {
                  "number": 4,
                  "title": "Fine-Tuning & Alignment",
                  "topics": [
                    "LoRA & QLoRA",
                    "RLHF",
                    "DPO",
                    "Supervised Fine-Tuning"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "8cai511_u4_q1",
                      "q": "LoRA adds:",
                      "options": [
                        "Low-rank decomposition matrices to frozen weights",
                        "New layers",
                        "More data",
                        "None"
                      ],
                      "answer": "Low-rank decomposition matrices to frozen weights",
                      "topic": "LoRA"
                    },
                    {
                      "id": "8cai511_u4_q2",
                      "q": "DPO eliminates need for:",
                      "options": [
                        "Explicit reward model in RLHF",
                        "Training data",
                        "Loss function",
                        "None"
                      ],
                      "answer": "Explicit reward model in RLHF",
                      "topic": "DPO"
                    },
                    {
                      "id": "8cai511_u4_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"DPO\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "DPO"
                    },
                    {
                      "id": "8cai511_u4_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"Supervised Fine-Tuning\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "Supervised Fine-Tuning"
                    }
                  ]
                },
                {
                  "number": 5,
                  "title": "RAG & Agentic AI",
                  "topics": [
                    "RAG Architecture",
                    "Vector Databases",
                    "Hybrid Search (BM25 + Dense)",
                    "ReAct Framework"
                  ],
                  "high_yield": 1,
                  "questions": [
                    {
                      "id": "8cai511_u5_q1",
                      "q": "RAG retrieves:",
                      "options": [
                        "Relevant documents to augment LLM generation",
                        "Random documents",
                        "Only from training data",
                        "None"
                      ],
                      "answer": "Relevant documents to augment LLM generation",
                      "topic": "RAG"
                    },
                    {
                      "id": "8cai511_u5_q2",
                      "q": "ReAct framework alternates:",
                      "options": [
                        "Reasoning and acting steps",
                        "Only reasoning",
                        "Only acting",
                        "None"
                      ],
                      "answer": "Reasoning and acting steps",
                      "topic": "ReAct"
                    },
                    {
                      "id": "8cai511_u5_q3",
                      "q": "What critical error must students avoid when deriving analytical equations for \"Hybrid Search (BM25 + Dense)\"?",
                      "options": [
                        "Violating initial boundary assumptions or missing dimensional consistency",
                        "Using correct standard units",
                        "Labeling axes on diagrams",
                        "Writing neat step-by-step solutions"
                      ],
                      "answer": "Violating initial boundary assumptions or missing dimensional consistency",
                      "topic": "Hybrid Search (BM25 + Dense)"
                    },
                    {
                      "id": "8cai511_u5_q4",
                      "q": "In RTU B.Tech exams, how is full credit secured for 10-mark questions on \"ReAct Framework\"?",
                      "options": [
                        "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                        "One-line definition without formulas or working steps",
                        "Only copying the question statement",
                        "Listing unrelated acronyms"
                      ],
                      "answer": "Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation",
                      "topic": "ReAct Framework"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default rtuData;
