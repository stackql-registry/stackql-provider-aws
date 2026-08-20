--- 
title: hours_of_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - hours_of_operations
  - connect
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

Creates, updates, deletes, gets or lists an <code>hours_of_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hours_of_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.hours_of_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hours_of_operation"
    values={[
        { label: 'describe_hours_of_operation', value: 'describe_hours_of_operation' },
        { label: 'list_hours_of_operations', value: 'list_hours_of_operations' },
        { label: 'search_hours_of_operations', value: 'search_hours_of_operations' }
    ]}
>
<TabItem value="describe_hours_of_operation">

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
    <td><CopyableCode code="config" /></td>
    <td><code>array</code></td>
    <td>Configuration information for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="hours_of_operation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="hours_of_operation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_hours_of_operations" /></td>
    <td><code>array</code></td>
    <td>Information about parent hours of operations.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone for the hours of operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hours_of_operations">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the hours of operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_hours_of_operations">

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
    <td><CopyableCode code="config" /></td>
    <td><code>array</code></td>
    <td>Configuration information for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="hours_of_operation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="hours_of_operation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_hours_of_operations" /></td>
    <td><code>array</code></td>
    <td>Information about parent hours of operations.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone for the hours of operation.</td>
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
    <td><a href="#describe_hours_of_operation"><CopyableCode code="describe_hours_of_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the hours of operation.</td>
</tr>
<tr>
    <td><a href="#list_hours_of_operations"><CopyableCode code="list_hours_of_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides information about the hours of operation for the specified Connect Customer instance. For more information about hours of operation, see Set the Hours of Operation for a Queue in the Connect Customer Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#search_hours_of_operations"><CopyableCode code="search_hours_of_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches the hours of operation in an Connect Customer instance, with optional filtering.</td>
</tr>
<tr>
    <td><a href="#create_hours_of_operation"><CopyableCode code="create_hours_of_operation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TimeZone"><code>TimeZone</code></a></td>
    <td></td>
    <td>Creates hours of operation.</td>
</tr>
<tr>
    <td><a href="#associate_hours_of_operations"><CopyableCode code="associate_hours_of_operations" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParentHoursOfOperationConfigs"><code>ParentHoursOfOperationConfigs</code></a></td>
    <td></td>
    <td>Associates a set of hours of operations with another hours of operation. For more information about inheriting overrides from parent hours of operation, see Hours of operation overrides in the Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_hours_of_operations"><CopyableCode code="disassociate_hours_of_operations" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParentHoursOfOperationIds"><code>ParentHoursOfOperationIds</code></a></td>
    <td></td>
    <td>Disassociates a set of hours of operations with another hours of operation. For more information about inheriting overrides from parent hours of operation, see Hours of operation overrides in the Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#update_queue_hours_of_operation"><CopyableCode code="update_queue_hours_of_operation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HoursOfOperationId"><code>HoursOfOperationId</code></a></td>
    <td></td>
    <td>Updates the hours of operation for the specified queue.</td>
</tr>
<tr>
    <td><a href="#update_hours_of_operation"><CopyableCode code="update_hours_of_operation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the hours of operation.</td>
</tr>
<tr>
    <td><a href="#delete_hours_of_operation"><CopyableCode code="delete_hours_of_operation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an hours of operation.</td>
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
<tr id="parameter-hours_of_operation_id">
    <td><CopyableCode code="hours_of_operation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the queue.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_hours_of_operation"
    values={[
        { label: 'describe_hours_of_operation', value: 'describe_hours_of_operation' },
        { label: 'list_hours_of_operations', value: 'list_hours_of_operations' },
        { label: 'search_hours_of_operations', value: 'search_hours_of_operations' }
    ]}
>
<TabItem value="describe_hours_of_operation">

Describes the hours of operation.

