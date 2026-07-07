--- 
title: gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - gateways
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

Creates, updates, deletes, gets or lists a <code>gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_gateway"
    values={[
        { label: 'describe_gateway', value: 'describe_gateway' },
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="describe_gateway">

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
    <td><CopyableCode code="EgressCidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayMessages" /></td>
    <td><code>array</code></td>
    <td>Messages with information about the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayState" /></td>
    <td><code>string</code></td>
    <td>The current status of the gateway. (CREATING, ACTIVE, UPDATING, ERROR, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the gateway. This name can not be modified after the gateway is created.</td>
</tr>
<tr>
    <td><CopyableCode code="Networks" /></td>
    <td><code>array</code></td>
    <td>The list of networks in the gateway.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gateways">

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
    <td><CopyableCode code="GatewayArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayState" /></td>
    <td><code>string</code></td>
    <td>The status of the gateway. (CREATING, ACTIVE, UPDATING, ERROR, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the gateway.</td>
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
    <td><a href="#describe_gateway"><CopyableCode code="describe_gateway" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_arn"><code>gateway_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the details of a gateway. The response includes the gateway Amazon Resource Name (ARN), name, and CIDR blocks, as well as details about the networks.</td>
</tr>
<tr>
    <td><a href="#list_gateways"><CopyableCode code="list_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Displays a list of gateways that are associated with this account. This request returns a paginated result.</td>
</tr>
<tr>
    <td><a href="#create_gateway"><CopyableCode code="create_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EgressCidrBlocks"><code>EgressCidrBlocks</code></a>, <a href="#parameter-Networks"><code>Networks</code></a></td>
    <td></td>
    <td>Creates a new gateway. The request must include at least one network (up to four).</td>
</tr>
<tr>
    <td><a href="#delete_gateway"><CopyableCode code="delete_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_arn"><code>gateway_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a gateway. Before you can delete a gateway, you must deregister its instances and delete its bridges.</td>
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
<tr id="parameter-gateway_arn">
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per API request. For example, you submit a ListGateways request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies the batch of results that you want to see. For example, you submit a ListGateways request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListGateways request a second time and specify the NextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_gateway"
    values={[
        { label: 'describe_gateway', value: 'describe_gateway' },
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="describe_gateway">

Displays the details of a gateway. The response includes the gateway Amazon Resource Name (ARN), name, and CIDR blocks, as well as details about the networks.

```sql
SELECT
EgressCidrBlocks,
GatewayArn,
GatewayMessages,
GatewayState,
Name,
Networks
FROM aws.mediaconnect.gateways
WHERE gateway_arn = '{{ gateway_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_gateways">

Displays a list of gateways that are associated with this account. This request returns a paginated result.

```sql
SELECT
GatewayArn,
GatewayState,
Name
FROM aws.mediaconnect.gateways
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gateway"
    values={[
        { label: 'create_gateway', value: 'create_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gateway">

Creates a new gateway. The request must include at least one network (up to four).

```sql
INSERT INTO aws.mediaconnect.gateways (
EgressCidrBlocks,
Name,
Networks,
region
)
SELECT 
'{{ EgressCidrBlocks }}' /* required */,
'{{ Name }}',
'{{ Networks }}' /* required */,
'{{ region }}'
RETURNING
Gateway
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the gateways resource.
    - name: EgressCidrBlocks
      value:
        - "{{ EgressCidrBlocks }}"
    - name: Name
      value: "{{ Name }}"
    - name: Networks
      value:
        - CidrBlock: "{{ CidrBlock }}"
          Name: "{{ Name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gateway"
    values={[
        { label: 'delete_gateway', value: 'delete_gateway' }
    ]}
>
<TabItem value="delete_gateway">

Deletes a gateway. Before you can delete a gateway, you must deregister its instances and delete its bridges.

```sql
DELETE FROM aws.mediaconnect.gateways
WHERE gateway_arn = '{{ gateway_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
