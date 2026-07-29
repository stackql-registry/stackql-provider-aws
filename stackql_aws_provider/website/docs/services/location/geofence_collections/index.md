--- 
title: geofence_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - geofence_collections
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

Creates, updates, deletes, gets or lists a <code>geofence_collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="geofence_collections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.geofence_collections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_geofence_collection"
    values={[
        { label: 'describe_geofence_collection', value: 'describe_geofence_collection' },
        { label: 'list_geofence_collections', value: 'list_geofence_collections' }
    ]}
>
<TabItem value="describe_geofence_collection">

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
    <td><CopyableCode code="collection_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the geofence collection resource. Used when you need to specify a resource across all Amazon Web Services. Format example: arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollection (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)&#123;2&#125;(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)?)&#123;2&#125;:(&#91;^/&#93;.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collection_name" /></td>
    <td><code>string</code></td>
    <td>The name of the geofence collection. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the geofence resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description for the geofence collection.</td>
</tr>
<tr>
    <td><CopyableCode code="geofence_count" /></td>
    <td><code>integer</code></td>
    <td>The number of geofences in the geofence collection.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>A key identifier for an Amazon Web Services KMS customer managed key assigned to the Amazon Location resource</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan_data_source" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Displays the key, value pairs of tags associated with this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the geofence collection was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_geofence_collections">

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
    <td><CopyableCode code="collection_name" /></td>
    <td><code>string</code></td>
    <td>The name of the geofence collection. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the geofence collection was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the geofence collection</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan_data_source" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies a timestamp for when the resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ</td>
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
    <td><a href="#describe_geofence_collection"><CopyableCode code="describe_geofence_collection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collection_name"><code>collection_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the geofence collection details.</td>
</tr>
<tr>
    <td><a href="#list_geofence_collections"><CopyableCode code="list_geofence_collections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists geofence collections in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_geofence_collection"><CopyableCode code="create_geofence_collection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CollectionName"><code>CollectionName</code></a></td>
    <td></td>
    <td>Creates a geofence collection, which manages and stores geofences.</td>
</tr>
<tr>
    <td><a href="#update_geofence_collection"><CopyableCode code="update_geofence_collection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-collection_name"><code>collection_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified properties of a given geofence collection.</td>
</tr>
<tr>
    <td><a href="#delete_geofence_collection"><CopyableCode code="delete_geofence_collection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-collection_name"><code>collection_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a geofence collection from your Amazon Web Services account. This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</td>
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
<tr id="parameter-collection_name">
    <td><CopyableCode code="collection_name" /></td>
    <td><code>string</code></td>
    <td>The name of the geofence collection to be deleted.</td>
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
    defaultValue="describe_geofence_collection"
    values={[
        { label: 'describe_geofence_collection', value: 'describe_geofence_collection' },
        { label: 'list_geofence_collections', value: 'list_geofence_collections' }
    ]}
>
<TabItem value="describe_geofence_collection">

Retrieves the geofence collection details.

```sql
SELECT
collection_arn,
collection_name,
create_time,
description,
geofence_count,
kms_key_id,
pricing_plan,
pricing_plan_data_source,
tags,
update_time
FROM aws.location.geofence_collections
WHERE collection_name = '{{ collection_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_geofence_collections">

Lists geofence collections in your Amazon Web Services account.

```sql
SELECT
collection_name,
create_time,
description,
pricing_plan,
pricing_plan_data_source,
update_time
FROM aws.location.geofence_collections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_geofence_collection"
    values={[
        { label: 'create_geofence_collection', value: 'create_geofence_collection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_geofence_collection">

Creates a geofence collection, which manages and stores geofences.

```sql
INSERT INTO aws.location.geofence_collections (
CollectionName,
PricingPlan,
PricingPlanDataSource,
Description,
Tags,
KmsKeyId,
region
)
SELECT 
'{{ CollectionName }}' /* required */,
'{{ PricingPlan }}',
'{{ PricingPlanDataSource }}',
'{{ Description }}',
'{{ Tags }}',
'{{ KmsKeyId }}',
'{{ region }}'
RETURNING
collection_arn,
collection_name,
create_time
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: geofence_collections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the geofence_collections resource.
    - name: CollectionName
      value: "{{ CollectionName }}"
    - name: PricingPlan
      value: "{{ PricingPlan }}"
      valid_values: ['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement']
    - name: PricingPlanDataSource
      value: "{{ PricingPlanDataSource }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_geofence_collection"
    values={[
        { label: 'update_geofence_collection', value: 'update_geofence_collection' }
    ]}
>
<TabItem value="update_geofence_collection">

Updates the specified properties of a given geofence collection.

```sql
UPDATE aws.location.geofence_collections
SET 
PricingPlan = '{{ PricingPlan }}',
PricingPlanDataSource = '{{ PricingPlanDataSource }}',
Description = '{{ Description }}'
WHERE 
collection_name = '{{ collection_name }}' --required
AND region = '{{ region }}' --required
RETURNING
collection_arn,
collection_name,
update_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_geofence_collection"
    values={[
        { label: 'delete_geofence_collection', value: 'delete_geofence_collection' }
    ]}
>
<TabItem value="delete_geofence_collection">

Deletes a geofence collection from your Amazon Web Services account. This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.

```sql
DELETE FROM aws.location.geofence_collections
WHERE collection_name = '{{ collection_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
