--- 
title: custom_routing_endpoint_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_routing_endpoint_groups
  - globalaccelerator
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

Creates, updates, deletes, gets or lists a <code>custom_routing_endpoint_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_routing_endpoint_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.custom_routing_endpoint_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_custom_routing_endpoint_group"
    values={[
        { label: 'describe_custom_routing_endpoint_group', value: 'describe_custom_routing_endpoint_group' },
        { label: 'list_custom_routing_endpoint_groups', value: 'list_custom_routing_endpoint_groups' }
    ]}
>
<TabItem value="describe_custom_routing_endpoint_group">

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
    <td><CopyableCode code="DestinationDescriptions" /></td>
    <td><code>array</code></td>
    <td>For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointDescriptions" /></td>
    <td><code>array</code></td>
    <td>For a custom routing accelerator, describes the endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointGroupRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the endpoint group is located.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_routing_endpoint_groups">

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
    <td><CopyableCode code="DestinationDescriptions" /></td>
    <td><code>array</code></td>
    <td>For a custom routing accelerator, describes the port range and protocol for all endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointDescriptions" /></td>
    <td><code>array</code></td>
    <td>For a custom routing accelerator, describes the endpoints (virtual private cloud subnets) in an endpoint group to accept client traffic on.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointGroupRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the endpoint group is located.</td>
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
    <td><a href="#describe_custom_routing_endpoint_group"><CopyableCode code="describe_custom_routing_endpoint_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe an endpoint group for a custom routing accelerator.</td>
</tr>
<tr>
    <td><a href="#list_custom_routing_endpoint_groups"><CopyableCode code="list_custom_routing_endpoint_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the endpoint groups that are associated with a listener for a custom routing accelerator.</td>
</tr>
<tr>
    <td><a href="#create_custom_routing_endpoint_group"><CopyableCode code="create_custom_routing_endpoint_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-EndpointGroupRegion"><code>EndpointGroupRegion</code></a>, <a href="#parameter-DestinationConfigurations"><code>DestinationConfigurations</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#delete_custom_routing_endpoint_group"><CopyableCode code="delete_custom_routing_endpoint_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an endpoint group from a listener for a custom routing accelerator.</td>
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
    defaultValue="describe_custom_routing_endpoint_group"
    values={[
        { label: 'describe_custom_routing_endpoint_group', value: 'describe_custom_routing_endpoint_group' },
        { label: 'list_custom_routing_endpoint_groups', value: 'list_custom_routing_endpoint_groups' }
    ]}
>
<TabItem value="describe_custom_routing_endpoint_group">

Describe an endpoint group for a custom routing accelerator.

```sql
SELECT
DestinationDescriptions,
EndpointDescriptions,
EndpointGroupArn,
EndpointGroupRegion
FROM aws.globalaccelerator.custom_routing_endpoint_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_routing_endpoint_groups">

List the endpoint groups that are associated with a listener for a custom routing accelerator.

```sql
SELECT
DestinationDescriptions,
EndpointDescriptions,
EndpointGroupArn,
EndpointGroupRegion
FROM aws.globalaccelerator.custom_routing_endpoint_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_routing_endpoint_group"
    values={[
        { label: 'create_custom_routing_endpoint_group', value: 'create_custom_routing_endpoint_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_routing_endpoint_group">

Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region.

```sql
INSERT INTO aws.globalaccelerator.custom_routing_endpoint_groups (
ListenerArn,
EndpointGroupRegion,
DestinationConfigurations,
IdempotencyToken,
region
)
SELECT 
'{{ ListenerArn }}' /* required */,
'{{ EndpointGroupRegion }}' /* required */,
'{{ DestinationConfigurations }}' /* required */,
'{{ IdempotencyToken }}' /* required */,
'{{ region }}'
RETURNING
EndpointGroup
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_routing_endpoint_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_routing_endpoint_groups resource.
    - name: ListenerArn
      value: "{{ ListenerArn }}"
      description: |
        The Amazon Resource Name (ARN) of the listener for a custom routing endpoint.
    - name: EndpointGroupRegion
      value: "{{ EndpointGroupRegion }}"
      description: |
        The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a specific Region.
    - name: DestinationConfigurations
      description: |
        Sets the port range and protocol for all endpoints (virtual private cloud subnets) in a custom routing endpoint group to accept client traffic on.
      value:
        - FromPort: {{ FromPort }}
          ToPort: {{ ToPort }}
          Protocols: "{{ Protocols }}"
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_routing_endpoint_group"
    values={[
        { label: 'delete_custom_routing_endpoint_group', value: 'delete_custom_routing_endpoint_group' }
    ]}
>
<TabItem value="delete_custom_routing_endpoint_group">

Delete an endpoint group from a listener for a custom routing accelerator.

```sql
DELETE FROM aws.globalaccelerator.custom_routing_endpoint_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
