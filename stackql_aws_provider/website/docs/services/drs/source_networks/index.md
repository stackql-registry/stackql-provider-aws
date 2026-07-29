--- 
title: source_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - source_networks
  - drs
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

Creates, updates, deletes, gets or lists a <code>source_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.source_networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_source_networks"
    values={[
        { label: 'describe_source_networks', value: 'describe_source_networks' }
    ]}
>
<TabItem value="describe_source_networks">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Source Network. (pattern: &lt;code&gt;arn:.&#123;16,2044&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cfn_stack_name" /></td>
    <td><code>string</code></td>
    <td>CloudFormation stack name that was deployed for recovering the Source Network. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;-a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_recovery" /></td>
    <td><code>object</code></td>
    <td>An object containing information regarding the last recovery of the Source Network.</td>
</tr>
<tr>
    <td><CopyableCode code="launched_vpc_id" /></td>
    <td><code>string</code></td>
    <td>ID of the recovered VPC following Source Network recovery. (pattern: &lt;code&gt;vpc-&#91;0-9a-fA-F&#93;&#123;8,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_status" /></td>
    <td><code>string</code></td>
    <td>Status of Source Network Replication. Possible values: (a) STOPPED - Source Network is not replicating. (b) IN_PROGRESS - Source Network is being replicated. (c) PROTECTED - Source Network was replicated successfully and is being synchronized for changes. (d) ERROR - Source Network replication has failed (STOPPED, IN_PROGRESS, PROTECTED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_status_details" /></td>
    <td><code>string</code></td>
    <td>Error details in case Source Network replication status is ERROR.</td>
</tr>
<tr>
    <td><CopyableCode code="source_account_id" /></td>
    <td><code>string</code></td>
    <td>Account ID containing the VPC protected by the Source Network. (pattern: &lt;code&gt;.*&#91;0-9&#93;&#123;12,&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_network_id" /></td>
    <td><code>string</code></td>
    <td>Source Network ID. (pattern: &lt;code&gt;sn-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_region" /></td>
    <td><code>string</code></td>
    <td>Region containing the VPC protected by the Source Network. (pattern: &lt;code&gt;(us(-gov)?|ap|ca|cn|eu|eusc|sa|af|me|il)-(&#91;a-z&#93;&#123;2&#125;-)?(central|north|(north(?:east|west))|south|south(?:east|west)|east|west)-&#91;0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_vpc_id" /></td>
    <td><code>string</code></td>
    <td>VPC ID protected by the Source Network. (pattern: &lt;code&gt;vpc-&#91;0-9a-fA-F&#93;&#123;8,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of tags associated with the Source Network.</td>
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
    <td><a href="#describe_source_networks"><CopyableCode code="describe_source_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Source Networks or multiple Source Networks filtered by ID.</td>
</tr>
<tr>
    <td><a href="#create_source_network"><CopyableCode code="create_source_network" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vpcID"><code>vpcID</code></a>, <a href="#parameter-originAccountID"><code>originAccountID</code></a>, <a href="#parameter-originRegion"><code>originRegion</code></a></td>
    <td></td>
    <td>Create a new Source Network resource for a provided VPC ID.</td>
</tr>
<tr>
    <td><a href="#associate_source_network_stack"><CopyableCode code="associate_source_network_stack" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceNetworkID"><code>sourceNetworkID</code></a>, <a href="#parameter-cfnStackName"><code>cfnStackName</code></a></td>
    <td></td>
    <td>Associate a Source Network to an existing CloudFormation Stack and modify launch templates to use this network. Can be used for reverting to previously deployed CloudFormation stacks.</td>
</tr>
<tr>
    <td><a href="#delete_source_network"><CopyableCode code="delete_source_network" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete Source Network resource.</td>
</tr>
<tr>
    <td><a href="#export_source_network_cfn_template"><CopyableCode code="export_source_network_cfn_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceNetworkID"><code>sourceNetworkID</code></a></td>
    <td></td>
    <td>Export the Source Network CloudFormation template to an S3 bucket.</td>
</tr>
<tr>
    <td><a href="#start_source_network_recovery"><CopyableCode code="start_source_network_recovery" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceNetworks"><code>sourceNetworks</code></a></td>
    <td></td>
    <td>Deploy VPC for the specified Source Network and modify launch templates to use this network. The VPC will be deployed using a dedicated CloudFormation stack.</td>
</tr>
<tr>
    <td><a href="#start_source_network_replication"><CopyableCode code="start_source_network_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceNetworkID"><code>sourceNetworkID</code></a></td>
    <td></td>
    <td>Starts replication for a Source Network. This action would make the Source Network protected.</td>
</tr>
<tr>
    <td><a href="#stop_source_network_replication"><CopyableCode code="stop_source_network_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceNetworkID"><code>sourceNetworkID</code></a></td>
    <td></td>
    <td>Stops replication for a Source Network. This action would make the Source Network unprotected.</td>
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
    defaultValue="describe_source_networks"
    values={[
        { label: 'describe_source_networks', value: 'describe_source_networks' }
    ]}
>
<TabItem value="describe_source_networks">

Lists all Source Networks or multiple Source Networks filtered by ID.

```sql
SELECT
arn,
cfn_stack_name,
last_recovery,
launched_vpc_id,
replication_status,
replication_status_details,
source_account_id,
source_network_id,
source_region,
source_vpc_id,
tags
FROM aws.drs.source_networks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_source_network"
    values={[
        { label: 'create_source_network', value: 'create_source_network' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_source_network">

Create a new Source Network resource for a provided VPC ID.

```sql
INSERT INTO aws.drs.source_networks (
vpcID,
originAccountID,
originRegion,
tags,
region
)
SELECT 
'{{ vpcID }}' /* required */,
'{{ originAccountID }}' /* required */,
'{{ originRegion }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
source_network_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: source_networks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the source_networks resource.
    - name: vpcID
      value: "{{ vpcID }}"
    - name: originAccountID
      value: "{{ originAccountID }}"
    - name: originRegion
      value: "{{ originRegion }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_source_network_stack"
    values={[
        { label: 'associate_source_network_stack', value: 'associate_source_network_stack' }
    ]}
>
<TabItem value="associate_source_network_stack">

Associate a Source Network to an existing CloudFormation Stack and modify launch templates to use this network. Can be used for reverting to previously deployed CloudFormation stacks.

```sql
UPDATE aws.drs.source_networks
SET 
sourceNetworkID = '{{ sourceNetworkID }}',
cfnStackName = '{{ cfnStackName }}'
WHERE 
region = '{{ region }}' --required
AND sourceNetworkID = '{{ sourceNetworkID }}' --required
AND cfnStackName = '{{ cfnStackName }}' --required
RETURNING
job;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_source_network"
    values={[
        { label: 'delete_source_network', value: 'delete_source_network' }
    ]}
>
<TabItem value="delete_source_network">

Delete Source Network resource.

```sql
DELETE FROM aws.drs.source_networks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_source_network_cfn_template"
    values={[
        { label: 'export_source_network_cfn_template', value: 'export_source_network_cfn_template' },
        { label: 'start_source_network_recovery', value: 'start_source_network_recovery' },
        { label: 'start_source_network_replication', value: 'start_source_network_replication' },
        { label: 'stop_source_network_replication', value: 'stop_source_network_replication' }
    ]}
>
<TabItem value="export_source_network_cfn_template">

Export the Source Network CloudFormation template to an S3 bucket.

```sql
EXEC aws.drs.source_networks.export_source_network_cfn_template 
@region='{{ region }}' --required 
@@json=
'{
"sourceNetworkID": "{{ sourceNetworkID }}"
}'
;
```
</TabItem>
<TabItem value="start_source_network_recovery">

Deploy VPC for the specified Source Network and modify launch templates to use this network. The VPC will be deployed using a dedicated CloudFormation stack.

```sql
EXEC aws.drs.source_networks.start_source_network_recovery 
@region='{{ region }}' --required 
@@json=
'{
"sourceNetworks": "{{ sourceNetworks }}", 
"deployAsNew": {{ deployAsNew }}, 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
<TabItem value="start_source_network_replication">

Starts replication for a Source Network. This action would make the Source Network protected.

```sql
EXEC aws.drs.source_networks.start_source_network_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceNetworkID": "{{ sourceNetworkID }}"
}'
;
```
</TabItem>
<TabItem value="stop_source_network_replication">

Stops replication for a Source Network. This action would make the Source Network unprotected.

```sql
EXEC aws.drs.source_networks.stop_source_network_replication 
@region='{{ region }}' --required 
@@json=
'{
"sourceNetworkID": "{{ sourceNetworkID }}"
}'
;
```
</TabItem>
</Tabs>