```sql
SELECT
config,
description,
hours_of_operation_arn,
hours_of_operation_id,
last_modified_region,
last_modified_time,
name,
parent_hours_of_operations,
tags,
time_zone
FROM aws.connect.hours_of_operations
WHERE instance_id = '{{ instance_id }}' -- required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hours_of_operations">

Provides information about the hours of operation for the specified Connect Customer instance. For more information about hours of operation, see Set the Hours of Operation for a Queue in the Connect Customer Administrator Guide.

```sql
SELECT
arn,
id,
last_modified_region,
last_modified_time,
name
FROM aws.connect.hours_of_operations
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_hours_of_operations">

Searches the hours of operation in an Connect Customer instance, with optional filtering.

```sql
SELECT
config,
description,
hours_of_operation_arn,
hours_of_operation_id,
last_modified_region,
last_modified_time,
name,
parent_hours_of_operations,
tags,
time_zone
FROM aws.connect.hours_of_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hours_of_operation"
    values={[
        { label: 'create_hours_of_operation', value: 'create_hours_of_operation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hours_of_operation">

Creates hours of operation.

```sql
INSERT INTO aws.connect.hours_of_operations (
Name,
Description,
TimeZone,
Config,
ParentHoursOfOperationConfigs,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ TimeZone }}' /* required */,
'{{ Config }}',
'{{ ParentHoursOfOperationConfigs }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
hours_of_operation_arn,
hours_of_operation_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hours_of_operations
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the hours_of_operations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hours_of_operations resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: TimeZone
      value: "{{ TimeZone }}"
    - name: Config
      value:
        - Day: "{{ Day }}"
          StartTime:
            Hours: {{ Hours }}
            Minutes: {{ Minutes }}
          EndTime:
            Hours: {{ Hours }}
            Minutes: {{ Minutes }}
    - name: ParentHoursOfOperationConfigs
      value:
        - HoursOfOperationId: "{{ HoursOfOperationId }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_hours_of_operations"
    values={[
        { label: 'associate_hours_of_operations', value: 'associate_hours_of_operations' },
        { label: 'disassociate_hours_of_operations', value: 'disassociate_hours_of_operations' },
        { label: 'update_queue_hours_of_operation', value: 'update_queue_hours_of_operation' },
        { label: 'update_hours_of_operation', value: 'update_hours_of_operation' }
    ]}
>
<TabItem value="associate_hours_of_operations">

Associates a set of hours of operations with another hours of operation. For more information about inheriting overrides from parent hours of operation, see Hours of operation overrides in the Administrator Guide.

```sql
UPDATE aws.connect.hours_of_operations
SET 
ParentHoursOfOperationConfigs = '{{ ParentHoursOfOperationConfigs }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' --required
AND region = '{{ region }}' --required
AND ParentHoursOfOperationConfigs = '{{ ParentHoursOfOperationConfigs }}' --required;
```
</TabItem>
<TabItem value="disassociate_hours_of_operations">

Disassociates a set of hours of operations with another hours of operation. For more information about inheriting overrides from parent hours of operation, see Hours of operation overrides in the Administrator Guide.

```sql
UPDATE aws.connect.hours_of_operations
SET 
ParentHoursOfOperationIds = '{{ ParentHoursOfOperationIds }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' --required
AND region = '{{ region }}' --required
AND ParentHoursOfOperationIds = '{{ ParentHoursOfOperationIds }}' --required;
```
</TabItem>
<TabItem value="update_queue_hours_of_operation">

Updates the hours of operation for the specified queue.

```sql
UPDATE aws.connect.hours_of_operations
SET 
HoursOfOperationId = '{{ HoursOfOperationId }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required
AND HoursOfOperationId = '{{ HoursOfOperationId }}' --required;
```
</TabItem>
<TabItem value="update_hours_of_operation">

Updates the hours of operation.

```sql
UPDATE aws.connect.hours_of_operations
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
TimeZone = '{{ TimeZone }}',
Config = '{{ Config }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hours_of_operation"
    values={[
        { label: 'delete_hours_of_operation', value: 'delete_hours_of_operation' }
    ]}
>
<TabItem value="delete_hours_of_operation">

Deletes an hours of operation.

```sql
DELETE FROM aws.connect.hours_of_operations
WHERE instance_id = '{{ instance_id }}' --required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
