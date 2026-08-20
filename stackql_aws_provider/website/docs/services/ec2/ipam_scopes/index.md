--- 
title: ipam_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_scopes
  - ec2
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

Creates, updates, deletes, gets or lists an <code>ipam_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_scopes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_scopes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_scopes"
    values={[
        { label: 'describe_ipam_scopes', value: 'describe_ipam_scopes' }
    ]}
>
<TabItem value="describe_ipam_scopes">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the scope.</td>
</tr>
<tr>
    <td><CopyableCode code="external_authority_configuration" /></td>
    <td><code>string</code></td>
    <td>The external authority configuration for this IPAM scope, if configured. The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system. In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the IPAM scope.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_scope_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the scope.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_scope_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the scope.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_scope_type" /></td>
    <td><code>string</code></td>
    <td>The type of the scope.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the scope is the default scope or not.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the scope.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_count" /></td>
    <td><code>integer</code></td>
    <td>The number of pools in the scope.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the IPAM scope.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
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
    <td><a href="#describe_ipam_scopes"><CopyableCode code="describe_ipam_scopes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IpamScopeId"><code>IpamScopeId</code></a></td>
    <td>Get information about your IPAM scopes.</td>
</tr>
<tr>
    <td><a href="#create_ipam_scope"><CopyableCode code="create_ipam_scope" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-ExternalAuthorityConfiguration"><code>ExternalAuthorityConfiguration</code></a></td>
    <td>Create an IPAM scope. In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict. For more information, see Add a scope in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_ipam_scope"><CopyableCode code="modify_ipam_scope" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamScopeId"><code>IpamScopeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-ExternalAuthorityConfiguration"><code>ExternalAuthorityConfiguration</code></a>, <a href="#parameter-RemoveExternalAuthorityConfiguration"><code>RemoveExternalAuthorityConfiguration</code></a></td>
    <td>Modify an IPAM scope.</td>
</tr>
<tr>
    <td><a href="#delete_ipam_scope"><CopyableCode code="delete_ipam_scope" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamScopeId"><code>IpamScopeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Delete the scope for an IPAM. You cannot delete the default scopes. For more information, see Delete a scope in the Amazon VPC IPAM User Guide.</td>
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
<tr id="parameter-IpamId">
    <td><CopyableCode code="IpamId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM for which you're creating this scope.</td>
</tr>
<tr id="parameter-IpamScopeId">
    <td><CopyableCode code="IpamScopeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the scope to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the scope you want to modify.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ExternalAuthorityConfiguration">
    <td><CopyableCode code="ExternalAuthorityConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system. In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters for the request. For more information about filtering, see Filtering CLI output.</td>
</tr>
<tr id="parameter-IpamScopeId">
    <td><CopyableCode code="IpamScopeId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the scopes you want information on.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-RemoveExternalAuthorityConfiguration">
    <td><CopyableCode code="RemoveExternalAuthorityConfiguration" /></td>
    <td><code>boolean</code></td>
    <td>Remove the external authority configuration. true to remove.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_scopes"
    values={[
        { label: 'describe_ipam_scopes', value: 'describe_ipam_scopes' }
    ]}
>
<TabItem value="describe_ipam_scopes">

Get information about your IPAM scopes.

```sql
SELECT
description,
external_authority_configuration,
ipam_arn,
ipam_region,
ipam_scope_arn,
ipam_scope_id,
ipam_scope_type,
is_default,
owner_id,
pool_count,
state,
tags
FROM aws.ec2.ipam_scopes
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IpamScopeId = '{{ IpamScopeId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam_scope"
    values={[
        { label: 'create_ipam_scope', value: 'create_ipam_scope' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam_scope">

Create an IPAM scope. In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict. For more information, see Add a scope in the Amazon VPC IPAM User Guide.

```sql
INSERT INTO aws.ec2.ipam_scopes (
IpamId,
region,
DryRun,
Description,
TagSpecification,
ClientToken,
ExternalAuthorityConfiguration
)
SELECT 
'{{ IpamId }}',
'{{ region }}',
'{{ DryRun }}',
'{{ Description }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ ExternalAuthorityConfiguration }}'
RETURNING
description,
external_authority_configuration,
ipam_arn,
ipam_region,
ipam_scope_arn,
ipam_scope_id,
ipam_scope_type,
is_default,
owner_id,
pool_count,
state,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipam_scopes
  props:
    - name: IpamId
      value: "{{ IpamId }}"
      description: Required parameter for the ipam_scopes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipam_scopes resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Description
      value: "{{ Description }}"
      description: A description for the scope you're creating.
      description: A description for the scope you're creating.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
      description: The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.
    - name: ExternalAuthorityConfiguration
      value: "{{ ExternalAuthorityConfiguration }}"
      description: The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system. In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.
      description: The configuration that links an Amazon VPC IPAM scope to an external authority system. It specifies the type of external system and the external resource identifier that identifies your account or instance in that system. In IPAM, an external authority is a third-party IP address management system that provides CIDR blocks when you provision address space for top-level IPAM pools. This allows you to use your existing IP management system to control which address ranges are allocated to Amazon Web Services while using Amazon VPC IPAM to manage subnets within those ranges.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_ipam_scope"
    values={[
        { label: 'modify_ipam_scope', value: 'modify_ipam_scope' }
    ]}
>
<TabItem value="modify_ipam_scope">

Modify an IPAM scope.

```sql
UPDATE aws.ec2.ipam_scopes
SET 
-- No updatable properties
WHERE 
IpamScopeId = '{{ IpamScopeId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Description = '{{ Description}}'
AND ExternalAuthorityConfiguration = '{{ ExternalAuthorityConfiguration}}'
AND RemoveExternalAuthorityConfiguration = {{ RemoveExternalAuthorityConfiguration}}
RETURNING
description,
external_authority_configuration,
ipam_arn,
ipam_region,
ipam_scope_arn,
ipam_scope_id,
ipam_scope_type,
is_default,
owner_id,
pool_count,
state,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam_scope"
    values={[
        { label: 'delete_ipam_scope', value: 'delete_ipam_scope' }
    ]}
>
<TabItem value="delete_ipam_scope">

Delete the scope for an IPAM. You cannot delete the default scopes. For more information, see Delete a scope in the Amazon VPC IPAM User Guide.

```sql
DELETE FROM aws.ec2.ipam_scopes
WHERE IpamScopeId = '{{ IpamScopeId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
