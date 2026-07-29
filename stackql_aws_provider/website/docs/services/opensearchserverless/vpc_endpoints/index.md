--- 
title: vpc_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoints
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.vpc_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_vpc_endpoint"
    values={[
        { label: 'batch_get_vpc_endpoint', value: 'batch_get_vpc_endpoint' },
        { label: 'list_vpc_endpoints', value: 'list_vpc_endpoints' }
    ]}
>
<TabItem value="batch_get_vpc_endpoint">

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
    <td><CopyableCode code="vpc_endpoint_details" /></td>
    <td><code>array</code></td>
    <td>Details about the specified VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_error_details" /></td>
    <td><code>array</code></td>
    <td>Error information for a failed request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vpc_endpoints">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_summaries" /></td>
    <td><code>array</code></td>
    <td>Details about each VPC endpoint, including the name and current status.</td>
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
    <td><a href="#batch_get_vpc_endpoint"><CopyableCode code="batch_get_vpc_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns attributes for one or more VPC endpoints associated with the current account. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.</td>
</tr>
<tr>
    <td><a href="#list_vpc_endpoints"><CopyableCode code="list_vpc_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.</td>
</tr>
<tr>
    <td><a href="#create_vpc_endpoint"><CopyableCode code="create_vpc_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-vpcId"><code>vpcId</code></a>, <a href="#parameter-subnetIds"><code>subnetIds</code></a></td>
    <td></td>
    <td>Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.</td>
</tr>
<tr>
    <td><a href="#update_vpc_endpoint"><CopyableCode code="update_vpc_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Updates an OpenSearch Serverless-managed interface endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_endpoint"><CopyableCode code="delete_vpc_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.</td>
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
    defaultValue="batch_get_vpc_endpoint"
    values={[
        { label: 'batch_get_vpc_endpoint', value: 'batch_get_vpc_endpoint' },
        { label: 'list_vpc_endpoints', value: 'list_vpc_endpoints' }
    ]}
>
<TabItem value="batch_get_vpc_endpoint">

Returns attributes for one or more VPC endpoints associated with the current account. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.

```sql
SELECT
vpc_endpoint_details,
vpc_endpoint_error_details
FROM aws.opensearchserverless.vpc_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vpc_endpoints">

Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.

```sql
SELECT
next_token,
vpc_endpoint_summaries
FROM aws.opensearchserverless.vpc_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_endpoint"
    values={[
        { label: 'create_vpc_endpoint', value: 'create_vpc_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_endpoint">

Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.

```sql
INSERT INTO aws.opensearchserverless.vpc_endpoints (
name,
vpcId,
subnetIds,
securityGroupIds,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ vpcId }}' /* required */,
'{{ subnetIds }}' /* required */,
'{{ securityGroupIds }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
create_vpc_endpoint_detail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_endpoints resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the interface endpoint.
    - name: vpcId
      value: "{{ vpcId }}"
      description: |
        The ID of the VPC from which you'll access OpenSearch Serverless.
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
      description: |
        The ID of one or more subnets from which you'll access OpenSearch Serverless.
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
      description: |
        The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Unique, case-sensitive identifier to ensure idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vpc_endpoint"
    values={[
        { label: 'update_vpc_endpoint', value: 'update_vpc_endpoint' }
    ]}
>
<TabItem value="update_vpc_endpoint">

Updates an OpenSearch Serverless-managed interface endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.

```sql
UPDATE aws.opensearchserverless.vpc_endpoints
SET 
id = '{{ id }}',
addSubnetIds = '{{ addSubnetIds }}',
removeSubnetIds = '{{ removeSubnetIds }}',
addSecurityGroupIds = '{{ addSecurityGroupIds }}',
removeSecurityGroupIds = '{{ removeSecurityGroupIds }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
RETURNING
update_vpc_endpoint_detail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_endpoint"
    values={[
        { label: 'delete_vpc_endpoint', value: 'delete_vpc_endpoint' }
    ]}
>
<TabItem value="delete_vpc_endpoint">

Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see Access Amazon OpenSearch Serverless using an interface endpoint.

```sql
DELETE FROM aws.opensearchserverless.vpc_endpoints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
