--- 
title: destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - destinations
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_destination"
    values={[
        { label: 'get_destination', value: 'get_destination' },
        { label: 'list_destinations', value: 'list_destinations' }
    ]}
>
<TabItem value="get_destination">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the destination creation requset occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryDestinationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customer-managed destination. (pattern: &lt;code&gt;arn:aws:&#91;0-9a-zA-Z&#93;+:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:&#91;0-9a-zA-Z&#93;+/&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryDestinationType" /></td>
    <td><code>string</code></td>
    <td>The destination type for the customer-managed destination. (KINESIS)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the customer-managed destination. (pattern: &lt;code&gt;&#91;0-9A-Za-z_\- &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the customer-managed destination. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125; ._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the delivery destination role.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>A set of key/value pairs that are used to manage the customer-managed destination.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the destination update requset occurred.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_destinations">

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
    <td><CopyableCode code="DeliveryDestinationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customer-managed destination. (pattern: &lt;code&gt;arn:aws:&#91;0-9a-zA-Z&#93;+:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:&#91;0-9a-zA-Z&#93;+/&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryDestinationType" /></td>
    <td><code>string</code></td>
    <td>The destination type for the customer-managed destination. (KINESIS)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the customer-managed destination. (pattern: &lt;code&gt;&#91;0-9A-Za-z_\- &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the customer-managed destination. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125; ._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the delivery destination.</td>
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
    <td><a href="#get_destination"><CopyableCode code="get_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a destination by name.</td>
</tr>
<tr>
    <td><a href="#list_destinations"><CopyableCode code="list_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>List all notification destinations.</td>
</tr>
<tr>
    <td><a href="#create_destination"><CopyableCode code="create_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryDestinationArn"><code>DeliveryDestinationArn</code></a>, <a href="#parameter-DeliveryDestinationType"><code>DeliveryDestinationType</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Create a notification destination such as Kinesis Data Streams that receive events and notifications from Managed integrations. Managed integrations uses the destination to determine where to deliver notifications.</td>
</tr>
<tr>
    <td><a href="#update_destination"><CopyableCode code="update_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a destination specified by name.</td>
</tr>
<tr>
    <td><a href="#delete_destination"><CopyableCode code="delete_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a notification destination specified by name.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The id of the customer-managed destination.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_destination"
    values={[
        { label: 'get_destination', value: 'get_destination' },
        { label: 'list_destinations', value: 'list_destinations' }
    ]}
>
<TabItem value="get_destination">

Gets a destination by name.

```sql
SELECT
CreatedAt,
DeliveryDestinationArn,
DeliveryDestinationType,
Description,
Name,
RoleArn,
Tags,
UpdatedAt
FROM aws.iot_managed_integrations.destinations
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_destinations">

List all notification destinations.

```sql
SELECT
DeliveryDestinationArn,
DeliveryDestinationType,
Description,
Name,
RoleArn
FROM aws.iot_managed_integrations.destinations
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_destination"
    values={[
        { label: 'create_destination', value: 'create_destination' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_destination">

Create a notification destination such as Kinesis Data Streams that receive events and notifications from Managed integrations. Managed integrations uses the destination to determine where to deliver notifications.

```sql
INSERT INTO aws.iot_managed_integrations.destinations (
DeliveryDestinationArn,
DeliveryDestinationType,
Name,
RoleArn,
ClientToken,
Description,
Tags,
region
)
SELECT 
'{{ DeliveryDestinationArn }}' /* required */,
'{{ DeliveryDestinationType }}' /* required */,
'{{ Name }}',
'{{ RoleArn }}' /* required */,
'{{ ClientToken }}',
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: destinations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the destinations resource.
    - name: DeliveryDestinationArn
      value: "{{ DeliveryDestinationArn }}"
    - name: DeliveryDestinationType
      value: "{{ DeliveryDestinationType }}"
      valid_values: ['KINESIS']
    - name: Name
      value: "{{ Name }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_destination"
    values={[
        { label: 'update_destination', value: 'update_destination' }
    ]}
>
<TabItem value="update_destination">

Update a destination specified by name.

```sql
UPDATE aws.iot_managed_integrations.destinations
SET 
DeliveryDestinationArn = '{{ DeliveryDestinationArn }}',
DeliveryDestinationType = '{{ DeliveryDestinationType }}',
RoleArn = '{{ RoleArn }}',
Description = '{{ Description }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_destination"
    values={[
        { label: 'delete_destination', value: 'delete_destination' }
    ]}
>
<TabItem value="delete_destination">

Deletes a notification destination specified by name.

```sql
DELETE FROM aws.iot_managed_integrations.destinations
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
