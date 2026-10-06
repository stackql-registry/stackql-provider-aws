--- 
title: place_indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - place_indexes
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

Creates, updates, deletes, gets or lists a <code>place_indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="place_indexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.place_indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_place_index_for_position"
    values={[
        { label: 'search_place_index_for_position', value: 'search_place_index_for_position' },
        { label: 'search_place_index_for_suggestions', value: 'search_place_index_for_suggestions' },
        { label: 'describe_place_index', value: 'describe_place_index' },
        { label: 'list_place_indexes', value: 'list_place_indexes' }
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
<TabItem value="describe_place_index">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the place index resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source" /></td>
    <td><code>string</code></td>
    <td>The data provider of geospatial data. Values can be one of the following: Esri Grab Here For more information about data providers, see Amazon Location Service data providers.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the data storage option chosen for requesting Places. When using Amazon Location Places: If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting IntendedUse to Storage. parameter. Under the MobileAssetTracking or MobilAssetManagement pricing plan, you can't store results from your place index resources by setting IntendedUse to Storage. This returns a validation exception error. For more information, see the AWS Service Terms for Amazon Location Service.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description for the place index resource.</td>
</tr>
<tr>
    <td><CopyableCode code="index_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource across Amazon Web Services. Format example: arn:aws:geo:region:account-id:place-index/ExamplePlaceIndex (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*):geo(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*))(:&#91;0-9&#93;+):((\*)|(&#91;-a-z&#93;+&#91;/&#93;&#91;*-._\w&#93;+))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The name of the place index resource being described. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with place index resource.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the place index resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_place_indexes">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the place index resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source" /></td>
    <td><code>string</code></td>
    <td>The data provider of geospatial data. Values can be one of the following: Esri Grab Here For more information about data providers, see Amazon Location Service data providers.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description for the place index resource.</td>
</tr>
<tr>
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The name of the place index resource. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the place index resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
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
<tr>
    <td><a href="#search_place_index_for_suggestions"><CopyableCode code="search_place_index_for_suggestions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to Suggest or Autocomplete unless you require Grab data. SearchPlaceIndexForSuggestions is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 Suggest operation gives better results for typeahead place search suggestions with fuzzy matching, while the version 2 Autocomplete operation gives better results for address completion based on partial input. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching. Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe. You can search for suggested place names near a specified position by using BiasPosition, or filter results within a bounding box by using FilterBBox. These parameters are mutually exclusive; using both BiasPosition and FilterBBox in the same command returns an error.</td>
</tr>
<tr>
    <td><a href="#describe_place_index"><CopyableCode code="describe_place_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. DescribePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Retrieves the place index resource details.</td>
</tr>
<tr>
    <td><a href="#list_place_indexes"><CopyableCode code="list_place_indexes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. ListPlaceIndexes is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Lists place index resources in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_place_index"><CopyableCode code="create_place_index" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexName"><code>IndexName</code></a>, <a href="#parameter-DataSource"><code>DataSource</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. CreatePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the SearchPlaceIndexForText operation, and reverse geocode coordinates by using the SearchPlaceIndexForPosition operation, and enable autosuggestions by using the SearchPlaceIndexForSuggestions operation. If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the Amazon Web Services service terms for more details.</td>
</tr>
<tr>
    <td><a href="#update_place_index"><CopyableCode code="update_place_index" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. UpdatePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Updates the specified properties of a given place index resource.</td>
</tr>
<tr>
    <td><a href="#delete_place_index"><CopyableCode code="delete_place_index" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. DeletePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Deletes a place index resource from your Amazon Web Services account. This operation deletes the resource permanently.</td>
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
    <td>The name of the place index resource to be deleted.</td>
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
        { label: 'search_place_index_for_position', value: 'search_place_index_for_position' },
        { label: 'search_place_index_for_suggestions', value: 'search_place_index_for_suggestions' },
        { label: 'describe_place_index', value: 'describe_place_index' },
        { label: 'list_place_indexes', value: 'list_place_indexes' }
    ]}
>
<TabItem value="search_place_index_for_position">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to ReverseGeocode or SearchNearby unless you require Grab data. SearchPlaceIndexForPosition is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 ReverseGeocode operation gives better results in the address reverse-geocoding use case, while the version 2 SearchNearby operation gives better results when searching for businesses and points of interest near a specific location. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.

