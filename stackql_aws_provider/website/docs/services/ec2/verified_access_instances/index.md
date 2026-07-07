--- 
title: verified_access_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_instances
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

Creates, updates, deletes, gets or lists a <code>verified_access_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verified_access_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.verified_access_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_verified_access_instances"
    values={[
        { label: 'describe_verified_access_instances', value: 'describe_verified_access_instances' }
    ]}
>
<TabItem value="describe_verified_access_instances">

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
    <td><CopyableCode code="CidrEndpointsCustomSubDomain" /></td>
    <td><code>string</code></td>
    <td>The custom subdomain.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the Amazon Web Services Verified Access instance.</td>
</tr>
<tr>
    <td><CopyableCode code="FipsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether support for Federal Information Processing Standards (FIPS) is enabled on the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string</code></td>
    <td>The last updated time.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="VerifiedAccessInstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Verified Access instance.</td>
</tr>
<tr>
    <td><CopyableCode code="VerifiedAccessTrustProviders" /></td>
    <td><code>string</code></td>
    <td>The IDs of the Amazon Web Services Verified Access trust providers.</td>
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
    <td><a href="#describe_verified_access_instances"><CopyableCode code="describe_verified_access_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VerifiedAccessInstanceId"><code>VerifiedAccessInstanceId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified Amazon Web Services Verified Access instances.</td>
</tr>
<tr>
    <td><a href="#create_verified_access_instance"><CopyableCode code="create_verified_access_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-FIPSEnabled"><code>FIPSEnabled</code></a>, <a href="#parameter-CidrEndpointsCustomSubDomain"><code>CidrEndpointsCustomSubDomain</code></a></td>
    <td>An Amazon Web Services Verified Access instance is a regional entity that evaluates application requests and grants access only when your security requirements are met.</td>
</tr>
<tr>
    <td><a href="#modify_verified_access_instance"><CopyableCode code="modify_verified_access_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VerifiedAccessInstanceId"><code>VerifiedAccessInstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-CidrEndpointsCustomSubDomain"><code>CidrEndpointsCustomSubDomain</code></a></td>
    <td>Modifies the configuration of the specified Amazon Web Services Verified Access instance.</td>
</tr>
<tr>
    <td><a href="#delete_verified_access_instance"><CopyableCode code="delete_verified_access_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VerifiedAccessInstanceId"><code>VerifiedAccessInstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Delete an Amazon Web Services Verified Access instance.</td>
</tr>
<tr>
    <td><a href="#export_verified_access_instance_client_configuration"><CopyableCode code="export_verified_access_instance_client_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VerifiedAccessInstanceId"><code>VerifiedAccessInstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Exports the client configuration for a Verified Access instance.</td>
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
<tr id="parameter-VerifiedAccessInstanceId">
    <td><CopyableCode code="VerifiedAccessInstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CidrEndpointsCustomSubDomain">
    <td><CopyableCode code="CidrEndpointsCustomSubDomain" /></td>
    <td><code>string</code></td>
    <td>The custom subdomain.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the Verified Access instance.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-FIPSEnabled">
    <td><CopyableCode code="FIPSEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable or disable support for Federal Information Processing Standards (FIPS) on the instance.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the Verified Access instance.</td>
</tr>
<tr id="parameter-VerifiedAccessInstanceId">
    <td><CopyableCode code="VerifiedAccessInstanceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Verified Access instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_verified_access_instances"
    values={[
        { label: 'describe_verified_access_instances', value: 'describe_verified_access_instances' }
    ]}
>
<TabItem value="describe_verified_access_instances">

Describes the specified Amazon Web Services Verified Access instances.

```sql
SELECT
CidrEndpointsCustomSubDomain,
CreationTime,
Description,
FipsEnabled,
LastUpdatedTime,
Tags,
VerifiedAccessInstanceId,
VerifiedAccessTrustProviders
FROM aws.ec2.verified_access_instances
WHERE region = '{{ region }}' -- required
AND VerifiedAccessInstanceId = '{{ VerifiedAccessInstanceId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_verified_access_instance"
    values={[
        { label: 'create_verified_access_instance', value: 'create_verified_access_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_verified_access_instance">

An Amazon Web Services Verified Access instance is a regional entity that evaluates application requests and grants access only when your security requirements are met.

```sql
INSERT INTO aws.ec2.verified_access_instances (
region,
Description,
TagSpecification,
ClientToken,
DryRun,
FIPSEnabled,
CidrEndpointsCustomSubDomain
)
SELECT 
'{{ region }}',
'{{ Description }}',
'{{ TagSpecification }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ FIPSEnabled }}',
'{{ CidrEndpointsCustomSubDomain }}'
RETURNING
CidrEndpointsCustomSubDomain,
CreationTime,
Description,
FipsEnabled,
LastUpdatedTime,
Tags,
VerifiedAccessInstanceId,
VerifiedAccessTrustProviders
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: verified_access_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the verified_access_instances resource.
    - name: Description
      value: "{{ Description }}"
      description: A description for the Verified Access instance.
      description: A description for the Verified Access instance.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the Verified Access instance.
      description: The tags to assign to the Verified Access instance.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.
      description: A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: FIPSEnabled
      value: {{ FIPSEnabled }}
      description: Enable or disable support for Federal Information Processing Standards (FIPS) on the instance.
      description: Enable or disable support for Federal Information Processing Standards (FIPS) on the instance.
    - name: CidrEndpointsCustomSubDomain
      value: "{{ CidrEndpointsCustomSubDomain }}"
      description: The custom subdomain.
      description: The custom subdomain.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_verified_access_instance"
    values={[
        { label: 'modify_verified_access_instance', value: 'modify_verified_access_instance' }
    ]}
>
<TabItem value="modify_verified_access_instance">

Modifies the configuration of the specified Amazon Web Services Verified Access instance.

```sql
UPDATE aws.ec2.verified_access_instances
SET 
-- No updatable properties
WHERE 
VerifiedAccessInstanceId = '{{ VerifiedAccessInstanceId }}' --required
AND region = '{{ region }}' --required
AND Description = '{{ Description}}'
AND DryRun = {{ DryRun}}
AND ClientToken = '{{ ClientToken}}'
AND CidrEndpointsCustomSubDomain = '{{ CidrEndpointsCustomSubDomain}}'
RETURNING
CidrEndpointsCustomSubDomain,
CreationTime,
Description,
FipsEnabled,
LastUpdatedTime,
Tags,
VerifiedAccessInstanceId,
VerifiedAccessTrustProviders;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_verified_access_instance"
    values={[
        { label: 'delete_verified_access_instance', value: 'delete_verified_access_instance' }
    ]}
>
<TabItem value="delete_verified_access_instance">

Delete an Amazon Web Services Verified Access instance.

```sql
DELETE FROM aws.ec2.verified_access_instances
WHERE VerifiedAccessInstanceId = '{{ VerifiedAccessInstanceId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND ClientToken = '{{ ClientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_verified_access_instance_client_configuration"
    values={[
        { label: 'export_verified_access_instance_client_configuration', value: 'export_verified_access_instance_client_configuration' }
    ]}
>
<TabItem value="export_verified_access_instance_client_configuration">

Exports the client configuration for a Verified Access instance.

```sql
EXEC aws.ec2.verified_access_instances.export_verified_access_instance_client_configuration 
@VerifiedAccessInstanceId='{{ VerifiedAccessInstanceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
