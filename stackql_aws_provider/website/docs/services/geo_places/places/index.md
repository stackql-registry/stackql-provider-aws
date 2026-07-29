--- 
title: places
hide_title: false
hide_table_of_contents: false
keywords:
  - places
  - geo_places
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

Creates, updates, deletes, gets or lists a <code>places</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="places" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_places.places" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_place"
    values={[
        { label: 'get_place', value: 'get_place' }
    ]}
>
<TabItem value="get_place">

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
    <td><CopyableCode code="access_points" /></td>
    <td><code>array</code></td>
    <td>Position of the access point in World Geodetic System (WGS 84) format: &#91;longitude, latitude&#93;. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
<tr>
    <td><CopyableCode code="access_restrictions" /></td>
    <td><code>array</code></td>
    <td>Indicates known access restrictions on a vehicle access point. The index correlates to an access point and indicates if access through this point has some form of restriction. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>The place address.</td>
</tr>
<tr>
    <td><CopyableCode code="address_number_corrected" /></td>
    <td><code>boolean</code></td>
    <td>Boolean indicating if the address provided has been corrected. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
<tr>
    <td><CopyableCode code="business_chains" /></td>
    <td><code>array</code></td>
    <td>The Business Chains associated with the place.</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Categories of results that results must belong to.</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>object</code></td>
    <td>List of potential contact methods for the result/place. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
<tr>
    <td><CopyableCode code="food_types" /></td>
    <td><code>array</code></td>
    <td>List of food types offered by this result. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
<tr>
    <td><CopyableCode code="main_address" /></td>
    <td><code>object</code></td>
    <td>Place that is related to the result item.</td>
</tr>
<tr>
    <td><CopyableCode code="map_view" /></td>
    <td><code>array</code></td>
    <td>The bounding box enclosing the geometric shape (area or line) that an individual result covers. The bounding box formed is defined as a set of four coordinates: &#91;&#123;westward lng&#125;, &#123;southern lat&#125;, &#123;eastward lng&#125;, &#123;northern lat&#125;&#93;</td>
</tr>
<tr>
    <td><CopyableCode code="opening_hours" /></td>
    <td><code>array</code></td>
    <td>List of opening hours objects. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
<tr>
    <td><CopyableCode code="phonemes" /></td>
    <td><code>object</code></td>
    <td>How the various components of the result's address are pronounced in various languages. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
<tr>
    <td><CopyableCode code="place_id" /></td>
    <td><code>string</code></td>
    <td>The PlaceId of the place you wish to receive the information for.</td>
</tr>
<tr>
    <td><CopyableCode code="place_type" /></td>
    <td><code>string</code></td>
    <td>A PlaceType is a category that the result place must belong to. (Country, Region, SubRegion, Locality, District, SubDistrict, PostalCode, Block, SubBlock, Intersection, Street, PointOfInterest, PointAddress, InterpolatedAddress, SecondaryAddress, InferredSecondaryAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="political_view" /></td>
    <td><code>string</code></td>
    <td>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>array</code></td>
    <td>The position in World Geodetic System (WGS 84) format: &#91;longitude, latitude&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="postal_code_details" /></td>
    <td><code>array</code></td>
    <td>Contains details about the postal code of the place/result. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_bucket" /></td>
    <td><code>string</code></td>
    <td>The pricing bucket for which the query is charged at. For more information on pricing, please visit Amazon Location Service Pricing.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_addresses" /></td>
    <td><code>array</code></td>
    <td>All secondary addresses that are associated with a main address. A secondary address is one that includes secondary designators, such as a Suite or Unit Number, Building, or Floor information. Not available in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. Coverage for this functionality is available in the following countries: AUS, CAN, NZL, USA, PRI.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>object</code></td>
    <td>The time zone in which the place is located.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The localized display name of this result item based on request parameter language.</td>
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
    <td><a href="#get_place"><CopyableCode code="get_place" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-place_id"><code>place_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-additional-features"><code>additional-features</code></a>, <a href="#parameter-language"><code>language</code></a>, <a href="#parameter-political-view"><code>political-view</code></a>, <a href="#parameter-intended-use"><code>intended-use</code></a>, <a href="#parameter-key"><code>key</code></a></td>
    <td>GetPlace finds a place by its unique ID. A PlaceId is returned by other place operations. For more information, see GetPlace in the Amazon Location Service Developer Guide.</td>
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
<tr id="parameter-place_id">
    <td><CopyableCode code="place_id" /></td>
    <td><code>string</code></td>
    <td>The PlaceId of the place you wish to receive the information for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-additional-features">
    <td><CopyableCode code="additional-features" /></td>
    <td><code>array</code></td>
    <td>A list of optional additional parameters such as time zone that can be requested for each result. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the TimeZone value.</td>
</tr>
<tr id="parameter-intended-use">
    <td><CopyableCode code="intended-use" /></td>
    <td><code>string</code></td>
    <td>Indicates if the query results will be persisted in customer infrastructure. Defaults to SingleUse (not stored). Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. When storing GetPlace responses, you must set this field to Storage to comply with the terms of service. These requests will be charged at a higher rate. Please review the user agreement and service pricing structure to determine the correct setting for your use case.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</td>
</tr>
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>A list of BCP 47 compliant language codes for the results to be rendered in. If there is no data for the result in the requested language, data will be returned in the default language for the entry. For GrabMaps customers, ap-southeast-1 and ap-southeast-5 regions support only the following codes: en, id, km, lo, ms, my, pt, th, tl, vi, zh</td>
</tr>
<tr id="parameter-political-view">
    <td><CopyableCode code="political-view" /></td>
    <td><code>string</code></td>
    <td>The alpha-2 or alpha-3 character code for the political view of a country. The political view applies to the results of the request to represent unresolved territorial claims through the point of view of the specified country. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_place"
    values={[
        { label: 'get_place', value: 'get_place' }
    ]}
>
<TabItem value="get_place">

GetPlace finds a place by its unique ID. A PlaceId is returned by other place operations. For more information, see GetPlace in the Amazon Location Service Developer Guide.

```sql
SELECT
access_points,
access_restrictions,
address,
address_number_corrected,
business_chains,
categories,
contacts,
food_types,
main_address,
map_view,
opening_hours,
phonemes,
place_id,
place_type,
political_view,
position,
postal_code_details,
pricing_bucket,
secondary_addresses,
time_zone,
title
FROM aws.geo_places.places
WHERE place_id = '{{ place_id }}' -- required
AND region = '{{ region }}' -- required
AND `additional-features` = '{{ additional-features }}'
AND language = '{{ language }}'
AND `political-view` = '{{ political-view }}'
AND `intended-use` = '{{ intended-use }}'
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
