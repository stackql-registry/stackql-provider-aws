--- 
title: network_insights_access_scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_access_scopes
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

Creates, updates, deletes, gets or lists a <code>network_insights_access_scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_insights_access_scopes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.network_insights_access_scopes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_network_insights_access_scopes"
    values={[
        { label: 'describe_network_insights_access_scopes', value: 'describe_network_insights_access_scopes' }
    ]}
>
<TabItem value="describe_network_insights_access_scopes">

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
    <td><CopyableCode code="created_date" /></td>
    <td><code>string</code></td>
    <td>The creation date.</td>
</tr>
<tr>
    <td><CopyableCode code="network_insights_access_scope_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Network Access Scope.</td>
</tr>
<tr>
    <td><CopyableCode code="network_insights_access_scope_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Network Access Scope.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_date" /></td>
    <td><code>string</code></td>
    <td>The last updated date.</td>
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
    <td><a href="#describe_network_insights_access_scopes"><CopyableCode code="describe_network_insights_access_scopes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NetworkInsightsAccessScopeId"><code>NetworkInsightsAccessScopeId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the specified Network Access Scopes.</td>
</tr>
<tr>
    <td><a href="#create_network_insights_access_scope"><CopyableCode code="create_network_insights_access_scope" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MatchPath"><code>MatchPath</code></a>, <a href="#parameter-ExcludePath"><code>ExcludePath</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a Network Access Scope. Amazon Web Services Network Access Analyzer enables cloud networking and cloud operations teams to verify that their networks on Amazon Web Services conform to their network security and governance objectives. For more information, see the Amazon Web Services Network Access Analyzer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_network_insights_access_scope"><CopyableCode code="delete_network_insights_access_scope" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NetworkInsightsAccessScopeId"><code>NetworkInsightsAccessScopeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Network Access Scope.</td>
</tr>
<tr>
    <td><a href="#delete_network_insights_access_scope_analysis"><CopyableCode code="delete_network_insights_access_scope_analysis" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NetworkInsightsAccessScopeAnalysisId"><code>NetworkInsightsAccessScopeAnalysisId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Network Access Scope analysis.</td>
</tr>
<tr>
    <td><a href="#start_network_insights_access_scope_analysis"><CopyableCode code="start_network_insights_access_scope_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-NetworkInsightsAccessScopeId"><code>NetworkInsightsAccessScopeId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Starts analyzing the specified Network Access Scope.</td>
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
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-NetworkInsightsAccessScopeAnalysisId">
    <td><CopyableCode code="NetworkInsightsAccessScopeAnalysisId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Network Access Scope analysis.</td>
</tr>
<tr id="parameter-NetworkInsightsAccessScopeId">
    <td><CopyableCode code="NetworkInsightsAccessScopeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Network Access Scope.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ExcludePath">
    <td><CopyableCode code="ExcludePath" /></td>
    <td><code>array</code></td>
    <td>The paths to exclude.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>There are no supported filters.</td>
</tr>
<tr id="parameter-MatchPath">
    <td><CopyableCode code="MatchPath" /></td>
    <td><code>array</code></td>
    <td>The paths to match.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NetworkInsightsAccessScopeId">
    <td><CopyableCode code="NetworkInsightsAccessScopeId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Network Access Scopes.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_network_insights_access_scopes"
    values={[
        { label: 'describe_network_insights_access_scopes', value: 'describe_network_insights_access_scopes' }
    ]}
>
<TabItem value="describe_network_insights_access_scopes">

Describes the specified Network Access Scopes.

```sql
SELECT
created_date,
network_insights_access_scope_arn,
network_insights_access_scope_id,
tags,
updated_date
FROM aws.ec2.network_insights_access_scopes
WHERE region = '{{ region }}' -- required
AND NetworkInsightsAccessScopeId = '{{ NetworkInsightsAccessScopeId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_insights_access_scope"
    values={[
        { label: 'create_network_insights_access_scope', value: 'create_network_insights_access_scope' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_insights_access_scope">

Creates a Network Access Scope. Amazon Web Services Network Access Analyzer enables cloud networking and cloud operations teams to verify that their networks on Amazon Web Services conform to their network security and governance objectives. For more information, see the Amazon Web Services Network Access Analyzer Guide.

```sql
INSERT INTO aws.ec2.network_insights_access_scopes (
ClientToken,
region,
MatchPath,
ExcludePath,
TagSpecification,
DryRun
)
SELECT 
'{{ ClientToken }}',
'{{ region }}',
'{{ MatchPath }}',
'{{ ExcludePath }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
created_date,
network_insights_access_scope_arn,
network_insights_access_scope_id,
tags,
updated_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_insights_access_scopes
  props:
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Required parameter for the network_insights_access_scopes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_insights_access_scopes resource.
    - name: MatchPath
      value: "{{ MatchPath }}"
      description: The paths to match.
      description: The paths to match.
    - name: ExcludePath
      value: "{{ ExcludePath }}"
      description: The paths to exclude.
      description: The paths to exclude.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply.
      description: The tags to apply.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_insights_access_scope"
    values={[
        { label: 'delete_network_insights_access_scope', value: 'delete_network_insights_access_scope' },
        { label: 'delete_network_insights_access_scope_analysis', value: 'delete_network_insights_access_scope_analysis' }
    ]}
>
<TabItem value="delete_network_insights_access_scope">

Deletes the specified Network Access Scope.

```sql
DELETE FROM aws.ec2.network_insights_access_scopes
WHERE NetworkInsightsAccessScopeId = '{{ NetworkInsightsAccessScopeId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
<TabItem value="delete_network_insights_access_scope_analysis">

Deletes the specified Network Access Scope analysis.

```sql
DELETE FROM aws.ec2.network_insights_access_scopes
WHERE NetworkInsightsAccessScopeAnalysisId = '{{ NetworkInsightsAccessScopeAnalysisId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_network_insights_access_scope_analysis"
    values={[
        { label: 'start_network_insights_access_scope_analysis', value: 'start_network_insights_access_scope_analysis' }
    ]}
>
<TabItem value="start_network_insights_access_scope_analysis">

Starts analyzing the specified Network Access Scope.

```sql
EXEC aws.ec2.network_insights_access_scopes.start_network_insights_access_scope_analysis 
@NetworkInsightsAccessScopeId='{{ NetworkInsightsAccessScopeId }}' --required, 
@ClientToken='{{ ClientToken }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@TagSpecification='{{ TagSpecification }}'
;
```
</TabItem>
</Tabs>
