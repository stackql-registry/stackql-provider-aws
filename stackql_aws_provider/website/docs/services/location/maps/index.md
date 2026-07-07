--- 
title: maps
hide_title: false
hide_table_of_contents: false
keywords:
  - maps
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

Creates, updates, deletes, gets or lists a <code>maps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.maps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_map"
    values={[
        { label: 'describe_map', value: 'describe_map' },
        { label: 'list_maps', value: 'list_maps' }
    ]}
>
<TabItem value="describe_map">

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
    <td><CopyableCode code="Configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the map tile style selected from an available provider.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the map resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSource" /></td>
    <td><code>string</code></td>
    <td>Specifies the data provider for the associated map tiles.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The optional description for the map resource.</td>
</tr>
<tr>
    <td><CopyableCode code="MapArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across all Amazon Web Services. Format example: arn:aws:geo:region:account-id:map/ExampleMap (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*):geo(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*))(:&#91;0-9&#93;+):((\*)|(&#91;-a-z&#93;+&#91;/&#93;&#91;*-._\w&#93;+))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MapName" /></td>
    <td><code>string</code></td>
    <td>The map style selected from an available provider. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PricingPlan" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the map resource.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the map resource was last update in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_maps">

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
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the map resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSource" /></td>
    <td><code>string</code></td>
    <td>Specifies the data provider for the associated map tiles.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the map resource.</td>
</tr>
<tr>
    <td><CopyableCode code="MapName" /></td>
    <td><code>string</code></td>
    <td>The name of the associated map resource. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PricingPlan" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the map resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
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
    <td><a href="#describe_map"><CopyableCode code="describe_map" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-map_name"><code>map_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. DescribeMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves the map resource details.</td>
</tr>
<tr>
    <td><a href="#list_maps"><CopyableCode code="list_maps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. ListMaps is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Lists map resources in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_map"><CopyableCode code="create_map" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MapName"><code>MapName</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. CreateMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers. If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the Amazon Web Services service terms for more details.</td>
</tr>
<tr>
    <td><a href="#update_map"><CopyableCode code="update_map" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-map_name"><code>map_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. UpdateMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Updates the specified properties of a given map resource.</td>
</tr>
<tr>
    <td><a href="#delete_map"><CopyableCode code="delete_map" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-map_name"><code>map_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. DeleteMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Deletes a map resource from your Amazon Web Services account. This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</td>
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
    <td>The name of the map resource to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_map"
    values={[
        { label: 'describe_map', value: 'describe_map' },
        { label: 'list_maps', value: 'list_maps' }
    ]}
>
<TabItem value="describe_map">

This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. DescribeMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Retrieves the map resource details.

```sql
SELECT
Configuration,
CreateTime,
DataSource,
Description,
MapArn,
MapName,
PricingPlan,
Tags,
UpdateTime
FROM aws.location.maps
WHERE map_name = '{{ map_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_maps">

This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. ListMaps is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Lists map resources in your Amazon Web Services account.

```sql
SELECT
CreateTime,
DataSource,
Description,
MapName,
PricingPlan,
UpdateTime
FROM aws.location.maps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_map"
    values={[
        { label: 'create_map', value: 'create_map' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_map">

This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. CreateMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers. If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the Amazon Web Services service terms for more details.

```sql
INSERT INTO aws.location.maps (
MapName,
Configuration,
PricingPlan,
Description,
Tags,
region
)
SELECT 
'{{ MapName }}' /* required */,
'{{ Configuration }}',
'{{ PricingPlan }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
CreateTime,
MapArn,
MapName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: maps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the maps resource.
    - name: MapName
      value: "{{ MapName }}"
    - name: Configuration
      description: |
        Specifies the map tile style selected from an available provider.
      value:
        Style: "{{ Style }}"
        PoliticalView: "{{ PoliticalView }}"
        CustomLayers:
          - "{{ CustomLayers }}"
    - name: PricingPlan
      value: "{{ PricingPlan }}"
      valid_values: ['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement']
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_map"
    values={[
        { label: 'update_map', value: 'update_map' }
    ]}
>
<TabItem value="update_map">

This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. UpdateMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Updates the specified properties of a given map resource.

```sql
UPDATE aws.location.maps
SET 
PricingPlan = '{{ PricingPlan }}',
Description = '{{ Description }}',
ConfigurationUpdate = '{{ ConfigurationUpdate }}'
WHERE 
map_name = '{{ map_name }}' --required
AND region = '{{ region }}' --required
RETURNING
MapArn,
MapName,
UpdateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_map"
    values={[
        { label: 'delete_map', value: 'delete_map' }
    ]}
>
<TabItem value="delete_map">

This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require Grab data. DeleteMap is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2). The Maps API version 2 has a simplified interface that can be used without creating or managing map resources. If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under geo-maps or geo_maps, not under location. Since Grab is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using Grab. Start your version 2 API journey with the Maps V2 API Reference or the Developer Guide. Deletes a map resource from your Amazon Web Services account. This operation deletes the resource permanently. If the map is being used in an application, the map may not render.

```sql
DELETE FROM aws.location.maps
WHERE map_name = '{{ map_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
