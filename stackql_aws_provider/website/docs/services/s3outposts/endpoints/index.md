--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - s3outposts
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

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3outposts.endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_endpoints"
    values={[
        { label: 'list_endpoints', value: 'list_endpoints' }
    ]}
>
<TabItem value="list_endpoints">

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
    <td><CopyableCode code="access_type" /></td>
    <td><code>string</code></td>
    <td>The type of connectivity used to access the Amazon S3 on Outposts endpoint. (Private, CustomerOwnedIp)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr_block" /></td>
    <td><code>string</code></td>
    <td>The VPC CIDR committed by this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_owned_ipv_4_pool" /></td>
    <td><code>string</code></td>
    <td>The ID of the customer-owned IPv4 address pool used for the endpoint. (pattern: &lt;code&gt;^ipv4pool-coip-(&#91;0-9a-f&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):s3-outposts:&#91;a-z\-0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:outpost/(op-&#91;a-f0-9&#93;&#123;17&#125;|ec2)/endpoint/&#91;a-zA-Z0-9&#93;&#123;19&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failed_reason" /></td>
    <td><code>object</code></td>
    <td>The failure reason, if any, for a create or delete endpoint operation.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interfaces" /></td>
    <td><code>array</code></td>
    <td>The network interface of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="outposts_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outposts. (pattern: &lt;code&gt;^(op-&#91;a-f0-9&#93;&#123;17&#125;|\d&#123;12&#125;|ec2)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group used for the endpoint. (pattern: &lt;code&gt;^sg-(&#91;0-9a-f&#93;&#123;8&#125;|&#91;0-9a-f&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the endpoint. (Pending, Available, Deleting, Create_Failed, Delete_Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet used for the endpoint. (pattern: &lt;code&gt;^subnet-(&#91;0-9a-f&#93;&#123;8&#125;|&#91;0-9a-f&#93;&#123;17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC used for the endpoint.</td>
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
    <td><a href="#list_endpoints"><CopyableCode code="list_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists endpoints associated with the specified Outpost. Related actions include: CreateEndpoint DeleteEndpoint</td>
</tr>
<tr>
    <td><a href="#create_endpoint"><CopyableCode code="create_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OutpostId"><code>OutpostId</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a></td>
    <td></td>
    <td>Creates an endpoint and associates it with the specified Outpost. It can take up to 5 minutes for this action to finish. Related actions include: DeleteEndpoint ListEndpoints</td>
</tr>
<tr>
    <td><a href="#delete_endpoint"><CopyableCode code="delete_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-endpointId"><code>endpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-outpostId"><code>outpostId</code></a></td>
    <td>Deletes an endpoint. It can take up to 5 minutes for this action to finish. Related actions include: CreateEndpoint ListEndpoints</td>
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
<tr id="parameter-endpointId">
    <td><CopyableCode code="endpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of endpoints that will be returned in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If a previous response from this operation included a NextToken value, provide that value here to retrieve the next page of results.</td>
</tr>
<tr id="parameter-outpostId">
    <td><CopyableCode code="outpostId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outposts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_endpoints"
    values={[
        { label: 'list_endpoints', value: 'list_endpoints' }
    ]}
>
<TabItem value="list_endpoints">

Lists endpoints associated with the specified Outpost. Related actions include: CreateEndpoint DeleteEndpoint

```sql
SELECT
access_type,
cidr_block,
creation_time,
customer_owned_ipv_4_pool,
endpoint_arn,
failed_reason,
network_interfaces,
outposts_id,
security_group_id,
status,
subnet_id,
vpc_id
FROM aws.s3outposts.endpoints
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_endpoint"
    values={[
        { label: 'create_endpoint', value: 'create_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_endpoint">

Creates an endpoint and associates it with the specified Outpost. It can take up to 5 minutes for this action to finish. Related actions include: DeleteEndpoint ListEndpoints

```sql
INSERT INTO aws.s3outposts.endpoints (
OutpostId,
SubnetId,
SecurityGroupId,
AccessType,
CustomerOwnedIpv4Pool,
region
)
SELECT 
'{{ OutpostId }}' /* required */,
'{{ SubnetId }}' /* required */,
'{{ SecurityGroupId }}' /* required */,
'{{ AccessType }}',
'{{ CustomerOwnedIpv4Pool }}',
'{{ region }}'
RETURNING
endpoint_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the endpoints resource.
    - name: OutpostId
      value: "{{ OutpostId }}"
    - name: SubnetId
      value: "{{ SubnetId }}"
    - name: SecurityGroupId
      value: "{{ SecurityGroupId }}"
    - name: AccessType
      value: "{{ AccessType }}"
      valid_values: ['Private', 'CustomerOwnedIp']
    - name: CustomerOwnedIpv4Pool
      value: "{{ CustomerOwnedIpv4Pool }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_endpoint"
    values={[
        { label: 'delete_endpoint', value: 'delete_endpoint' }
    ]}
>
<TabItem value="delete_endpoint">

Deletes an endpoint. It can take up to 5 minutes for this action to finish. Related actions include: CreateEndpoint ListEndpoints

```sql
DELETE FROM aws.s3outposts.endpoints
WHERE endpointId = '{{ endpointId }}' --required
AND region = '{{ region }}' --required
AND outpostId = '{{ outpostId }}'
;
```
</TabItem>
</Tabs>
