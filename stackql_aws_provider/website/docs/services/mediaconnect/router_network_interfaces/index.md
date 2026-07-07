--- 
title: router_network_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - router_network_interfaces
  - mediaconnect
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

Creates, updates, deletes, gets or lists a <code>router_network_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="router_network_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.router_network_interfaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_router_network_interface"
    values={[
        { label: 'batch_get_router_network_interface', value: 'batch_get_router_network_interface' },
        { label: 'get_router_network_interface', value: 'get_router_network_interface' },
        { label: 'list_router_network_interfaces', value: 'list_router_network_interfaces' }
    ]}
>
<TabItem value="batch_get_router_network_interface">

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
    <td><CopyableCode code="Errors" /></td>
    <td><code>array</code></td>
    <td>An array of errors that occurred when retrieving the requested router network interfaces.</td>
</tr>
<tr>
    <td><CopyableCode code="RouterNetworkInterfaces" /></td>
    <td><code>array</code></td>
    <td>An array of router network interfaces that were successfully retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_router_network_interface">

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
    <td>The Amazon Resource Name (ARN) of the router network interface. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerNetworkInterface:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedInputCount" /></td>
    <td><code>integer</code></td>
    <td>The number of router inputs associated with the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedOutputCount" /></td>
    <td><code>integer</code></td>
    <td>The number of router outputs associated with the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="Configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for a router network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router network interface was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the router network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the router network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInterfaceType" /></td>
    <td><code>string</code></td>
    <td>The type of the router network interface. (PUBLIC, VPC)</td>
</tr>
<tr>
    <td><CopyableCode code="RegionName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the router network interface is located.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the router network interface. (CREATING, ACTIVE, UPDATING, DELETING, ERROR, RECOVERING)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs that can be used to tag and organize this router network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router network interface was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_router_network_interfaces">

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
    <td>The Amazon Resource Name (ARN) of the router network interface. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerNetworkInterface:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedInputCount" /></td>
    <td><code>integer</code></td>
    <td>The number of router inputs associated with the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedOutputCount" /></td>
    <td><code>integer</code></td>
    <td>The number of router outputs associated with the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the network interface was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the router network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the router network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInterfaceType" /></td>
    <td><code>string</code></td>
    <td>The type of the router network interface. (PUBLIC, VPC)</td>
</tr>
<tr>
    <td><CopyableCode code="RegionName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the router network interface is located.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the router network interface. (CREATING, ACTIVE, UPDATING, DELETING, ERROR, RECOVERING)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router network interface was last updated.</td>
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
    <td><a href="#batch_get_router_network_interface"><CopyableCode code="batch_get_router_network_interface" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arns"><code>arns</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about multiple router network interfaces in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#get_router_network_interface"><CopyableCode code="get_router_network_interface" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific router network interface in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#list_router_network_interfaces"><CopyableCode code="list_router_network_interfaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of router network interfaces in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#create_router_network_interface"><CopyableCode code="create_router_network_interface" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Configuration"><code>Configuration</code></a></td>
    <td></td>
    <td>Creates a new router network interface in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#update_router_network_interface"><CopyableCode code="update_router_network_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing router network interface in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#delete_router_network_interface"><CopyableCode code="delete_router_network_interface" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a router network interface from AWS Elemental MediaConnect.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the router network interface that you want to delete.</td>
</tr>
<tr id="parameter-arns">
    <td><CopyableCode code="arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the router network interfaces you want to retrieve information about.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of router network interfaces to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_router_network_interface"
    values={[
        { label: 'batch_get_router_network_interface', value: 'batch_get_router_network_interface' },
        { label: 'get_router_network_interface', value: 'get_router_network_interface' },
        { label: 'list_router_network_interfaces', value: 'list_router_network_interfaces' }
    ]}
>
<TabItem value="batch_get_router_network_interface">

Retrieves information about multiple router network interfaces in AWS Elemental MediaConnect.

```sql
SELECT
Errors,
RouterNetworkInterfaces
FROM aws.mediaconnect.router_network_interfaces
WHERE arns = '{{ arns }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_router_network_interface">

Retrieves information about a specific router network interface in AWS Elemental MediaConnect.

```sql
SELECT
Arn,
AssociatedInputCount,
AssociatedOutputCount,
Configuration,
CreatedAt,
Id,
Name,
NetworkInterfaceType,
RegionName,
State,
Tags,
UpdatedAt
FROM aws.mediaconnect.router_network_interfaces
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_router_network_interfaces">

Retrieves a list of router network interfaces in AWS Elemental MediaConnect.

```sql
SELECT
Arn,
AssociatedInputCount,
AssociatedOutputCount,
CreatedAt,
Id,
Name,
NetworkInterfaceType,
RegionName,
State,
UpdatedAt
FROM aws.mediaconnect.router_network_interfaces
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_router_network_interface"
    values={[
        { label: 'create_router_network_interface', value: 'create_router_network_interface' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_router_network_interface">

Creates a new router network interface in AWS Elemental MediaConnect.

```sql
INSERT INTO aws.mediaconnect.router_network_interfaces (
Name,
Configuration,
RegionName,
Tags,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ Configuration }}' /* required */,
'{{ RegionName }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
RouterNetworkInterface
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: router_network_interfaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the router_network_interfaces resource.
    - name: Name
      value: "{{ Name }}"
    - name: Configuration
      description: |
        The configuration settings for a router network interface.
      value:
        Public:
          AllowRules:
            - Cidr: "{{ Cidr }}"
        Vpc:
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
          SubnetId: "{{ SubnetId }}"
    - name: RegionName
      value: "{{ RegionName }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_router_network_interface"
    values={[
        { label: 'update_router_network_interface', value: 'update_router_network_interface' }
    ]}
>
<TabItem value="update_router_network_interface">

Updates the configuration of an existing router network interface in AWS Elemental MediaConnect.

```sql
UPDATE aws.mediaconnect.router_network_interfaces
SET 
Name = '{{ Name }}',
Configuration = '{{ Configuration }}'
WHERE 
arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
RETURNING
RouterNetworkInterface;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_router_network_interface"
    values={[
        { label: 'delete_router_network_interface', value: 'delete_router_network_interface' }
    ]}
>
<TabItem value="delete_router_network_interface">

Deletes a router network interface from AWS Elemental MediaConnect.

```sql
DELETE FROM aws.mediaconnect.router_network_interfaces
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
