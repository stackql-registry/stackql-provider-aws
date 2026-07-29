--- 
title: place_index_for_suggestions
hide_title: false
hide_table_of_contents: false
keywords:
  - place_index_for_suggestions
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

Creates, updates, deletes, gets or lists a <code>place_index_for_suggestions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="place_index_for_suggestions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.place_index_for_suggestions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_place_index_for_suggestions"
    values={[
        { label: 'search_place_index_for_suggestions', value: 'search_place_index_for_suggestions' }
    ]}
>
<TabItem value="search_place_index_for_suggestions">

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
    <td>A list of place suggestions that best match the search text.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>object</code></td>
    <td>Contains a summary of the request. Echoes the input values for BiasPosition, FilterBBox, FilterCountries, Language, MaxResults, and Text. Also includes the DataSource of the place index.</td>
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
    <td><a href="#search_place_index_for_suggestions"><CopyableCode code="search_place_index_for_suggestions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to Suggest or Autocomplete unless you require Grab data. SearchPlaceIndexForSuggestions is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 Suggest operation gives better results for typeahead place search suggestions with fuzzy matching, while the version 2 Autocomplete operation gives better results for address completion based on partial input. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching. Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe. You can search for suggested place names near a specified position by using BiasPosition, or filter results within a bounding box by using FilterBBox. These parameters are mutually exclusive; using both BiasPosition and FilterBBox in the same command returns an error.</td>
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
    defaultValue="search_place_index_for_suggestions"
    values={[
        { label: 'search_place_index_for_suggestions', value: 'search_place_index_for_suggestions' }
    ]}
>
<TabItem value="search_place_index_for_suggestions">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to Suggest or Autocomplete unless you require Grab data. SearchPlaceIndexForSuggestions is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 Suggest operation gives better results for typeahead place search suggestions with fuzzy matching, while the version 2 Autocomplete operation gives better results for address completion based on partial input. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching. Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe. You can search for suggested place names near a specified position by using BiasPosition, or filter results within a bounding box by using FilterBBox. These parameters are mutually exclusive; using both BiasPosition and FilterBBox in the same command returns an error.

```sql
SELECT
results,
summary
FROM aws.location.place_index_for_suggestions
WHERE index_name = '{{ index_name }}' -- required
AND region = '{{ region }}' -- required
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
