--- 
title: destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - destinations
  - iotwireless
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.destinations" /></td></tr>
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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the new resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Expression" /></td>
    <td><code>string</code></td>
    <td>The rule name or topic rule to send messages to.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpressionType" /></td>
    <td><code>string</code></td>
    <td>The type of value in Expression. (RuleName, MqttTopic)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM Role that authorizes the destination.</td>
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
    <td><CopyableCode code="DestinationList" /></td>
    <td><code>array</code></td>
    <td>The list of destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
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
    <td>Gets information about a destination.</td>
</tr>
<tr>
    <td><a href="#list_destinations"><CopyableCode code="list_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the destinations registered to your AWS account.</td>
</tr>
<tr>
    <td><a href="#create_destination"><CopyableCode code="create_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExpressionType"><code>ExpressionType</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a new destination that maps a device message to an AWS IoT rule.</td>
</tr>
<tr>
    <td><a href="#update_destination"><CopyableCode code="update_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates properties of a destination.</td>
</tr>
<tr>
    <td><a href="#delete_destination"><CopyableCode code="delete_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a destination.</td>
</tr>
<tr>
    <td><a href="#start_single_wireless_device_import_task"><CopyableCode code="start_single_wireless_device_import_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationName"><code>DestinationName</code></a>, <a href="#parameter-Sidewalk"><code>Sidewalk</code></a></td>
    <td></td>
    <td>Start import task for a single wireless device.</td>
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
    <td>The name of the resource to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
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

Gets information about a destination.

```sql
SELECT
Arn,
Description,
Expression,
ExpressionType,
Name,
RoleArn
FROM aws.iotwireless.destinations
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_destinations">

Lists the destinations registered to your AWS account.

```sql
SELECT
DestinationList,
NextToken
FROM aws.iotwireless.destinations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
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

Creates a new destination that maps a device message to an AWS IoT rule.

```sql
INSERT INTO aws.iotwireless.destinations (
Name,
ExpressionType,
Expression,
Description,
RoleArn,
Tags,
ClientRequestToken,
region
)
SELECT 
'{{ Name }}',
'{{ ExpressionType }}' /* required */,
'{{ Expression }}',
'{{ Description }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ ClientRequestToken }}',
'{{ region }}'
RETURNING
Arn,
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
    - name: Name
      value: "{{ Name }}"
    - name: ExpressionType
      value: "{{ ExpressionType }}"
      valid_values: ['RuleName', 'MqttTopic']
    - name: Expression
      value: "{{ Expression }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the new resource.
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: Tags
      description: |
        The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests.
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

Updates properties of a destination.

```sql
UPDATE aws.iotwireless.destinations
SET 
ExpressionType = '{{ ExpressionType }}',
Expression = '{{ Expression }}',
Description = '{{ Description }}',
RoleArn = '{{ RoleArn }}'
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

Deletes a destination.

```sql
DELETE FROM aws.iotwireless.destinations
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_single_wireless_device_import_task"
    values={[
        { label: 'start_single_wireless_device_import_task', value: 'start_single_wireless_device_import_task' }
    ]}
>
<TabItem value="start_single_wireless_device_import_task">

Start import task for a single wireless device.

```sql
EXEC aws.iotwireless.destinations.start_single_wireless_device_import_task 
@region='{{ region }}' --required 
@@json=
'{
"DestinationName": "{{ DestinationName }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"DeviceName": "{{ DeviceName }}", 
"Tags": "{{ Tags }}", 
"Positioning": "{{ Positioning }}", 
"Sidewalk": "{{ Sidewalk }}"
}'
;
```
</TabItem>
</Tabs>
