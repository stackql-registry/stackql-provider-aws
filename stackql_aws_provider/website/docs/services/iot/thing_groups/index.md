--- 
title: thing_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_groups
  - iot
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

Creates, updates, deletes, gets or lists a <code>thing_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="thing_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.thing_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_thing_group"
    values={[
        { label: 'describe_thing_group', value: 'describe_thing_group' },
        { label: 'list_thing_groups', value: 'list_thing_groups' }
    ]}
>
<TabItem value="describe_thing_group">

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
    <td><CopyableCode code="indexName" /></td>
    <td><code>string</code></td>
    <td>The dynamic thing group index name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="queryString" /></td>
    <td><code>string</code></td>
    <td>The dynamic thing group search query string.</td>
</tr>
<tr>
    <td><CopyableCode code="queryVersion" /></td>
    <td><code>string</code></td>
    <td>The dynamic thing group query version.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The dynamic thing group status. (ACTIVE, BUILDING, REBUILDING)</td>
</tr>
<tr>
    <td><CopyableCode code="thingGroupArn" /></td>
    <td><code>string</code></td>
    <td>The thing group ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="thingGroupId" /></td>
    <td><code>string</code></td>
    <td>The thing group ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="thingGroupMetadata" /></td>
    <td><code>object</code></td>
    <td>Thing group metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="thingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="thingGroupProperties" /></td>
    <td><code>object</code></td>
    <td>Thing group properties.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the thing group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_thing_groups">

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
    <td><CopyableCode code="groupArn" /></td>
    <td><code>string</code></td>
    <td>The group ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="groupName" /></td>
    <td><code>string</code></td>
    <td>The group name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_thing_group"><CopyableCode code="describe_thing_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_group_name"><code>thing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe a thing group. Requires permission to access the DescribeThingGroup action.</td>
</tr>
<tr>
    <td><a href="#list_thing_groups"><CopyableCode code="list_thing_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-parentGroup"><code>parentGroup</code></a>, <a href="#parameter-namePrefixFilter"><code>namePrefixFilter</code></a>, <a href="#parameter-recursive"><code>recursive</code></a></td>
    <td>List the thing groups in your account. Requires permission to access the ListThingGroups action.</td>
</tr>
<tr>
    <td><a href="#create_dynamic_thing_group"><CopyableCode code="create_dynamic_thing_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-thing_group_name"><code>thing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryString"><code>queryString</code></a></td>
    <td></td>
    <td>Creates a dynamic thing group. Requires permission to access the CreateDynamicThingGroup action.</td>
</tr>
<tr>
    <td><a href="#create_thing_group"><CopyableCode code="create_thing_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-thing_group_name"><code>thing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a thing group. This is a control plane operation. See Authorization for information about authorizing control plane actions. If the ThingGroup that you create has the exact same attributes as an existing ThingGroup, you will get a 200 success response. Requires permission to access the CreateThingGroup action.</td>
</tr>
<tr>
    <td><a href="#update_thing_group"><CopyableCode code="update_thing_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-thing_group_name"><code>thing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-thingGroupProperties"><code>thingGroupProperties</code></a></td>
    <td></td>
    <td>Update a thing group. Requires permission to access the UpdateThingGroup action.</td>
</tr>
<tr>
    <td><a href="#add_thing_to_thing_group"><CopyableCode code="add_thing_to_thing_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a thing to a thing group. Requires permission to access the AddThingToThingGroup action.</td>
</tr>
<tr>
    <td><a href="#delete_thing_group"><CopyableCode code="delete_thing_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-thing_group_name"><code>thing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expectedVersion"><code>expectedVersion</code></a></td>
    <td>Deletes a thing group. Requires permission to access the DeleteThingGroup action.</td>
</tr>
<tr>
    <td><a href="#delete_dynamic_thing_group"><CopyableCode code="delete_dynamic_thing_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-thing_group_name"><code>thing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expectedVersion"><code>expectedVersion</code></a></td>
    <td>Deletes a dynamic thing group. Requires permission to access the DeleteDynamicThingGroup action.</td>
