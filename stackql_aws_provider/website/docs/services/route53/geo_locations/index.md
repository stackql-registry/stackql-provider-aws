--- 
title: geo_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - geo_locations
  - route53
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>geo_locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="geo_locations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.geo_locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_geo_location"
    values={[
        { label: 'get_geo_location', value: 'get_geo_location' }
    ]}
>
<TabItem value="get_geo_location">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="ContinentCode" /></td>
    <td><code>string</code></td>
    <td>The two-letter code for the continent.</td>
</tr>
<tr>
    <td><CopyableCode code="ContinentName" /></td>
    <td><code>string</code></td>
    <td>The full name of the continent.</td>
</tr>
<tr>
    <td><CopyableCode code="CountryCode" /></td>
    <td><code>string</code></td>
    <td>The two-letter code for the country.</td>
</tr>
<tr>
    <td><CopyableCode code="CountryName" /></td>
    <td><code>string</code></td>
    <td>The name of the country.</td>
</tr>
<tr>
    <td><CopyableCode code="SubdivisionCode" /></td>
    <td><code>string</code></td>
    <td>The code for the subdivision, such as a particular state within the United States. For a list of US state abbreviations, see Appendix B: Two–Letter State and Possession Abbreviations on the United States Postal Service website. For a list of all supported subdivision codes, use the ListGeoLocations API.</td>
</tr>
<tr>
    <td><CopyableCode code="SubdivisionName" /></td>
    <td><code>string</code></td>
    <td>The full name of the subdivision. Route 53 currently supports only states in the United States.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_geo_location"><CopyableCode code="get_geo_location" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-continentcode"><code>continentcode</code></a>, <a href="#parameter-countrycode"><code>countrycode</code></a>, <a href="#parameter-subdivisioncode"><code>subdivisioncode</code></a></td>
    <td>Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets. Route 53 does not perform authorization for this API because it retrieves information that is already available to the public. Use the following syntax to determine whether a continent is supported for geolocation: GET /2013-04-01/geolocation?continentcode=two-letter abbreviation for a continent Use the following syntax to determine whether a country is supported for geolocation: GET /2013-04-01/geolocation?countrycode=two-character country code Use the following syntax to determine whether a subdivision of a country is supported for geolocation: GET /2013-04-01/geolocation?countrycode=two-character country code&subdivisioncode=subdivision code</td>
</tr>
<tr>
    <td><a href="#list_geo_locations"><CopyableCode code="list_geo_locations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-startcontinentcode"><code>startcontinentcode</code></a>, <a href="#parameter-startcountrycode"><code>startcountrycode</code></a>, <a href="#parameter-startsubdivisioncode"><code>startsubdivisioncode</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a></td>
    <td>Retrieves a list of supported geographic locations. Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country. Route 53 does not perform authorization for this API because it retrieves information that is already available to the public. For a list of supported geolocation codes, see the GeoLocation data type.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-continentcode">
    <td><CopyableCode code="continentcode" /></td>
    <td><code>string</code></td>
    <td>For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Amazon Route 53 supports the following continent codes: AF: Africa AN: Antarctica AS: Asia EU: Europe OC: Oceania NA: North America SA: South America</td>
</tr>
<tr id="parameter-countrycode">
    <td><CopyableCode code="countrycode" /></td>
    <td><code>string</code></td>
    <td>Amazon Route 53 uses the two-letter country codes that are specified in ISO standard 3166-1 alpha-2. Route 53 also supports the country code UA for Ukraine.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>(Optional) The maximum number of geolocations to be included in the response body for this request. If more than maxitems geolocations remain to be listed, then the value of the IsTruncated element in the response is true.</td>
</tr>
<tr id="parameter-startcontinentcode">
    <td><CopyableCode code="startcontinentcode" /></td>
    <td><code>string</code></td>
    <td>The code for the continent with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextContinentCode from the previous response has a value, enter that value in startcontinentcode to return the next page of results. Include startcontinentcode only if you want to list continents. Don't include startcontinentcode when you're listing countries or countries with their subdivisions.</td>
</tr>
<tr id="parameter-startcountrycode">
    <td><CopyableCode code="startcountrycode" /></td>
    <td><code>string</code></td>
    <td>The code for the country with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextCountryCode from the previous response has a value, enter that value in startcountrycode to return the next page of results.</td>
</tr>
<tr id="parameter-startsubdivisioncode">
    <td><CopyableCode code="startsubdivisioncode" /></td>
    <td><code>string</code></td>
    <td>The code for the state of the United States with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if IsTruncated is true, and if NextSubdivisionCode from the previous response has a value, enter that value in startsubdivisioncode to return the next page of results. To list subdivisions (U.S. states), you must include both startcountrycode and startsubdivisioncode.</td>
</tr>
<tr id="parameter-subdivisioncode">
    <td><CopyableCode code="subdivisioncode" /></td>
    <td><code>string</code></td>
    <td>The code for the subdivision, such as a particular state within the United States. For a list of US state abbreviations, see Appendix B: Two–Letter State and Possession Abbreviations on the United States Postal Service website. For a list of all supported subdivision codes, use the ListGeoLocations API.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_geo_location"
    values={[
        { label: 'get_geo_location', value: 'get_geo_location' }
    ]}
>
<TabItem value="get_geo_location">

Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets. Route 53 does not perform authorization for this API because it retrieves information that is already available to the public. Use the following syntax to determine whether a continent is supported for geolocation: GET /2013-04-01/geolocation?continentcode=two-letter abbreviation for a continent Use the following syntax to determine whether a country is supported for geolocation: GET /2013-04-01/geolocation?countrycode=two-character country code Use the following syntax to determine whether a subdivision of a country is supported for geolocation: GET /2013-04-01/geolocation?countrycode=two-character country code&subdivisioncode=subdivision code

```sql
SELECT
ContinentCode,
ContinentName,
CountryCode,
CountryName,
SubdivisionCode,
SubdivisionName
FROM aws.route53.geo_locations
WHERE region = '{{ region }}' -- required
AND continentcode = '{{ continentcode }}'
AND countrycode = '{{ countrycode }}'
AND subdivisioncode = '{{ subdivisioncode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_geo_locations"
    values={[
        { label: 'list_geo_locations', value: 'list_geo_locations' }
    ]}
>
<TabItem value="list_geo_locations">

Retrieves a list of supported geographic locations. Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country. Route 53 does not perform authorization for this API because it retrieves information that is already available to the public. For a list of supported geolocation codes, see the GeoLocation data type.

```sql
EXEC aws.route53.geo_locations.list_geo_locations 
@region='{{ region }}' --required, 
@startcontinentcode='{{ startcontinentcode }}', 
@startcountrycode='{{ startcountrycode }}', 
@startsubdivisioncode='{{ startsubdivisioncode }}', 
@maxitems='{{ maxitems }}'
;
```
</TabItem>
</Tabs>