```sql
SELECT
results,
summary
FROM aws.location.place_indexes
WHERE index_name = '{{ index_name }}' -- required
AND region = '{{ region }}' -- required
AND key = '{{ key }}'
;
```
</TabItem>
<TabItem value="search_place_index_for_suggestions">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to Suggest or Autocomplete unless you require Grab data. SearchPlaceIndexForSuggestions is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 Suggest operation gives better results for typeahead place search suggestions with fuzzy matching, while the version 2 Autocomplete operation gives better results for address completion based on partial input. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching. Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe. You can search for suggested place names near a specified position by using BiasPosition, or filter results within a bounding box by using FilterBBox. These parameters are mutually exclusive; using both BiasPosition and FilterBBox in the same command returns an error.

```sql
SELECT
results,
summary
FROM aws.location.place_indexes
WHERE index_name = '{{ index_name }}' -- required
AND region = '{{ region }}' -- required
AND key = '{{ key }}'
;
```
</TabItem>
<TabItem value="describe_place_index">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. DescribePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Retrieves the place index resource details.

```sql
SELECT
create_time,
data_source,
data_source_configuration,
description,
index_arn,
index_name,
pricing_plan,
tags,
update_time
FROM aws.location.place_indexes
WHERE index_name = '{{ index_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_place_indexes">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. ListPlaceIndexes is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Lists place index resources in your Amazon Web Services account.

```sql
SELECT
create_time,
data_source,
description,
index_name,
pricing_plan,
update_time
FROM aws.location.place_indexes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_place_index"
    values={[
        { label: 'create_place_index', value: 'create_place_index' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_place_index">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. CreatePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the SearchPlaceIndexForText operation, and reverse geocode coordinates by using the SearchPlaceIndexForPosition operation, and enable autosuggestions by using the SearchPlaceIndexForSuggestions operation. If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the Amazon Web Services service terms for more details.

```sql
INSERT INTO aws.location.place_indexes (
IndexName,
DataSource,
PricingPlan,
Description,
DataSourceConfiguration,
Tags,
region
)
SELECT 
'{{ IndexName }}' /* required */,
'{{ DataSource }}' /* required */,
'{{ PricingPlan }}',
'{{ Description }}',
'{{ DataSourceConfiguration }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
create_time,
index_arn,
index_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: place_indexes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the place_indexes resource.
    - name: IndexName
      value: "{{ IndexName }}"
    - name: DataSource
      value: "{{ DataSource }}"
    - name: PricingPlan
      value: "{{ PricingPlan }}"
      valid_values: ['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement']
    - name: Description
      value: "{{ Description }}"
    - name: DataSourceConfiguration
      description: |
        Specifies the data storage option chosen for requesting Places. When using Amazon Location Places: If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting IntendedUse to Storage. parameter. Under the MobileAssetTracking or MobilAssetManagement pricing plan, you can't store results from your place index resources by setting IntendedUse to Storage. This returns a validation exception error. For more information, see the AWS Service Terms for Amazon Location Service.
      value:
        IntendedUse: "{{ IntendedUse }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_place_index"
    values={[
        { label: 'update_place_index', value: 'update_place_index' }
    ]}
>
<TabItem value="update_place_index">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. UpdatePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Updates the specified properties of a given place index resource.

```sql
UPDATE aws.location.place_indexes
SET 
PricingPlan = '{{ PricingPlan }}',
Description = '{{ Description }}',
DataSourceConfiguration = '{{ DataSourceConfiguration }}'
WHERE 
index_name = '{{ index_name }}' --required
AND region = '{{ region }}' --required
RETURNING
index_arn,
index_name,
update_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_place_index"
    values={[
        { label: 'delete_place_index', value: 'delete_place_index' }
    ]}
>
<TabItem value="delete_place_index">

This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data. DeletePlaceIndex is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Places API version 2 has a simplified interface that can be used without creating or managing place index resources. If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under geo-places or geo_places, not under location. Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Places V2 API Reference or the Developer Guide. Deletes a place index resource from your Amazon Web Services account. This operation deletes the resource permanently.

```sql
DELETE FROM aws.location.place_indexes
WHERE index_name = '{{ index_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
