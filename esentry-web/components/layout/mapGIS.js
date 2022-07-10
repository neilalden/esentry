const MapGIS = () => {
	return (
		<div id='map-container'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				version='1.2'
				baseProfile='tiny'
				width='800'
				height='828'
				viewBox='0 0 800 828'
				stroke-linecap='round'
				stroke-linejoin='round'
				id='tadlac-lake'>
				<g>
					<path
						id='area-1'
						d='M 244.54 819.25 199.56 824.94 153.54 809.71 104.81 773.49 75.47 751.09 63.2 722.49 55.69 705.06 58.25 691.6 66.49 670.78 49.98 649.78 49.78 637.2 36.97 623.94 25.95 625.42 1 487.15 23.98 369.43 60.67 272.87 103.91 225.86 122.92 209.35 157.64 145.83 191.72 105.82 274.26 70.24 334.16 423.22 244.54 819.25 Z'
					/>
					<path
						id='area-2'
						d='M 334.16 423.22 274.26 70.24 311.4 64.8 461.13 36.84 561.9 16.25 622.18 1 667.39 2.27 694.25 11.79 722.42 58.79 730.29 102 746.67 147.74 774.18 217.6 784.66 272.87 787.24 321.88 799 366.12 797.26 429.67 334.16 423.22 Z'
					/>
					<path
						id='area-3'
						d='M 797.26 429.67 786.76 510.16 758.16 566.97 723.16 597.1 710.7 633.86 699.33 684.78 688.51 705.25 652.77 735.7 607.82 757.23 562.89 753.54 547.82 749.46 524.44 742.52 463.8 770.86 456.76 780.32 458.93 792.91 396.66 827.04 340.35 826.52 285.12 818.11 244.54 819.25 334.16 423.22 797.26 429.67 Z'
					/>
				</g>
				<defs>
					<radialGradient
						id='grad1'
						fx='0%'
						fy='50%'
						r='150%'
						cx='50%'
						cy='50%'>
						<stop
							id='area1-stop-0'
							offset='0%'
							style={{ stopColor: "#9cc0fa" }}
						/>
						<stop
							id='area1-stop-10'
							offset='10%'
							style={{ stopColor: "#9cc0fa" }}
						/>

						<stop
							id='area1-stop-100'
							offset='100%'
							style={{ stopColor: "#fff" }}
						/>
					</radialGradient>
					<radialGradient
						id='grad2'
						fx='75%'
						fy='0%'
						r='150%'
						cx='65%'
						cy='65%'>
						<stop
							id='area2-stop-0'
							offset='0%'
							style={{ stopColor: "#9cc0fa" }}
						/>
						<stop
							id='area2-stop-10'
							offset='10%'
							style={{ stopColor: "#9cc0fa" }}
						/>
						<stop
							id='area2-stop-100'
							offset='100%'
							style={{ stopColor: "#fff" }}
						/>
					</radialGradient>
					<radialGradient
						id='grad3'
						fx='75%'
						fy='75%'
						r='150%'
						cx='65%'
						cy='65%'>
						<stop
							id='area3-stop-0'
							offset='0%'
							style={{ stopColor: "#9cc0fa" }}
						/>
						<stop
							id='area3-stop-10'
							offset='10%'
							style={{ stopColor: "#9cc0fa" }}
						/>
						<stop
							id='area3-stop-100'
							offset='100%'
							style={{ stopColor: "#fff" }}
						/>
					</radialGradient>
					<linearGradient id='linear-grad' x1='0%' y1='0%' x2='0%' y2='100%'>
						<stop offset='10%' style={{ stopColor: "red", stopOpacity: 1 }} />
						<stop
							offset='20%'
							style={{ stopColor: "#ff4500", stopOpacity: 1 }}
						/>
						<stop
							offset='30%'
							style={{ stopColor: "orange", stopOpacity: 1 }}
						/>
						<stop offset='40%' style={{ stopColor: "gold", stopOpacity: 1 }} />
						<stop
							offset='50%'
							style={{ stopColor: "yellow", stopOpacity: 1 }}
						/>
						<stop
							offset='60%'
							style={{ stopColor: "#ccff33", stopOpacity: 1 }}
						/>
						<stop
							offset='70%'
							style={{ stopColor: "#66ff33", stopOpacity: 1 }}
						/>
						<stop
							offset='80%'
							style={{ stopColor: "#00ff99", stopOpacity: 1 }}
						/>
						<stop
							offset='90%'
							style={{ stopColor: "#33cccc", stopOpacity: 1 }}
						/>
						<stop
							offset='100%'
							style={{ stopColor: "#0099cc", stopOpacity: 1 }}
						/>
					</linearGradient>

					<clipPath id='location-pin'>
						<circle cx='350' cy='290' r='400' />
					</clipPath>
				</defs>
				<image
					width='50'
					height='80'
					xlinkHref='Google_Maps_pin.svg'
					clip-path='url(#location-pin)'
					x='327'
					y='381'
				/>
				<text x='380' y='430'>
					Tadlac Lake
				</text>
				<text x='50' y='430' class='area-text' id='area-text-1'>
					Area 1
				</text>
				<text x='500' y='80' class='area-text' id='area-text-2'>
					Area 2
				</text>
				<text x='500' y='700' class='area-text' id='area-text-3'>
					Area 3
				</text>
			</svg>
		</div>
	);
};

export default MapGIS;