</tr>
<tr>
    <td><a href="#update_dynamic_thing_group"><CopyableCode code="update_dynamic_thing_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-thing_group_name"><code>thing_group_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-thingGroupProperties"><code>thingGroupProperties</code></a></td>
    <td></td>
    <td>Updates a dynamic thing group. Requires permission to access the UpdateDynamicThingGroup action.</td>
</tr>
<tr>
    <td><a href="#remove_thing_from_thing_group"><CopyableCode code="remove_thing_from_thing_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove the specified thing from the specified group. You must specify either a thingGroupArn or a thingGroupName to identify the thing group and either a thingArn or a thingName to identify the thing to remove from the thing group. Requires permission to access the RemoveThingFromThingGroup action.</td>
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
<tr id="parameter-thing_group_name">
    <td><CopyableCode code="thing_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dynamic thing group to update.</td>
</tr>
<tr id="parameter-expectedVersion">
    <td><CopyableCode code="expectedVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The expected version of the dynamic thing group to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-namePrefixFilter">
    <td><CopyableCode code="namePrefixFilter" /></td>
    <td><code>string</code></td>
    <td>A filter that limits the results to those with the specified name prefix.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-parentGroup">
    <td><CopyableCode code="parentGroup" /></td>
    <td><code>string</code></td>
    <td>A filter that limits the results to those with the specified parent group.</td>
</tr>
<tr id="parameter-recursive">
    <td><CopyableCode code="recursive" /></td>
    <td><code>boolean</code></td>
    <td>If true, return child groups as well.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_thing_group"
    values={[
        { label: 'describe_thing_group', value: 'describe_thing_group' },
        { label: 'list_thing_groups', value: 'list_thing_groups' }
    ]}
>
<TabItem value="describe_thing_group">

Describe a thing group. Requires permission to access the DescribeThingGroup action.

