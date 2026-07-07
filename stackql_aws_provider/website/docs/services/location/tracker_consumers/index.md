--- 
title: tracker_consumers
hide_title: false
hide_table_of_contents: false
keywords:
  - tracker_consumers
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

Creates, updates, deletes, gets or lists a <code>tracker_consumers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tracker_consumers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.tracker_consumers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tracker_consumers"
    values={[
        { label: 'list_tracker_consumers', value: 'list_tracker_consumers' }
    ]}
>
<TabItem value="list_tracker_consumers">

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
    <td><CopyableCode code="consumer_arn" /></td>
    <td><code>string</code></td>
    <td>Contains the list of geofence collection ARNs associated to the tracker resource.</td>
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
    <td><a href="#list_tracker_consumers"><CopyableCode code="list_tracker_consumers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists geofence collections currently associated to the given tracker resource.</td>
</tr>
<tr>
    <td><a href="#associate_tracker_consumer"><CopyableCode code="associate_tracker_consumer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConsumerArn"><code>ConsumerArn</code></a></td>
    <td></td>
    <td>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. You can associate up to five geofence collections to each tracker resource. Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</td>
</tr>
<tr>
    <td><a href="#disassociate_tracker_consumer"><CopyableCode code="disassociate_tracker_consumer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-consumer_arn"><code>consumer_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the association between a tracker resource and a geofence collection. Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</td>
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
<tr id="parameter-consumer_arn">
    <td><CopyableCode code="consumer_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the geofence collection to be disassociated from the tracker resource. Used when you need to specify a resource across all Amazon Web Services. Format example: arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-tracker_name">
    <td><CopyableCode code="tracker_name" /></td>
    <td><code>string</code></td>
    <td>The name of the tracker resource to be dissociated from the consumer.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tracker_consumers"
    values={[
        { label: 'list_tracker_consumers', value: 'list_tracker_consumers' }
    ]}
>
<TabItem value="list_tracker_consumers">

Lists geofence collections currently associated to the given tracker resource.

```sql
SELECT
consumer_arn
FROM aws.location.tracker_consumers
WHERE tracker_name = '{{ tracker_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_tracker_consumer"
    values={[
        { label: 'associate_tracker_consumer', value: 'associate_tracker_consumer' },
        { label: 'disassociate_tracker_consumer', value: 'disassociate_tracker_consumer' }
    ]}
>
<TabItem value="associate_tracker_consumer">

Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. You can associate up to five geofence collections to each tracker resource. Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.

```sql
UPDATE aws.location.tracker_consumers
SET 
ConsumerArn = '{{ ConsumerArn }}'
WHERE 
tracker_name = '{{ tracker_name }}' --required
AND region = '{{ region }}' --required
AND ConsumerArn = '{{ ConsumerArn }}' --required;
```
</TabItem>
<TabItem value="disassociate_tracker_consumer">

Removes the association between a tracker resource and a geofence collection. Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.

```sql
UPDATE aws.location.tracker_consumers
SET 
-- No updatable properties
WHERE 
tracker_name = '{{ tracker_name }}' --required
AND consumer_arn = '{{ consumer_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
