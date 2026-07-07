--- 
title: collection_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - collection_groups
  - opensearchserverless
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

Creates, updates, deletes, gets or lists a <code>collection_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collection_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.collection_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_collection_groups"
    values={[
        { label: 'list_collection_groups', value: 'list_collection_groups' }
    ]}
>
<TabItem value="list_collection_groups">

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
    <td><CopyableCode code="collectionGroupSummaries" /></td>
    <td><code>array</code></td>
    <td>Details about each collection group.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</td>
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
    <td><a href="#list_collection_groups"><CopyableCode code="list_collection_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of collection groups. For more information, see Creating and managing Amazon OpenSearch Serverless collections.</td>
</tr>
<tr>
    <td><a href="#create_collection_group"><CopyableCode code="create_collection_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-standbyReplicas"><code>standbyReplicas</code></a></td>
    <td></td>
    <td>Creates a collection group within OpenSearch Serverless. Collection groups let you manage OpenSearch Compute Units (OCUs) at a group level, with multiple collections sharing the group's capacity limits. For more information, see Managing collection groups.</td>
</tr>
<tr>
    <td><a href="#update_collection_group"><CopyableCode code="update_collection_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Updates the description and capacity limits of a collection group.</td>
</tr>
<tr>
    <td><a href="#delete_collection_group"><CopyableCode code="delete_collection_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a collection group. You can only delete empty collection groups that contain no collections. For more information, see Creating and managing Amazon OpenSearch Serverless collections.</td>
</tr>
<tr>
    <td><a href="#batch_get_collection_group"><CopyableCode code="batch_get_collection_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns attributes for one or more collection groups, including capacity limits and the number of collections in each group. For more information, see Creating and managing Amazon OpenSearch Serverless collections.</td>
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
    defaultValue="list_collection_groups"
    values={[
        { label: 'list_collection_groups', value: 'list_collection_groups' }
    ]}
>
<TabItem value="list_collection_groups">

Returns a list of collection groups. For more information, see Creating and managing Amazon OpenSearch Serverless collections.

```sql
SELECT
collectionGroupSummaries,
nextToken
FROM aws.opensearchserverless.collection_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_collection_group"
    values={[
        { label: 'create_collection_group', value: 'create_collection_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_collection_group">

Creates a collection group within OpenSearch Serverless. Collection groups let you manage OpenSearch Compute Units (OCUs) at a group level, with multiple collections sharing the group's capacity limits. For more information, see Managing collection groups.

```sql
INSERT INTO aws.opensearchserverless.collection_groups (
name,
standbyReplicas,
description,
tags,
capacityLimits,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ standbyReplicas }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ capacityLimits }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
createCollectionGroupDetail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: collection_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the collection_groups resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the collection group.
    - name: standbyReplicas
      value: "{{ standbyReplicas }}"
      description: |
        Indicates whether standby replicas should be used for a collection group.
      valid_values: ['ENABLED', 'DISABLED']
    - name: description
      value: "{{ description }}"
      description: |
        A description of the collection group.
    - name: tags
      description: |
        An arbitrary set of tags (key–value pairs) to associate with the OpenSearch Serverless collection group.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: capacityLimits
      description: |
        The capacity limits for the collection group, in OpenSearch Compute Units (OCUs). These limits control the maximum and minimum capacity for collections within the group.
      value:
        maxIndexingCapacityInOCU: {{ maxIndexingCapacityInOCU }}
        maxSearchCapacityInOCU: {{ maxSearchCapacityInOCU }}
        minIndexingCapacityInOCU: {{ minIndexingCapacityInOCU }}
        minSearchCapacityInOCU: {{ minSearchCapacityInOCU }}
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Unique, case-sensitive identifier to ensure idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_collection_group"
    values={[
        { label: 'update_collection_group', value: 'update_collection_group' }
    ]}
>
<TabItem value="update_collection_group">

Updates the description and capacity limits of a collection group.

```sql
UPDATE aws.opensearchserverless.collection_groups
SET 
id = '{{ id }}',
description = '{{ description }}',
capacityLimits = '{{ capacityLimits }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
RETURNING
updateCollectionGroupDetail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_collection_group"
    values={[
        { label: 'delete_collection_group', value: 'delete_collection_group' }
    ]}
>
<TabItem value="delete_collection_group">

Deletes a collection group. You can only delete empty collection groups that contain no collections. For more information, see Creating and managing Amazon OpenSearch Serverless collections.

```sql
DELETE FROM aws.opensearchserverless.collection_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_get_collection_group"
    values={[
        { label: 'batch_get_collection_group', value: 'batch_get_collection_group' }
    ]}
>
<TabItem value="batch_get_collection_group">

Returns attributes for one or more collection groups, including capacity limits and the number of collections in each group. For more information, see Creating and managing Amazon OpenSearch Serverless collections.

```sql
EXEC aws.opensearchserverless.collection_groups.batch_get_collection_group 
@region='{{ region }}' --required 
@@json=
'{
"ids": "{{ ids }}", 
"names": "{{ names }}"
}'
;
```
</TabItem>
</Tabs>
