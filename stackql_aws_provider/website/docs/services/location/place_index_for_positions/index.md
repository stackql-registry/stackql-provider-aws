--- 
title: place_index_for_positions
hide_title: false
hide_table_of_contents: false
keywords:
  - place_index_for_positions
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

Creates, updates, deletes, gets or lists a <code>place_index_for_positions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="place_index_for_positions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.place_index_for_positions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_place_index_for_position"
    values={[
        { label: 'search_place_index_for_position', value: 'search_place_index_for_position' }
    ]}
>
<TabItem value="search_place_index_for_position">

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
    <td><CopyableCode code="results" /></td>
    <td><code>array</code></td>
    <td>Returns a list of Places closest to the specified position. Each result contains additional information about the Places returned.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>object</code></td>
    <td>Contains a summary of the request. Echoes the input values for Position, Language, MaxResults, and the DataSource of the place index.</td>
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
    <td><a href="#search_place_index_for_position"><CopyableCode code="search_place_index_for_position" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to ReverseGeocode or SearchNearby unless you require Grab data. SearchPlaceIndexForPosition is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 ReverseGeocode operation gives better results in the address reverse-geocoding use case, while the version 2 SearchNearby operation gives better results when searching for businesses and points of interest near a specific location. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.</td>
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
    <td>The name of the place index resource you want to use for the search.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_place_index_for_position"
    values={[
        { label: 'search_place_index_for_position', value: 'search_place_index_for_position' }
    ]}
>
<TabItem value="search_place_index_for_position">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to ReverseGeocode or SearchNearby unless you require Grab data. SearchPlaceIndexForPosition is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 ReverseGeocode operation gives better results in the address reverse-geocoding use case, while the version 2 SearchNearby operation gives better results when searching for businesses and points of interest near a specific location. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.

```sql
SELECT
results,
summary
FROM aws.location.place_index_for_positions
WHERE index_name = '{{ index_name }}' -- required
AND region = '{{ region }}' -- required
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
