function DataSenseLogo({ small = false }) {
  return (
    <div className={`datasense-logo ${small ? "logo-small" : ""}`}>
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="DataSense AI Logo"
      >
        <defs>
          {/* Main purple → blue → cyan gradient */}
          <linearGradient
            id="logoMainGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#29256F" />
            <stop offset="45%" stopColor="#4B2A91" />
            <stop offset="75%" stopColor="#168CC4" />
            <stop offset="100%" stopColor="#20C6CF" />
          </linearGradient>

          {/* Cyan data-network gradient */}
          <linearGradient
            id="networkGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#5A4CCF" />
            <stop offset="50%" stopColor="#45B9E6" />
            <stop offset="100%" stopColor="#19D1D0" />
          </linearGradient>

          {/* Glow around the center */}
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#B8FFFF" />
            <stop offset="55%" stopColor="#42DDE6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#42DDE6" stopOpacity="0" />
          </radialGradient>

          <filter
            id="glow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* =========================================
            OUTER DATA / AI SHAPE
        ========================================= */}

        <path
          d="
            M150 24
            C92 24 45 55 27 100
            C19 121 16 143 17 166
            C19 221 62 266 117 276
            C157 283 200 271 228 246
            C252 224 266 193 267 159
            C267 145 263 134 255 128
            C249 123 242 122 235 124
            C232 92 215 66 191 48
            C179 38 165 30 150 24Z
          "
          fill="url(#logoMainGradient)"
        />

        {/* =========================================
            RIGHT CYAN AI / DATA WAVE
        ========================================= */}

        <path
          d="
            M173 55
            C195 56 215 66 229 82
            C240 95 246 111 246 126
            C246 139 239 151 228 157
            C219 161 209 158 203 150
            C196 141 197 128 204 119
            C210 111 216 104 215 95
            C214 82 199 72 183 69
            Z
          "
          fill="url(#networkGradient)"
          opacity="0.95"
        />

        {/* =========================================
            INNER WHITE CIRCLE
        ========================================= */}

        <circle
          cx="145"
          cy="157"
          r="103"
          fill="none"
          stroke="white"
          strokeWidth="11"
        />

        {/* =========================================
            SMALL MOON / DATA NODE
        ========================================= */}

        <circle
          cx="76"
          cy="112"
          r="15"
          fill="white"
        />

        {/* =========================================
            DATA NETWORK
        ========================================= */}

        <g
          fill="none"
          stroke="url(#networkGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M142 135 L158 112 L177 121 L194 98 L212 105" />
          <path d="M158 112 L164 94 L183 86 L198 73" />
          <path d="M177 121 L187 140 L205 128 L220 116" />
          <path d="M194 98 L205 82 L220 78" />
          <path d="M187 140 L199 150 L216 143" />
          <path d="M164 94 L151 108 L142 135" />
        </g>

        {/* Network nodes */}

        <g fill="#DDFBFF">

          <circle cx="142" cy="135" r="4" />
          <circle cx="158" cy="112" r="4" />
          <circle cx="177" cy="121" r="4" />
          <circle cx="194" cy="98" r="4" />
          <circle cx="212" cy="105" r="4" />

          <circle cx="164" cy="94" r="4" />
          <circle cx="183" cy="86" r="4" />
          <circle cx="198" cy="73" r="4" />

          <circle cx="187" cy="140" r="4" />
          <circle cx="205" cy="128" r="4" />
          <circle cx="220" cy="116" r="4" />

          <circle cx="205" cy="82" r="4" />
          <circle cx="220" cy="78" r="4" />

          <circle cx="199" cy="150" r="4" />
          <circle cx="216" cy="143" r="4" />

        </g>

        {/* =========================================
            DATA TABLE / DASHBOARD
        ========================================= */}

        <g
          fill="none"
          stroke="white"
          strokeWidth="7"
          opacity="0.96"
        >

          {/* Horizontal rows */}
          <path d="M47 169 H225" />
          <path d="M47 190 H225" />
          <path d="M47 211 H225" />
          <path d="M47 232 H218" />

          {/* Vertical columns */}
          <path d="M82 169 V248" />
          <path d="M116 169 V248" />
          <path d="M151 169 V248" />
          <path d="M186 169 V242" />

        </g>

        {/* Cyan highlighted data cells */}

        <rect
          x="117"
          y="171"
          width="32"
          height="17"
          fill="#21C8D0"
          opacity="0.8"
        />

        <rect
          x="152"
          y="192"
          width="32"
          height="17"
          fill="#21C8D0"
          opacity="0.75"
        />

        <rect
          x="83"
          y="213"
          width="32"
          height="17"
          fill="#6A55C9"
          opacity="0.75"
        />

        <rect
          x="152"
          y="214"
          width="32"
          height="17"
          fill="#21C8D0"
          opacity="0.7"
        />

        {/* =========================================
            AI ANALYSIS LIGHT
        ========================================= */}

        <circle
          cx="145"
          cy="157"
          r="42"
          fill="url(#centerGlow)"
          filter="url(#glow)"
        />

        {/* Horizontal light beam */}

        <path
          d="M92 157 H198"
          stroke="#DFFFFF"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Vertical light beam */}

        <path
          d="M145 116 V198"
          stroke="#DFFFFF"
          strokeWidth="2"
          opacity="0.65"
        />

        {/* Bright AI center */}

        <circle
          cx="145"
          cy="157"
          r="5"
          fill="white"
          filter="url(#glow)"
        />

      </svg>
    </div>
  );
}
