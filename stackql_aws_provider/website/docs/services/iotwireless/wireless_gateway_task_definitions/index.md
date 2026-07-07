--- 
title: wireless_gateway_task_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_gateway_task_definitions
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

Creates, updates, deletes, gets or lists a <code>wireless_gateway_task_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="wireless_gateway_task_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.wireless_gateway_task_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_wireless_gateway_task_definition"
    values={[
        { label: 'get_wireless_gateway_task_definition', value: 'get_wireless_gateway_task_definition' },
        { label: 'list_wireless_gateway_task_definitions', value: 'list_wireless_gateway_task_definitions' }
    ]}
>
<TabItem value="get_wireless_gateway_task_definition">

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
    <td><CopyableCode code="AutoCreateTasks" /></td>
    <td><code>boolean</code></td>
    <td>Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Update" /></td>
    <td><code>object</code></td>
    <td>UpdateWirelessGatewayTaskCreate object.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_wireless_gateway_task_definitions">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskDefinitions" /></td>
    <td><code>array</code></td>
    <td>The list of task definitions.</td>
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
    <td><a href="#get_wireless_gateway_task_definition"><CopyableCode code="get_wireless_gateway_task_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a wireless gateway task definition.</td>
</tr>
<tr>
    <td><a href="#list_wireless_gateway_task_definitions"><CopyableCode code="list_wireless_gateway_task_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-taskDefinitionType"><code>taskDefinitionType</code></a></td>
    <td>List the wireless gateway tasks definitions registered to your AWS account.</td>
</tr>
<tr>
    <td><a href="#create_wireless_gateway_task_definition"><CopyableCode code="create_wireless_gateway_task_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutoCreateTasks"><code>AutoCreateTasks</code></a></td>
    <td></td>
    <td>Creates a gateway task definition.</td>
</tr>
<tr>
    <td><a href="#delete_wireless_gateway_task_definition"><CopyableCode code="delete_wireless_gateway_task_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource to delete.</td>
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
<tr id="parameter-taskDefinitionType">
    <td><CopyableCode code="taskDefinitionType" /></td>
    <td><code>string</code></td>
    <td>A filter to list only the wireless gateway task definitions that use this task definition type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_wireless_gateway_task_definition"
    values={[
        { label: 'get_wireless_gateway_task_definition', value: 'get_wireless_gateway_task_definition' },
        { label: 'list_wireless_gateway_task_definitions', value: 'list_wireless_gateway_task_definitions' }
    ]}
>
<TabItem value="get_wireless_gateway_task_definition">

Gets information about a wireless gateway task definition.

```sql
SELECT
Arn,
AutoCreateTasks,
Name,
Update
FROM aws.iotwireless.wireless_gateway_task_definitions
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_wireless_gateway_task_definitions">

List the wireless gateway tasks definitions registered to your AWS account.

```sql
SELECT
NextToken,
TaskDefinitions
FROM aws.iotwireless.wireless_gateway_task_definitions
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND taskDefinitionType = '{{ taskDefinitionType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_wireless_gateway_task_definition"
    values={[
        { label: 'create_wireless_gateway_task_definition', value: 'create_wireless_gateway_task_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_wireless_gateway_task_definition">

Creates a gateway task definition.

```sql
INSERT INTO aws.iotwireless.wireless_gateway_task_definitions (
AutoCreateTasks,
Name,
Update,
ClientRequestToken,
Tags,
region
)
SELECT 
{{ AutoCreateTasks }} /* required */,
'{{ Name }}',
'{{ Update }}',
'{{ ClientRequestToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: wireless_gateway_task_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the wireless_gateway_task_definitions resource.
    - name: AutoCreateTasks
      value: {{ AutoCreateTasks }}
    - name: Name
      value: "{{ Name }}"
    - name: Update
      description: |
        UpdateWirelessGatewayTaskCreate object.
      value:
        UpdateDataSource: "{{ UpdateDataSource }}"
        UpdateDataRole: "{{ UpdateDataRole }}"
        LoRaWAN:
          UpdateSignature: "{{ UpdateSignature }}"
          SigKeyCrc: {{ SigKeyCrc }}
          CurrentVersion:
            PackageVersion: "{{ PackageVersion }}"
            Model: "{{ Model }}"
            Station: "{{ Station }}"
          UpdateVersion:
            PackageVersion: "{{ PackageVersion }}"
            Model: "{{ Model }}"
            Station: "{{ Station }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests.
    - name: Tags
      description: |
        The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_wireless_gateway_task_definition"
    values={[
        { label: 'delete_wireless_gateway_task_definition', value: 'delete_wireless_gateway_task_definition' }
    ]}
>
<TabItem value="delete_wireless_gateway_task_definition">

Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.

```sql
DELETE FROM aws.iotwireless.wireless_gateway_task_definitions
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
