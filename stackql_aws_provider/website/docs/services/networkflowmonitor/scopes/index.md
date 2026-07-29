--- 
title: scopes
hide_title: false
hide_table_of_contents: false
keywords:
  - scopes
  - networkflowmonitor
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

Creates, updates, deletes, gets or lists a <code>scopes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scopes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkflowmonitor.scopes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scope"
    values={[
        { label: 'get_scope', value: 'get_scope' },
        { label: 'list_scopes', value: 'list_scopes' }
    ]}
>
<TabItem value="get_scope">

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
    <td><CopyableCode code="scope_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the scope. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scope_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account. A scope ID is returned from a CreateScope API call.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status for a scope. The status can be one of the following: SUCCEEDED, IN_PROGRESS, FAILED, DEACTIVATING, or DEACTIVATED. A status of DEACTIVATING means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of DEACTIVATED means that the deactivating process is complete. (SUCCEEDED, IN_PROGRESS, FAILED, DEACTIVATING, DEACTIVATED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags for a scope.</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The targets to define the scope to be monitored. A target is an array of targetResources, which are currently Region-account pairs, defined by targetResource constructs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scopes">

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
    <td><CopyableCode code="scope_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the scope. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scope_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the scope that includes the resources that you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for the accounts in a scope.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status for a scope. The status can be one of the following: SUCCEEDED, IN_PROGRESS, FAILED, DEACTIVATING, or DEACTIVATED. A status of DEACTIVATING means that you've requested a scope to be deactivated and Network Flow Monitor is in the process of deactivating the scope. A status of DEACTIVATED means that the deactivating process is complete. (SUCCEEDED, IN_PROGRESS, FAILED, DEACTIVATING, DEACTIVATED)</td>
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
    <td><a href="#get_scope"><CopyableCode code="get_scope" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a scope, including the name, status, tags, and target details. The scope in Network Flow Monitor is an account.</td>
</tr>
<tr>
    <td><a href="#list_scopes"><CopyableCode code="list_scopes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List all the scopes for an account.</td>
</tr>
<tr>
    <td><a href="#create_scope"><CopyableCode code="create_scope" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targets"><code>targets</code></a></td>
    <td></td>
    <td>In Network Flow Monitor, you specify a scope for the service to generate metrics for. By using the scope, Network Flow Monitor can generate a topology of all the resources to measure performance metrics for. When you create a scope, you enable permissions for Network Flow Monitor. A scope is a Region-account pair or multiple Region-account pairs. Network Flow Monitor uses your scope to determine all the resources (the topology) where Network Flow Monitor will gather network flow performance metrics for you. To provide performance metrics, Network Flow Monitor uses the data that is sent by the Network Flow Monitor agents you install on the resources. To define the Region-account pairs for your scope, the Network Flow Monitor API uses the following constucts, which allow for future flexibility in defining scopes: Targets, which are arrays of targetResources. Target resources, which are Region-targetIdentifier pairs. Target identifiers, made up of a targetID (currently always an account ID) and a targetType (currently always an account).</td>
</tr>
<tr>
    <td><a href="#update_scope"><CopyableCode code="update_scope" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a scope to add or remove resources that you want to be available for Network Flow Monitor to generate metrics for, when you have active agents on those resources sending metrics reports to the Network Flow Monitor backend.</td>
</tr>
<tr>
    <td><a href="#delete_scope"><CopyableCode code="delete_scope" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a scope that has been defined.</td>
</tr>
<tr>
    <td><a href="#start_query_workload_insights_top_contributors"><CopyableCode code="start_query_workload_insights_top_contributors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-metricName"><code>metricName</code></a>, <a href="#parameter-destinationCategory"><code>destinationCategory</code></a></td>
    <td></td>
    <td>Create a query with the Network Flow Monitor query interface that you can run to return workload insights top contributors. Specify the scope that you want to create a query for. The call returns a query ID that you can use with GetQueryResultsWorkloadInsightsTopContributors to run the query and return the top contributors for the workload insights for a scope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable APIs for the top contributors that you want to be returned.</td>
</tr>
<tr>
    <td><a href="#start_query_workload_insights_top_contributors_data"><CopyableCode code="start_query_workload_insights_top_contributors_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-metricName"><code>metricName</code></a>, <a href="#parameter-destinationCategory"><code>destinationCategory</code></a></td>
    <td></td>
    <td>Create a query with the Network Flow Monitor query interface that you can run to return data for workload insights top contributors. Specify the scope that you want to create a query for. The call returns a query ID that you can use with GetQueryResultsWorkloadInsightsTopContributorsData to run the query and return the data for the top contributors for the workload insights for a scope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</td>
</tr>
<tr>
    <td><a href="#stop_query_workload_insights_top_contributors"><CopyableCode code="stop_query_workload_insights_top_contributors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stop a top contributors query for workload insights. Specify the query that you want to stop by providing a query ID and a scope ID. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</td>
</tr>
<tr>
    <td><a href="#stop_query_workload_insights_top_contributors_data"><CopyableCode code="stop_query_workload_insights_top_contributors_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-scope_id"><code>scope_id</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stop a top contributors data query for workload insights. Specify the query that you want to stop by providing a query ID and a scope ID. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</td>
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
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-scope_id">
    <td><CopyableCode code="scope_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the scope that includes the resources you want to get data results for. A scope ID is an internally-generated identifier that includes all the resources for a specific root account.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of query results that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_scope"
    values={[
        { label: 'get_scope', value: 'get_scope' },
        { label: 'list_scopes', value: 'list_scopes' }
    ]}
