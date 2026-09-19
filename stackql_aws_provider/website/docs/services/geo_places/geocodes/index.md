--- 
title: geocodes
hide_title: false
hide_table_of_contents: false
keywords:
  - geocodes
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

Creates, updates, deletes, gets or lists a <code>geocodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="geocodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_places.geocodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#geocode"><CopyableCode code="geocode" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>Geocode converts a textual address or place into geographic coordinates. You can obtain geographic coordinates, address component, and other related information. It supports flexible queries, including free-form text or structured queries with components like street names, postal codes, and regions. The Geocode API can also provide additional features such as time zone information and the inclusion of political views. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. For more information, see Geocode in the Amazon Location Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#reverse_geocode"><CopyableCode code="reverse_geocode" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryPosition"><code>QueryPosition</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>ReverseGeocode converts geographic coordinates into a human-readable address or place. You can obtain address component, and other related information such as place type, category, street information. The Reverse Geocode API supports filtering to on place type so that you can refine result based on your need. Also, The Reverse Geocode API can also provide additional features such as time zone information and the inclusion of political views. For more information, see Reverse Geocode in the Amazon Location Service Developer Guide.</td>
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
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="geocode"
    values={[
        { label: 'geocode', value: 'geocode' },
        { label: 'reverse_geocode', value: 'reverse_geocode' }
    ]}
>
<TabItem value="geocode">

Geocode converts a textual address or place into geographic coordinates. You can obtain geographic coordinates, address component, and other related information. It supports flexible queries, including free-form text or structured queries with components like street names, postal codes, and regions. The Geocode API can also provide additional features such as time zone information and the inclusion of political views. Not supported in ap-southeast-1 and ap-southeast-5 regions for GrabMaps customers. For more information, see Geocode in the Amazon Location Service Developer Guide.

```sql
EXEC aws.geo_places.geocodes.geocode 
@region='{{ region }}' --required, 
@key='{{ key }}' 
@@json=
'{
"QueryText": "{{ QueryText }}", 
"QueryComponents": "{{ QueryComponents }}", 
"MaxResults": {{ MaxResults }}, 
"BiasPosition": "{{ BiasPosition }}", 
"Filter": "{{ Filter }}", 
"AdditionalFeatures": "{{ AdditionalFeatures }}", 
"Language": "{{ Language }}", 
"PoliticalView": "{{ PoliticalView }}", 
"IntendedUse": "{{ IntendedUse }}", 
"PostalCodeMode": "{{ PostalCodeMode }}", 
"AddressTranslations": "{{ AddressTranslations }}", 
"AddressNamesMode": "{{ AddressNamesMode }}"
}'
;
```
</TabItem>
<TabItem value="reverse_geocode">

ReverseGeocode converts geographic coordinates into a human-readable address or place. You can obtain address component, and other related information such as place type, category, street information. The Reverse Geocode API supports filtering to on place type so that you can refine result based on your need. Also, The Reverse Geocode API can also provide additional features such as time zone information and the inclusion of political views. For more information, see Reverse Geocode in the Amazon Location Service Developer Guide.

```sql
EXEC aws.geo_places.geocodes.reverse_geocode 
@region='{{ region }}' --required, 
@key='{{ key }}' 
@@json=
'{
"QueryPosition": "{{ QueryPosition }}", 
"QueryRadius": {{ QueryRadius }}, 
"MaxResults": {{ MaxResults }}, 
"Filter": "{{ Filter }}", 
"AdditionalFeatures": "{{ AdditionalFeatures }}", 
"Language": "{{ Language }}", 
"PoliticalView": "{{ PoliticalView }}", 
"IntendedUse": "{{ IntendedUse }}", 
"Heading": {{ Heading }}, 
"AddressNamesMode": "{{ AddressNamesMode }}"
}'
;
```
</TabItem>
</Tabs>
