--- 
title: vpc_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_connections
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>vpc_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.vpc_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_connection"
    values={[
        { label: 'describe_vpc_connection', value: 'describe_vpc_connection' },
        { label: 'list_vpc_connections', value: 'list_vpc_connections' }
    ]}
>
<TabItem value="describe_vpc_connection">

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
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_connection" /></td>
    <td><code>object</code></td>
    <td>A response object that provides information for the specified VPC connection.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vpc_connections">

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
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_connection_summaries" /></td>
    <td><code>array</code></td>
    <td>A VPCConnectionSummaries object that returns a summary of VPC connection objects.</td>
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
    <td><a href="#describe_vpc_connection"><CopyableCode code="describe_vpc_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-vpc_connection_id"><code>vpc_connection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a VPC connection.</td>
</tr>
<tr>
    <td><a href="#list_vpc_connections"><CopyableCode code="list_vpc_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all of the VPC connections in the current set Amazon Web Services Region of an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_vpc_connection"><CopyableCode code="create_vpc_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VPCConnectionId"><code>VPCConnectionId</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-SecurityGroupIds"><code>SecurityGroupIds</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a new VPC connection.</td>
</tr>
<tr>
    <td><a href="#update_vpc_connection"><CopyableCode code="update_vpc_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-vpc_connection_id"><code>vpc_connection_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-SecurityGroupIds"><code>SecurityGroupIds</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Updates a VPC connection.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_connection"><CopyableCode code="delete_vpc_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-vpc_connection_id"><code>vpc_connection_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a VPC connection.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the account where you want to delete a VPC connection.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-vpc_connection_id">
    <td><CopyableCode code="vpc_connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_connection"
    values={[
        { label: 'describe_vpc_connection', value: 'describe_vpc_connection' },
        { label: 'list_vpc_connections', value: 'list_vpc_connections' }
    ]}
>
<TabItem value="describe_vpc_connection">

Describes a VPC connection.

```sql
SELECT
request_id,
status,
vpc_connection
FROM aws.quicksight.vpc_connections
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND vpc_connection_id = '{{ vpc_connection_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vpc_connections">

Lists all of the VPC connections in the current set Amazon Web Services Region of an Amazon Web Services account.

```sql
SELECT
next_token,
request_id,
status,
vpc_connection_summaries
FROM aws.quicksight.vpc_connections
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_connection"
    values={[
        { label: 'create_vpc_connection', value: 'create_vpc_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_connection">

Creates a new VPC connection.

```sql
INSERT INTO aws.quicksight.vpc_connections (
VPCConnectionId,
Name,
SubnetIds,
SecurityGroupIds,
DnsResolvers,
RoleArn,
Tags,
aws_account_id,
region
)
SELECT 
'{{ VPCConnectionId }}' /* required */,
'{{ Name }}' /* required */,
'{{ SubnetIds }}' /* required */,
'{{ SecurityGroupIds }}' /* required */,
'{{ DnsResolvers }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
arn,
availability_status,
creation_status,
request_id,
status,
vpc_connection_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_connections
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the vpc_connections resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_connections resource.
    - name: VPCConnectionId
      value: "{{ VPCConnectionId }}"
    - name: Name
      value: "{{ Name }}"
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
    - name: DnsResolvers
      value:
        - "{{ DnsResolvers }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vpc_connection"
    values={[
        { label: 'update_vpc_connection', value: 'update_vpc_connection' }
    ]}
>
<TabItem value="update_vpc_connection">

Updates a VPC connection.

```sql
UPDATE aws.quicksight.vpc_connections
SET 
Name = '{{ Name }}',
SubnetIds = '{{ SubnetIds }}',
SecurityGroupIds = '{{ SecurityGroupIds }}',
DnsResolvers = '{{ DnsResolvers }}',
RoleArn = '{{ RoleArn }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND vpc_connection_id = '{{ vpc_connection_id }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND SubnetIds = '{{ SubnetIds }}' --required
AND SecurityGroupIds = '{{ SecurityGroupIds }}' --required
AND RoleArn = '{{ RoleArn }}' --required
RETURNING
arn,
availability_status,
request_id,
status,
update_status,
vpc_connection_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_connection"
    values={[
        { label: 'delete_vpc_connection', value: 'delete_vpc_connection' }
    ]}
>
<TabItem value="delete_vpc_connection">

Deletes a VPC connection.

```sql
DELETE FROM aws.quicksight.vpc_connections
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND vpc_connection_id = '{{ vpc_connection_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
