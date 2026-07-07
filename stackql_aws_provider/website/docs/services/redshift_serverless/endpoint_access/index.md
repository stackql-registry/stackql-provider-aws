--- 
title: endpoint_access
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_access
  - redshift_serverless
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

Creates, updates, deletes, gets or lists an <code>endpoint_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.endpoint_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_endpoint_access"
    values={[
        { label: 'get_endpoint_access', value: 'get_endpoint_access' },
        { label: 'list_endpoint_access', value: 'list_endpoint_access' }
    ]}
>
<TabItem value="get_endpoint_access">

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
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>The DNS address of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointCreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which Amazon Redshift Serverless accepts incoming connections.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The unique identifier of subnets where Amazon Redshift Serverless choose to deploy the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcEndpoint" /></td>
    <td><code>object</code></td>
    <td>The connection endpoint for connecting to Amazon Redshift Serverless.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcSecurityGroups" /></td>
    <td><code>array</code></td>
    <td>The security groups associated with the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup associated with the endpoint.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_endpoint_access">

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
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>The DNS address of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointCreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpointStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which Amazon Redshift Serverless accepts incoming connections.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The unique identifier of subnets where Amazon Redshift Serverless choose to deploy the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcEndpoint" /></td>
    <td><code>object</code></td>
    <td>The connection endpoint for connecting to Amazon Redshift Serverless.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcSecurityGroups" /></td>
    <td><code>array</code></td>
    <td>The security groups associated with the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="workgroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup associated with the endpoint.</td>
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
    <td><a href="#get_endpoint_access"><CopyableCode code="get_endpoint_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information, such as the name, about a VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#list_endpoint_access"><CopyableCode code="list_endpoint_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of EndpointAccess objects and relevant information.</td>
</tr>
<tr>
    <td><a href="#create_endpoint_access"><CopyableCode code="create_endpoint_access" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-endpointName"><code>endpointName</code></a>, <a href="#parameter-subnetIds"><code>subnetIds</code></a>, <a href="#parameter-workgroupName"><code>workgroupName</code></a></td>
    <td></td>
    <td>Creates an Amazon Redshift Serverless managed VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#update_endpoint_access"><CopyableCode code="update_endpoint_access" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-endpointName"><code>endpointName</code></a></td>
    <td></td>
    <td>Updates an Amazon Redshift Serverless managed endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_endpoint_access"><CopyableCode code="delete_endpoint_access" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Redshift Serverless managed VPC endpoint.</td>
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
    defaultValue="get_endpoint_access"
    values={[
        { label: 'get_endpoint_access', value: 'get_endpoint_access' },
        { label: 'list_endpoint_access', value: 'list_endpoint_access' }
    ]}
>
<TabItem value="get_endpoint_access">

Returns information, such as the name, about a VPC endpoint.

```sql
SELECT
address,
endpointArn,
endpointCreateTime,
endpointName,
endpointStatus,
port,
subnetIds,
vpcEndpoint,
vpcSecurityGroups,
workgroupName
FROM aws.redshift_serverless.endpoint_access
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_endpoint_access">

Returns an array of EndpointAccess objects and relevant information.

```sql
SELECT
address,
endpointArn,
endpointCreateTime,
endpointName,
endpointStatus,
port,
subnetIds,
vpcEndpoint,
vpcSecurityGroups,
workgroupName
FROM aws.redshift_serverless.endpoint_access
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_endpoint_access"
    values={[
        { label: 'create_endpoint_access', value: 'create_endpoint_access' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_endpoint_access">

Creates an Amazon Redshift Serverless managed VPC endpoint.

```sql
INSERT INTO aws.redshift_serverless.endpoint_access (
endpointName,
ownerAccount,
subnetIds,
vpcSecurityGroupIds,
workgroupName,
region
)
SELECT 
'{{ endpointName }}' /* required */,
'{{ ownerAccount }}',
'{{ subnetIds }}' /* required */,
'{{ vpcSecurityGroupIds }}',
'{{ workgroupName }}' /* required */,
'{{ region }}'
RETURNING
endpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: endpoint_access
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the endpoint_access resource.
    - name: endpointName
      value: "{{ endpointName }}"
      description: |
        The name of the VPC endpoint. An endpoint name must contain 1-30 characters. Valid characters are A-Z, a-z, 0-9, and hyphen(-). The first character must be a letter. The name can't contain two consecutive hyphens or end with a hyphen.
    - name: ownerAccount
      value: "{{ ownerAccount }}"
      description: |
        The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
      description: |
        The unique identifers of subnets from which Amazon Redshift Serverless chooses one to deploy a VPC endpoint.
    - name: vpcSecurityGroupIds
      value:
        - "{{ vpcSecurityGroupIds }}"
      description: |
        The unique identifiers of the security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
    - name: workgroupName
      value: "{{ workgroupName }}"
      description: |
        The name of the workgroup to associate with the VPC endpoint.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_endpoint_access"
    values={[
        { label: 'update_endpoint_access', value: 'update_endpoint_access' }
    ]}
>
<TabItem value="update_endpoint_access">

Updates an Amazon Redshift Serverless managed endpoint.

```sql
UPDATE aws.redshift_serverless.endpoint_access
SET 
endpointName = '{{ endpointName }}',
vpcSecurityGroupIds = '{{ vpcSecurityGroupIds }}'
WHERE 
region = '{{ region }}' --required
AND endpointName = '{{ endpointName }}' --required
RETURNING
endpoint;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_endpoint_access"
    values={[
        { label: 'delete_endpoint_access', value: 'delete_endpoint_access' }
    ]}
>
<TabItem value="delete_endpoint_access">

Deletes an Amazon Redshift Serverless managed VPC endpoint.

```sql
DELETE FROM aws.redshift_serverless.endpoint_access
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