>
<TabItem value="get_scope">

Gets information about a scope, including the name, status, tags, and target details. The scope in Network Flow Monitor is an account.

```sql
SELECT
scope_arn,
scope_id,
status,
tags,
targets
FROM aws.networkflowmonitor.scopes
WHERE scope_id = '{{ scope_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scopes">

List all the scopes for an account.

```sql
SELECT
scope_arn,
scope_id,
status
FROM aws.networkflowmonitor.scopes
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scope"
    values={[
        { label: 'create_scope', value: 'create_scope' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scope">

In Network Flow Monitor, you specify a scope for the service to generate metrics for. By using the scope, Network Flow Monitor can generate a topology of all the resources to measure performance metrics for. When you create a scope, you enable permissions for Network Flow Monitor. A scope is a Region-account pair or multiple Region-account pairs. Network Flow Monitor uses your scope to determine all the resources (the topology) where Network Flow Monitor will gather network flow performance metrics for you. To provide performance metrics, Network Flow Monitor uses the data that is sent by the Network Flow Monitor agents you install on the resources. To define the Region-account pairs for your scope, the Network Flow Monitor API uses the following constucts, which allow for future flexibility in defining scopes: Targets, which are arrays of targetResources. Target resources, which are Region-targetIdentifier pairs. Target identifiers, made up of a targetID (currently always an account ID) and a targetType (currently always an account).

```sql
INSERT INTO aws.networkflowmonitor.scopes (
targets,
clientToken,
tags,
region
)
SELECT 
'{{ targets }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
scope_arn,
scope_id,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scopes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scopes resource.
    - name: targets
      value:
        - targetIdentifier:
            targetId:
              accountId: "{{ accountId }}"
            targetType: "{{ targetType }}"
          region: "{{ region }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scope"
    values={[
        { label: 'update_scope', value: 'update_scope' }
    ]}
>
<TabItem value="update_scope">

Update a scope to add or remove resources that you want to be available for Network Flow Monitor to generate metrics for, when you have active agents on those resources sending metrics reports to the Network Flow Monitor backend.

```sql
UPDATE aws.networkflowmonitor.scopes
SET 
resourcesToAdd = '{{ resourcesToAdd }}',
resourcesToDelete = '{{ resourcesToDelete }}'
WHERE 
scope_id = '{{ scope_id }}' --required
AND region = '{{ region }}' --required
RETURNING
scope_arn,
scope_id,
status,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scope"
    values={[
        { label: 'delete_scope', value: 'delete_scope' }
    ]}
>
<TabItem value="delete_scope">

Deletes a scope that has been defined.

```sql
DELETE FROM aws.networkflowmonitor.scopes
WHERE scope_id = '{{ scope_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_query_workload_insights_top_contributors"
    values={[
        { label: 'start_query_workload_insights_top_contributors', value: 'start_query_workload_insights_top_contributors' },
        { label: 'start_query_workload_insights_top_contributors_data', value: 'start_query_workload_insights_top_contributors_data' },
        { label: 'stop_query_workload_insights_top_contributors', value: 'stop_query_workload_insights_top_contributors' },
        { label: 'stop_query_workload_insights_top_contributors_data', value: 'stop_query_workload_insights_top_contributors_data' }
    ]}
>
<TabItem value="start_query_workload_insights_top_contributors">

Create a query with the Network Flow Monitor query interface that you can run to return workload insights top contributors. Specify the scope that you want to create a query for. The call returns a query ID that you can use with GetQueryResultsWorkloadInsightsTopContributors to run the query and return the top contributors for the workload insights for a scope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable APIs for the top contributors that you want to be returned.

```sql
EXEC aws.networkflowmonitor.scopes.start_query_workload_insights_top_contributors 
@scope_id='{{ scope_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}", 
"metricName": "{{ metricName }}", 
"destinationCategory": "{{ destinationCategory }}", 
"limit": {{ limit }}
}'
;
```
</TabItem>
<TabItem value="start_query_workload_insights_top_contributors_data">

Create a query with the Network Flow Monitor query interface that you can run to return data for workload insights top contributors. Specify the scope that you want to create a query for. The call returns a query ID that you can use with GetQueryResultsWorkloadInsightsTopContributorsData to run the query and return the data for the top contributors for the workload insights for a scope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.

```sql
EXEC aws.networkflowmonitor.scopes.start_query_workload_insights_top_contributors_data 
@scope_id='{{ scope_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}", 
"metricName": "{{ metricName }}", 
"destinationCategory": "{{ destinationCategory }}"
}'
;
```
</TabItem>
<TabItem value="stop_query_workload_insights_top_contributors">

Stop a top contributors query for workload insights. Specify the query that you want to stop by providing a query ID and a scope ID. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.

```sql
EXEC aws.networkflowmonitor.scopes.stop_query_workload_insights_top_contributors 
@scope_id='{{ scope_id }}' --required, 
@query_id='{{ query_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_query_workload_insights_top_contributors_data">

Stop a top contributors data query for workload insights. Specify the query that you want to stop by providing a query ID and a scope ID. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.

```sql
EXEC aws.networkflowmonitor.scopes.stop_query_workload_insights_top_contributors_data 
@scope_id='{{ scope_id }}' --required, 
@query_id='{{ query_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
