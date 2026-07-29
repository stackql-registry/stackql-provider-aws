--- 
title: places
hide_title: false
hide_table_of_contents: false
keywords:
  - places
  - location
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.places" /></td></tr>
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
    <td><CopyableCode code="address_number" /></td>
    <td><code>string</code></td>
    <td>The numerical portion of an address, such as a building number.</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>The Amazon Location categories that describe this Place. For more information about using categories, including a list of Amazon Location categories, see Categories and filtering, in the Amazon Location Service developer guide.</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>A country/region specified using ISO 3166 3-digit country/region code. For example, CAN.</td>
</tr>
<tr>
    <td><CopyableCode code="geometry" /></td>
    <td><code>object</code></td>
    <td>Places uses a point geometry to specify a location or a Place.</td>
</tr>
<tr>
    <td><CopyableCode code="interpolated" /></td>
    <td><code>boolean</code></td>
    <td>True if the result is interpolated from other known places. False if the Place is a known place. Not returned when the partner does not provide the information. For example, returns False for an address location that is found in the partner data, but returns True if an address does not exist in the partner data and its location is calculated by interpolating between other known addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The full name and address of the point of interest such as a city, region, or country. For example, 123 Any Street, Any Town, USA.</td>
</tr>
<tr>
    <td><CopyableCode code="municipality" /></td>
    <td><code>string</code></td>
    <td>A name for a local area, such as a city or town name. For example, Toronto.</td>
</tr>
<tr>
    <td><CopyableCode code="neighborhood" /></td>
    <td><code>string</code></td>
    <td>The name of a community district. For example, Downtown.</td>
</tr>
<tr>
    <td><CopyableCode code="postal_code" /></td>
    <td><code>string</code></td>
    <td>A group of numbers and letters in a country-specific format, which accompanies the address for the purpose of identifying a location.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>A name for an area or geographical division, such as a province or state name. For example, British Columbia.</td>
</tr>
<tr>
    <td><CopyableCode code="street" /></td>
    <td><code>string</code></td>
    <td>The name for a street or a road to identify a location. For example, Main Street.</td>
</tr>
<tr>
    <td><CopyableCode code="sub_municipality" /></td>
    <td><code>string</code></td>
    <td>An area that's part of a larger municipality. For example, Blissville is a submunicipality in the Queen County in New York. This property supported by Esri and OpenData. The Esri property is district, and the OpenData property is borough.</td>
</tr>
<tr>
    <td><CopyableCode code="sub_region" /></td>
    <td><code>string</code></td>
    <td>A county, or an area that's part of a larger region. For example, Metro Vancouver.</td>
</tr>
<tr>
    <td><CopyableCode code="supplemental_categories" /></td>
    <td><code>array</code></td>
    <td>Categories from the data provider that describe the Place that are not mapped to any Amazon Location categories.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>object</code></td>
    <td>The time zone in which the Place is located. Returned only when using HERE or Grab as the selected partner.</td>
</tr>
<tr>
    <td><CopyableCode code="unit_number" /></td>
    <td><code>string</code></td>
    <td>For addresses with multiple units, the unit identifier. Can include numbers and letters, for example 3B or Unit 123. Returned only for a place index that uses Esri or Grab as a data provider. Is not returned for SearchPlaceIndexForPosition.</td>
</tr>
<tr>
    <td><CopyableCode code="unit_type" /></td>
    <td><code>string</code></td>
    <td>For addresses with a UnitNumber, the type of unit. For example, Apartment. Returned only for a place index that uses Esri as a data provider.</td>
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
    <td><a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-place_id"><code>place_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-language"><code>language</code></a>, <a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the V2 GetPlace operation unless you require Grab data. This version of GetPlace is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). Version 2 of the GetPlace operation interoperates with the rest of the Places V2 API, while this version does not. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Finds a place by its unique ID. A PlaceId is returned by other search operations. A PlaceId is valid only if all of the following are the same in the original search request and the call to GetPlace. Customer Amazon Web Services account Amazon Web Services Region Data provider specified in the place index resource If your Place index resource is configured with Grab as your geolocation provider and Storage as Intended use, the GetPlace operation is unavailable. For more information, see AWS service terms.</td>
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
<tr id="parameter-index_name">
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The name of the place index resource that you want to use for the search.</td>
</tr>
<tr id="parameter-place_id">
    <td><CopyableCode code="place_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the place to find.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The optional API key to authorize the request.</td>
</tr>
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The preferred language used to return results. The value must be a valid BCP 47 language tag, for example, en for English. This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result. For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the language parameter set to en. The city in the results will most likely be returned as Athens. If you set the language parameter to el, for Greek, then the city in the results will more likely be returned as Αθήνα. If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</td>
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

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the V2 GetPlace operation unless you require Grab data. This version of GetPlace is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). Version 2 of the GetPlace operation interoperates with the rest of the Places V2 API, while this version does not. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Finds a place by its unique ID. A PlaceId is returned by other search operations. A PlaceId is valid only if all of the following are the same in the original search request and the call to GetPlace. Customer Amazon Web Services account Amazon Web Services Region Data provider specified in the place index resource If your Place index resource is configured with Grab as your geolocation provider and Storage as Intended use, the GetPlace operation is unavailable. For more information, see AWS service terms.

```sql
SELECT
address_number,
categories,
country,
geometry,
interpolated,
label,
municipality,
neighborhood,
postal_code,
region,
street,
sub_municipality,
sub_region,
supplemental_categories,
time_zone,
unit_number,
unit_type
FROM aws.location.places
WHERE index_name = '{{ index_name }}' -- required
AND place_id = '{{ place_id }}' -- required
AND region = '{{ region }}' -- required
AND language = '{{ language }}'
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
