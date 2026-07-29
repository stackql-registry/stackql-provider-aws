--- 
title: map_style_descriptors
hide_title: false
hide_table_of_contents: false
keywords:
  - map_style_descriptors
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

Creates, updates, deletes, gets or lists a <code>map_style_descriptors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="map_style_descriptors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.map_style_descriptors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_map_style_descriptor"
    values={[
        { label: 'get_map_style_descriptor', value: 'get_map_style_descriptor' }
    ]}
>
<TabItem value="get_map_style_descriptor">

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
    <td><CopyableCode code="blob" /></td>
    <td><code>string (byte)</code></td>
    <td>Contains the body of the style descriptor.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_control" /></td>
    <td><code>string</code></td>
    <td>The HTTP Cache-Control directive for the value.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The style descriptor's content type. For example, application/json.</td>
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
    <td><a href="#get_map_style_descriptor"><CopyableCode code="get_map_style_descriptor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-map_name"><code>map_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend upgrading to GetStyleDescriptor unless you require Grab data. GetMapStyleDescriptor is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 GetStyleDescriptor operation gives a better user experience and is compatible with the remainder of the V2 Maps API. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves the map style descriptor from a map resource. The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</td>
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
<tr id="parameter-map_name">
    <td><CopyableCode code="map_name" /></td>
    <td><code>string</code></td>
    <td>The map resource to retrieve the style descriptor from.</td>
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
    defaultValue="get_map_style_descriptor"
    values={[
        { label: 'get_map_style_descriptor', value: 'get_map_style_descriptor' }
    ]}
>
<TabItem value="get_map_style_descriptor">

This operation is no longer current and may be deprecated in the future. We recommend upgrading to GetStyleDescriptor unless you require Grab data. GetMapStyleDescriptor is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The version 2 GetStyleDescriptor operation gives a better user experience and is compatible with the remainder of the V2 Maps API. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves the map style descriptor from a map resource. The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.

```sql
SELECT
blob,
cache_control,
content_type
FROM aws.location.map_style_descriptors
WHERE map_name = '{{ map_name }}' -- required
AND region = '{{ region }}' -- required
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