```sql
SELECT
indexName,
queryString,
queryVersion,
status,
thingGroupArn,
thingGroupId,
thingGroupMetadata,
thingGroupName,
thingGroupProperties,
version
FROM aws.iot.thing_groups
WHERE thing_group_name = '{{ thing_group_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_thing_groups">

List the thing groups in your account. Requires permission to access the ListThingGroups action.

```sql
SELECT
groupArn,
groupName
FROM aws.iot.thing_groups
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND parentGroup = '{{ parentGroup }}'
AND namePrefixFilter = '{{ namePrefixFilter }}'
AND recursive = '{{ recursive }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dynamic_thing_group"
    values={[
        { label: 'create_dynamic_thing_group', value: 'create_dynamic_thing_group' },
        { label: 'create_thing_group', value: 'create_thing_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dynamic_thing_group">

Creates a dynamic thing group. Requires permission to access the CreateDynamicThingGroup action.

```sql
INSERT INTO aws.iot.thing_groups (
thingGroupProperties,
indexName,
queryString,
queryVersion,
tags,
thing_group_name,
region
)
SELECT 
'{{ thingGroupProperties }}',
'{{ indexName }}',
'{{ queryString }}' /* required */,
'{{ queryVersion }}',
'{{ tags }}',
'{{ thing_group_name }}',
'{{ region }}'
RETURNING
indexName,
queryString,
queryVersion,
thingGroupArn,
thingGroupId,
thingGroupName
;
```
</TabItem>
<TabItem value="create_thing_group">

Create a thing group. This is a control plane operation. See Authorization for information about authorizing control plane actions. If the ThingGroup that you create has the exact same attributes as an existing ThingGroup, you will get a 200 success response. Requires permission to access the CreateThingGroup action.

```sql
INSERT INTO aws.iot.thing_groups (
parentGroupName,
thingGroupProperties,
tags,
thing_group_name,
region
)
SELECT 
'{{ parentGroupName }}',
'{{ thingGroupProperties }}',
'{{ tags }}',
'{{ thing_group_name }}',
'{{ region }}'
RETURNING
thingGroupArn,
thingGroupId,
thingGroupName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: thing_groups
  props:
    - name: thing_group_name
      value: "{{ thing_group_name }}"
      description: Required parameter for the thing_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the thing_groups resource.
    - name: thingGroupProperties
      description: |
        Thing group properties.
      value:
        thingGroupDescription: "{{ thingGroupDescription }}"
        attributePayload:
          attributes: "{{ attributes }}"
          merge: {{ merge }}
    - name: indexName
      value: "{{ indexName }}"
    - name: queryString
      value: "{{ queryString }}"
    - name: queryVersion
      value: "{{ queryVersion }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: parentGroupName
      value: "{{ parentGroupName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_thing_group"
    values={[
        { label: 'update_thing_group', value: 'update_thing_group' },
        { label: 'add_thing_to_thing_group', value: 'add_thing_to_thing_group' }
    ]}
>
<TabItem value="update_thing_group">

Update a thing group. Requires permission to access the UpdateThingGroup action.

```sql
UPDATE aws.iot.thing_groups
SET 
thingGroupProperties = '{{ thingGroupProperties }}',
expectedVersion = {{ expectedVersion }}
WHERE 
thing_group_name = '{{ thing_group_name }}' --required
AND region = '{{ region }}' --required
AND thingGroupProperties = '{{ thingGroupProperties }}' --required
RETURNING
version;
```
</TabItem>
<TabItem value="add_thing_to_thing_group">

Adds a thing to a thing group. Requires permission to access the AddThingToThingGroup action.

```sql
UPDATE aws.iot.thing_groups
SET 
thingGroupName = '{{ thingGroupName }}',
thingGroupArn = '{{ thingGroupArn }}',
thingName = '{{ thingName }}',
thingArn = '{{ thingArn }}',
overrideDynamicGroups = {{ overrideDynamicGroups }}
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_thing_group"
    values={[
        { label: 'delete_thing_group', value: 'delete_thing_group' }
    ]}
>
<TabItem value="delete_thing_group">

Deletes a thing group. Requires permission to access the DeleteThingGroup action.

```sql
DELETE FROM aws.iot.thing_groups
WHERE thing_group_name = '{{ thing_group_name }}' --required
AND region = '{{ region }}' --required
AND expectedVersion = '{{ expectedVersion }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_dynamic_thing_group"
    values={[
        { label: 'delete_dynamic_thing_group', value: 'delete_dynamic_thing_group' },
        { label: 'update_dynamic_thing_group', value: 'update_dynamic_thing_group' },
        { label: 'remove_thing_from_thing_group', value: 'remove_thing_from_thing_group' }
    ]}
>
<TabItem value="delete_dynamic_thing_group">

Deletes a dynamic thing group. Requires permission to access the DeleteDynamicThingGroup action.

```sql
EXEC aws.iot.thing_groups.delete_dynamic_thing_group 
@thing_group_name='{{ thing_group_name }}' --required, 
@region='{{ region }}' --required, 
@expectedVersion='{{ expectedVersion }}'
;
```
</TabItem>
<TabItem value="update_dynamic_thing_group">

Updates a dynamic thing group. Requires permission to access the UpdateDynamicThingGroup action.

```sql
EXEC aws.iot.thing_groups.update_dynamic_thing_group 
@thing_group_name='{{ thing_group_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"thingGroupProperties": "{{ thingGroupProperties }}", 
"expectedVersion": {{ expectedVersion }}, 
"indexName": "{{ indexName }}", 
"queryString": "{{ queryString }}", 
"queryVersion": "{{ queryVersion }}"
}'
;
```
</TabItem>
<TabItem value="remove_thing_from_thing_group">

Remove the specified thing from the specified group. You must specify either a thingGroupArn or a thingGroupName to identify the thing group and either a thingArn or a thingName to identify the thing to remove from the thing group. Requires permission to access the RemoveThingFromThingGroup action.

```sql
EXEC aws.iot.thing_groups.remove_thing_from_thing_group 
@region='{{ region }}' --required 
@@json=
'{
"thingGroupName": "{{ thingGroupName }}", 
"thingGroupArn": "{{ thingGroupArn }}", 
"thingName": "{{ thingName }}", 
"thingArn": "{{ thingArn }}"
}'
;
```
</TabItem>
</Tabs>
