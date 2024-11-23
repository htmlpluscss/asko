<!DOCTYPE html>
<html lang="ru" prefix="og: https://ogp.me/ns#">
<head>

	<meta charset="utf-8">

	<title>Техника для кухни Asko. Купить Asko.</title>

	<link href="/css/styles.css?1732343736113" rel="stylesheet">
	<script defer src="/js/scripts.js?1732343736113"></script>

</head>

<body>
<?php

	function normalizeGetParamsToString($params, $prefix = '') {
		$normalized = [];

		foreach ($params as $key => $value) {
			$currentKey = $prefix ? $prefix . '[' . $key . ']' : $key;
			if (is_array($value)) {
				if (array_keys($value) === range(0, count($value) - 1)) {
					foreach ($value as $val) {
						$normalized[] = $currentKey . '[]=' . $val;
					}
				} else {
					$normalized[] = normalizeGetParamsToString($value, $currentKey);
				}
			} else {
				$normalized[] = $currentKey . '=' . $value;
			}
		}

		return implode('&', $normalized);
	}

	function getNormalizedQueryString() {
		return normalizeGetParamsToString($_GET);
	}

	function getBtn($key,$value) {
		return isset($_GET['ATTR'][$key]) && in_array($value, $_GET['ATTR'][$key]) ? 'red' : 'gray';
	}

	function getHref($key,$value) {
		$href = 'ATTR[' . $key . '][]=' . $value;
		if ( empty($_GET) ) {
			return 'catalogue.php?' . $href;
		}
		$queryString = getNormalizedQueryString();
		if ( getBtn($key,$value) === 'gray' ) {
			return 'catalogue.php?' . $href . '&' . $queryString;
		}
		$queryString = str_replace($href, '', $queryString);
		$queryString = rtrim($queryString, '&');
		return 'catalogue.php?' . $queryString;
	}

?>
	<aside class="filter filter-fast">

		<div class="filter-fast__fieldset">

			<p class="filter__label">
				Скорость отжима
			</p>

			<div class="filter-fast__btns">

				<a class="btn btn--<?php echo getBtn(103,112); ?>" href="<?php echo getHref(103,112); ?>">
					1400
				</a>

				<a class="btn btn--<?php echo getBtn(103,111); ?>" href="<?php echo getHref(103,111); ?>">
					1600
				</a>

				<a class="btn btn--<?php echo getBtn(103,125); ?>" href="<?php echo getHref(103,125); ?>">
					1800
				</a>

			</div>

		</div>

		<hr>

		<div class="filter-fast__fieldset">

			<p class="filter__label">
				Объем загрузки <i>(кг)</i>
			</p>

			<div class="filter-fast__btns">

				<a class="btn btn--<?php echo getBtn(102,108); ?>" href="<?php echo getHref(102,108); ?>">
					8 кг
				</a>

				<a class="btn btn--<?php echo getBtn(102,109); ?>" href="<?php echo getHref(102,109); ?>">
					9 кг
				</a>

				<a class="btn btn--<?php echo getBtn(102,184); ?>" href="<?php echo getHref(102,184); ?>">
					11 кг
				</a>

			</div>

		</div>

		<hr>

		<div class="filter-fast__foot">

			<button class="btn btn--link filter__open-full" type="button" data-modal="filter">
				<span>Все фильтры</span>
			</button>

			<a class="btn btn--link" href="/catalog/filter/">
				Сбросить
			</a>

		</div>

	</aside>

</body>
</html>