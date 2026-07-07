--- 
title: things
hide_title: false
hide_table_of_contents: false
keywords:
  - things
  - iotthingsgraph
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

Creates, updates, deletes, gets or lists a <code>things</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="things" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.things" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_things"
    values={[
        { label: 'search_things', value: 'search_things' }
    ]}
>
<TabItem value="search_things">

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
    <td><CopyableCode code="thingArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the thing.</td>
</tr>
<tr>
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#search_things"><CopyableCode code="search_things" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for things associated with the specified entity. You can search by both device and device model. For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. SearchThings(camera2) will return only thing2, but SearchThings(camera) will return both thing1 and thing2. This action searches for exact matches and doesn't perform partial text matching.</td>
</tr>
<tr>
    <td><a href="#associate_entity_to_thing"><CopyableCode code="associate_entity_to_thing" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-thingName"><code>thingName</code></a>, <a href="#parameter-entityId"><code>entityId</code></a></td>
    <td></td>
    <td>Associates a device with a concrete thing that is in the user's registry. A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.</td>
</tr>
<tr>
    <td><a href="#dissociate_entity_from_thing"><CopyableCode code="dissociate_entity_from_thing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-thingName"><code>thingName</code></a>, <a href="#parameter-entityType"><code>entityType</code></a></td>
    <td></td>
    <td>Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_things"
    values={[
        { label: 'search_things', value: 'search_things' }
    ]}
>
<TabItem value="search_things">

Searches for things associated with the specified entity. You can search by both device and device model. For example, if two different devices, camera1 and camera2, implement the camera device model, the user can associate thing1 to camera1 and thing2 to camera2. SearchThings(camera2) will return only thing2, but SearchThings(camera) will return both thing1 and thing2. This action searches for exact matches and doesn't perform partial text matching.

```sql
SELECT
thingArn,
thingName
FROM aws.iotthingsgraph.things
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_entity_to_thing"
    values={[
        { label: 'associate_entity_to_thing', value: 'associate_entity_to_thing' }
    ]}
>
<TabItem value="associate_entity_to_thing">

Associates a device with a concrete thing that is in the user's registry. A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.

```sql
UPDATE aws.iotthingsgraph.things
SET 
thingName = '{{ thingName }}',
entityId = '{{ entityId }}',
namespaceVersion = {{ namespaceVersion }}
WHERE 
region = '{{ region }}' --required
AND thingName = '{{ thingName }}' --required
AND entityId = '{{ entityId }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="dissociate_entity_from_thing"
    values={[
        { label: 'dissociate_entity_from_thing', value: 'dissociate_entity_from_thing' }
    ]}
>
<TabItem value="dissociate_entity_from_thing">

Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.

```sql
EXEC aws.iotthingsgraph.things.dissociate_entity_from_thing 
@region='{{ region }}' --required 
@@json=
'{
"thingName": "{{ thingName }}", 
"entityType": "{{ entityType }}"
}'
;
```
</TabItem>
</Tabs>
